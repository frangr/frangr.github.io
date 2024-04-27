// *******FRVSE - Franto RISC-V Simple Emulator - by Francesco Grieco*******

self.importScripts('VIDEO_DATA.js')

const ROM_MEMORY_START_ADDRESS = 0x0;
const ROM_MEMORY_SIZE = 0x2DC6C0; //3MB

const RAM_START_ADDRESS = ROM_MEMORY_START_ADDRESS + ROM_MEMORY_SIZE; //0x2DC6C0
const RAM_SIZE = 0x4C4B40; //5MB

const MM_START_ADDRESS = RAM_START_ADDRESS + RAM_SIZE; //0x7A1200
const MM_SIZE = 0x7A1200; //8MB

const VIDEO_MEMORY_START_ADDRESS = MM_START_ADDRESS + MM_SIZE; //0xF42400
const VIDEO_MEMORY_SIZE = 0x3E800;

const TEXT_MODE_MEMORY_START_ADDRESS = VIDEO_MEMORY_START_ADDRESS + VIDEO_MEMORY_SIZE; //0xF80C00
const TEXT_MODE_MEMORY_SIZE = 0xFA0; //4000 bytes (1000 4-byte word for each character)

const STOP_REGISTER_ADDRESS = TEXT_MODE_MEMORY_START_ADDRESS + TEXT_MODE_MEMORY_SIZE //F81BA0

const KEYCODE_REGISTER_ADDRESS = STOP_REGISTER_ADDRESS+1 //F81BA1

// READ WRITE
const READ = 0;
const WRITE = 1;
// STRING LENGTH
const ONE_BYTE = 0;
const TWO_BYTE = 1;
const FOUR_BYTE = 2;
// RESET VECTOR
const RESET_VECTOR = ROM_MEMORY_START_ADDRESS;
// INSTRUCTION FINAL DECODE
const LUI = 0x37;
const AUIPC = 0x17;
const JAL = 0x6F;
const JALR = 0x67;
const BEQ = 0x0;
const BNE = 0x1;
const BLT = 0x4;
const BGE = 0x5;
const BLTU = 0x6;
const BGEU = 0x7;
const LB = 0x0;
const LH = 0x1;
const LW = 0x2;
const LBU = 0x4;
const LHU = 0x5;
const SB = 0x0;
const SH = 0x1;
const SW = 0x2;
const ADDI = 0x0;
const SLTI = 0x2;
const SLTIU = 0x3;
const XORI = 0x4;
const ORI = 0x6;
const ANDI = 0x7;
const SLLI = 0x1;
const SRLI_SRAI = 0x5;
const ADD = 0x0;
const SUB = 0x20; //0x20 in hex equals 32 in decimal
const SLL = 0x1;
const SLT = 0x2;
const SLTU = 0x3;
const XOR = 0x4;
const SRL = 0x5;
const SRA = 0x25; //0x25 in hex equals 37 in decimal
const OR = 0x6;
const AND = 0x7;
const FENCEI = 0x8;
const ECALL = 0x0;
const EBREAK = 0x2;
const MRET = 0x342;
const WFI = 0x105;
const CSRRW = 0x1;
const CSRRS = 0x2;
const CSRRC = 0x3;
const CSRRWI = 0x5;
const CSRRSI = 0x6;
const CSRRCI = 0x7;
const FUNCT7_SUB_SRA = 0x20;
const FUNCT7_RTYPE = 0;
const FUNCT7_MULDIV = 0x1;
const MUL = 0; //6
const MULH = 1; //7
const MULHSU = 2; //8
const MULHU = 3; //9
const DIV = 4; //10
const DIVU = 5; //11
const REM = 6; //12
const REMU = 7; //13

const SYSTEM = 0x73;
const PRIV = 0;
const FENCE = 0xF;

// INSTRUCTION TYPE
const B_TYPE = 0x63;
const LOAD_TYPE = 3;
const STORE_TYPE = 0x23;
const I_TYPE = 0x13;
const R_TYPE = 0x33;

//SCREEN SIZE
const W = 320;
const H = 200;

//EMULATOR VARIABLES/CONST
let ROM_MEMORY = null
let RAM_MEMORY = null
let MM_MEMORY = null
let VRAM_MEMORY = null
let CHARACTER_MEMORY = null
let pixel_addr = null;
let pixel_data = null;
let pixel_bitmask = null;
let upd_pixel_cnt = null;
let ctrl_word = null;
let keycode = null;
let inst = 0
let hex_dec = false
let u16 = new Uint16Array(5)
let i16 = new Int16Array(5)
let u32 = new Uint32Array(5)
let i32 = new Int32Array(5)
let u64 = new BigUint64Array(5)
let i64 = new BigInt64Array(5)

//RISC-V VARIABLES
let pc = null;
let reg = null; //SYSTEM REGISTERS
let inst_arr = null; //= new Uint8Array(4) //INSTRUCTION REGISTER
let reset_pin = 1

//SHARED MEMORIES
let sh_ROM_MEMORY = null;
let sh_RAM_MEMORY = null;
let sh_MM_MEMORY = null;
let sh_VRAM_MEMORY = null;
let sh_CHARACTER_MEMORY = null;
let sh_pc = null;
let sh_reg = null; //pc included with gp registers
let sh_inst_arr = null;
let sh_pixel_addr = null;
let sh_pixel_data = null;
let sh_pixel_bitmask = null;
let sh_upd_pixel_cnt = null;
let sh_ctrl_word = null;
let sh_keycode = null;

self.addEventListener('message', function(event) {
	if (event.data[0] === "ROMU") //transfer ROM file
	{
		ROM_MEMORY = new Uint8Array(event.data[1])
		return;
	}
	if (event.data[0] === "MMU") //transfer ROM file
	{
		MM_MEMORY = new Uint8Array(event.data[1])
		return;
	}
	if (event.data === 'start') {
		
		FRVSE_main()
		return;
	}
	if (event.data === 'step') {
		
		step_frvse()
		return;
	}
});

function FRVSE_main()
{
	init_frvse()
	ctrl_word[0] = 1;
	while(ctrl_word[0] == 1)
		riscv32I_core()
}

let init_lock = false
function init_frvse()
{	
	if (init_lock)
		return;
	
	sh_RAM_MEMORY = new SharedArrayBuffer(RAM_SIZE); 
	sh_VRAM_MEMORY = new SharedArrayBuffer((W*H)*4); 
	sh_CHARACTER_MEMORY = new SharedArrayBuffer(TEXT_MODE_MEMORY_SIZE); 
	sh_pc = new SharedArrayBuffer(4); 
	sh_inst_arr = new SharedArrayBuffer(4); 
	sh_reg = new SharedArrayBuffer(128); 
	
	//VIDEO
	sh_pixel_addr = new SharedArrayBuffer(2);
	sh_pixel_data = new SharedArrayBuffer(4);
	sh_pixel_bitmask = new SharedArrayBuffer(W*H); 
	
	sh_upd_pixel_cnt = new SharedArrayBuffer(2);
	sh_ctrl_word = new SharedArrayBuffer(2);
	sh_keycode = new SharedArrayBuffer(1);
	
	RAM_MEMORY = new Uint8Array(sh_RAM_MEMORY);
	VRAM_MEMORY = new Uint32Array(sh_VRAM_MEMORY);
	CHARACTER_MEMORY = new Uint32Array(sh_CHARACTER_MEMORY);
	pc = new Uint32Array(sh_pc);
	inst_arr = new Uint8Array(sh_inst_arr);
	reg = new Uint32Array(sh_reg);
	pixel_addr = new Uint16Array(sh_pixel_addr);
	pixel_data = new Uint32Array(sh_pixel_data);
	pixel_bitmask = new Uint8Array(sh_pixel_bitmask);
	upd_pixel_cnt = new Uint16Array(sh_upd_pixel_cnt);
	ctrl_word = new Uint8Array(sh_ctrl_word);
	keycode = new Uint8Array(sh_keycode);
	
	ctrl_word[1] = 1;
	self.postMessage(["CMR", sh_RAM_MEMORY, sh_VRAM_MEMORY, sh_CHARACTER_MEMORY, sh_pc, sh_reg, sh_pixel_addr, sh_pixel_data, sh_pixel_bitmask, sh_upd_pixel_cnt, sh_ctrl_word, sh_inst_arr, sh_keycode]);
	
	init_lock = true;
}

function step_frvse()
{
	init_frvse()
	ctrl_word[0] = 0;
	riscv32I_core()
}

function compose_array(arr)
{
	if (arr.length > 4)
		return null;
	
	let ret_arr = 0;
	let bit_cnt = 0;
	
	for (i in arr) 
	{
		ret_arr |= arr[i] << bit_cnt;
		bit_cnt += 8;
	}
	
	return ret_arr;
}

function FUNCT3(){return (inst >> 12) & 0x7;}

function FUNCT7(){return (inst >> 25);}

function RS1(){return ((inst >> 15) & 0x1F);}

function RS2(){return (inst >> 20) & 0x1F;}

function RD(){return (inst >> 7) & 0x1F;}

function I_TYPE_IMMEDIATE(){
	i16[0] = (inst & 0x80000000 | ((inst >> 20) & 0x7ff));
	return i16[0];
}

function I_TYPE_IMMEDIATE_U(){
	u16[0] = (inst & 0x80000000 | ((inst >> 20) & 0x7ff));
	return u16[0];
}

function JAL_IMMEDIATE(){
	i32[0] = (((inst & 0x7FE00000) >> 20) | ((inst & 0x100000) >> 9) | (inst & 0xFF000) | (inst & 0x80000000));
	return i32[0];
}

function BRANCH_IMMEDIATE(){
	return (((inst & 0xF00) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0x80) << 4)) & 0xFFFFFFFE;
}

function SW_ADDRESS(){
	return ((inst >> 20) & 0xFE0) | ((inst >> 7) & 0x1F);
}

function reset_routine()
{
	pc[0] = RESET_VECTOR;

	reg.fill(0);
	RAM_MEMORY.fill(0);
	
	VRAM_MEMORY.fill(0);
	upd_pixel_cnt[0] = W*H;
	pixel_bitmask.fill(1);
	
	CHARACTER_MEMORY.fill(0);
	ctrl_word[1] = 0;
}

//INSTRUCTION FUNCTIONS
function lui() //#
{
    if(RD())
        reg[RD()] = inst & 0xFFFFF000;
}
function auipc() //#
{
    if(RD())
        reg[RD()] = (inst & 0xFFFFF000) + pc[0]; //pc
}
function jal() //#
{
    let bf = 0;

    if(RD())
        reg[RD()] = pc[0] + 4;

    bf = (((inst & 0x7FE00000) >> 20) | ((inst & 0x100000) >> 9) | (inst & 0xFF000) );
    if(inst >> 31)
        bf |= 0xFFF00000;

	//add_to_array(pc, bf);
    pc[0] += bf;
}
function jalr() //#
{
    let bf = 0;

    if(RD())
        reg[RD()] = pc[0] + 4;

    bf = inst >> 20;

    if(inst >> 31)
        bf |= 0xFFFFF000;

	i32[0] = reg[RS1()];
    bf += i32[0];

    bf &= 0xFFFFFFFE;

	//add_to_array(pc, bf);
    pc[0] = bf;
}
function beq() //#
{
    let bf = 0;

    if(reg[RS1()] == reg[RS2()])
    {
        bf = BRANCH_IMMEDIATE();

        if(inst >> 31)
            bf |= 0xFFFFF000;
        else
            bf &= 0xFFE;

		//add_to_array(pc, bf);
        pc[0] += bf;
        return 1;
    }
    return 0;
}
function bne() //#
{
    let bf = 0;

    if(reg[RS1()] != reg[RS2()])
    {
        bf = BRANCH_IMMEDIATE();

        if(inst >> 31)
            bf |= 0xFFFFF000;
        else
            bf &= 0xFFE;

		//add_to_array(pc, bf);
        pc[0] += bf;
        return 1;
    }
    return 0;
}
function blt() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	
    if(i32[0] < i32[1])
    {
        i32[2] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[2] |= 0xFFFFF000;
        else
            i32[2] &= 0xFFE;

		//add_to_array(pc, bf);
        pc[0] += i32[2];
        return 1;
    }
    return 0;
}
function bge() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	
    if(i32[0] >= i32[1])
    {
        i32[2] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[2] |= 0xFFFFF000;
        else
            i32[2] &= 0xFFE;

		//add_to_array(pc, bf);
        pc[0] += i32[2];
        return 1;
    }
    return 0;
}
function bltu() //#
{
    if(reg[RS1()] < reg[RS2()])
    {
		i32[0] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[0] |= 0xFFFFF000;
        else
            i32[0] &= 0xFFE;

		//add_to_array(pc, i32[0]);
        pc += i32[0];
        return 1;
    }
    return 0;
}
function bgeu() //#
{
    if(reg[RS1()] >= reg[RS2()])
    {
		i32[0] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[0] |= 0xFFFFF000;
        else
            i32[0] &= 0xFFE;

		//add_to_array(pc, i32[0]);
        pc[0] += i32[0];
        return 1;
    }
    return 0;
}
function lb() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, ONE_BYTE);

    //sign extension
    if(reg[RD()] >> 7)
        reg[RD()] |= 0xFFFFFF00;
}
function lh() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, TWO_BYTE);

    //sign extension
    if(reg[RD()] >> 15)
        reg[RD()] |= 0xFFFF0000;
}
function lw() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, FOUR_BYTE);
}
function lbu() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, ONE_BYTE);
}
function lhu() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, TWO_BYTE);
}
function sb() //#
{
	i16[0] = SW_ADDRESS();

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RS2()], WRITE, ONE_BYTE);
}
function sh() //#
{
	let imm = new Int16Array(1);
	imm[0] = SW_ADDRESS();

    if(imm[0] >> 11)
        imm[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + imm[0], reg[RS2()], WRITE, TWO_BYTE); //(SW_ADDRESS)
}
function sw() //#
{
	i16[0] = SW_ADDRESS();

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RS2()], WRITE, FOUR_BYTE); //(SW_ADDRESS)
}
function addi() //#
{
    i32[0] = (inst & 0x7FF00000) >> 20;

    if(inst >> 31)
        i32[0] |= 0x1FFFFF800;
    else
        i32[0] &= 0x7FF;

	i32[1] = reg[RS1()]
	
	i32[1] += i32[0];

    reg[RD()] = i32[1];
}
function slti() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

	i32[0] = reg[RS1()]
    reg[RD()] = i32[0] < i16[0]? 1 : 0; //I_TYPE_IMMEDIATE
}
function sltiu() //#
{
    u16[0] = inst >> 20;

    if(u16[0] & 0x800)
        u16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] < u16[0]? 1 : 0; //I_TYPE_IMMEDIATE
}
function xori() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] ^ i16[0]; // I_TYPE_IMMEDIATE;
}
function ori() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] | i16[0]; //I_TYPE_IMMEDIATE;
}
function andi() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] & i16[0]; //I_TYPE_IMMEDIATE;
}
function slli() //#
{
    reg[RD()] = reg[RS1()] << (RS2()); //RS2 used as shamt[4:0]
}
function srli() //#
{
    reg[RD()] = reg[RS1()] >> (RS2()); //RS2 used as shamt[4:0]
}
function srai() //#
{
    reg[RD()] = reg[RS1()] >> (RS2()); //| (reg[RS1] & 0x80000000); //RS2 used as shamt[4:0]

    if(reg[RS1] & 0x80000000)
	{
		u32[0] = Math.pow(2, (RS2)-1);
		u32[1] = Math.pow(2, (RS2)-1);
		reg[RD()] |= u32[0] << (32 - u32[1]);
	}
}
function add() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
    reg[RD()] = i32[0] + i32[1];
}
function sub() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
    reg[RD()] = i32[0] - i32[1];
}
function sll() //#
{
    reg[RD()] = reg[RS1()] << (reg[RS2()] & 0x1F);
}
function slt() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	
    reg[RD()] = i32[0] < i32[1]? 1 : 0;
}
function sltu() //#
{
    reg[RD()] = reg[RS1()] < reg[RS2()]? 1 : 0;
}
function xor() //#
{
    reg[RD()] = reg[RS1()] ^ reg[RS2()];
}
function srl() //#
{
    reg[RD()] = reg[RS1()] >> (reg[RS2()] & 0x1F);
}
function sra() //#
{
    reg[RD()] = reg[RS1()] >> (RS2()); //| (reg[RS1] & 0x80000000); //RS2 used as shamt[4:0]

    if(reg[RS1()] & 0x80000000)
	{
		u32[0] = pow(2, (reg[RS2()] & 0x1F )-1);
		u32[1] = pow(2, (reg[RS2()] & 0x1F )-1);
		
		reg[RD()] |= u32[0] << (32 - u32[1]);
	}
}
function or() //#
{
    reg[RD()] = reg[RS1()] | reg[RS2()];
}
function and() //#
{
    reg[RD()] = reg[RS1()] & reg[RS2()];
}

function mul() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
    reg[RD()] = i32[0]*i32[1];
}

function mulh() //#
{
	i64[0] = reg[RS1()];
	i64[1] = reg[RS2()];
	
	i64[0] = i64[0]*i64[1]
	
    reg[RD()] = i64[0] >> 32;
}

function mulhsu() //#
{
	i64[0] = reg[RS1()];
	i64[1] = 0;
	
	u64[0] = reg[RS2()]; 
	
	i64[1] = i64[0] * u64[0];
	
    reg[RD()] = i64[1] >> 32;
}

function mulhu() //#
{
	u64[0] = reg[RS1()] * reg[RS2()];
	
    reg[RD()] = u64[0] >> 32;
}

function _div() //#
{
    if(!reg[RS2()])
    {
        reg[RD()] = 0xFFFFFFFF;
        return;
    }

	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	i32[2] = i32[0] / i32[1];
    reg[RD()] = i32[2];
}

function divu() //#
{
    if(!reg[RS2()])
    {
        reg[RD()] = 0xFFFFFFFF;
        return;
    }

    reg[RD] = reg[RS1()] / reg[RS2()];
}

function rem() //#
{
    if(!reg[RS2()])
    {
        reg[RD()] = 0xFFFFFFFF;
        return;
    }

	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	i32[2] = i32[0] % i32[1];
    reg[RD()] = i32[2];
}

function remu() //#
{
    if(!reg[RS2()])
    {
        reg[RD] = 0xFFFFFFFF;
        return;
    }

    reg[RD()] = reg[RS1()] % reg[RS2()];
}

/*
function mem_device_controller(device, addr, data, rw, sz)
{
	let data8 = new Uint8Array(data.buffer)
	console.log("MEM DEV2: "+data.length)
    if(rw == READ)
    {
		console.log("MEM DEV3")
        switch(sz)
        {
        case ONE_BYTE:
			data8[0] = device[addr]
            break;
        case TWO_BYTE:
			data8[0] = device[addr]
			data8[1] = device[addr+1]
            break;
        case FOUR_BYTE:
			data8[0] = device[addr]
			data8[1] = device[addr+1]
			data8[2] = device[addr+2]
			data8[3] = device[addr+3]
            break;
        }
    }
    else if(rw == WRITE)
    {
		console.log("MEM DEV4: "+data)
        switch(sz)
        {
        case ONE_BYTE:
            device[addr] = data8[0];
            break;
        case TWO_BYTE:
            device[addr] = data8[0];
            device[addr+1] = data8[1];
            break;
        case FOUR_BYTE:
            device[addr] = data8[0];
            device[addr+1] = data8[1];
            device[addr+2] = data8[2];
            device[addr+3] = data8[3];
            break;
        }
    }
}
*/

function mem_device_controller(device, addr, data, idx, rw, sz)
{
    if(rw == READ)
    {
        switch(sz)
        {
        case ONE_BYTE:
			data[idx] = device[addr]
            break;
        case TWO_BYTE:
			data[idx] = (device[addr+1] << 16) | device[addr];
            break;
        case FOUR_BYTE:
			data[idx] = 12; // (device[addr+3] << 24) | (device[addr+2] << 16) | (device[addr+1] << 8) | device[addr];
            break;
        }
    }
    else if(rw == WRITE)
    {
        switch(sz)
        {
        case ONE_BYTE:
            device[addr] = data[idx];
            break;
        case TWO_BYTE:
            device[addr] = data[idx];
            device[addr+1] = (data[idx] >> 8) & 0xFF;
            break;
        case FOUR_BYTE:
            device[addr] = data[idx];
            device[addr+1] = (data[idx] >> 8) & 0xFF;
            device[addr+2] = (data[idx] >> 16) & 0xFF;
            device[addr+3] = (data[idx] >> 24) & 0xFF;
            break;
        }
    }
}

const cset_font8x8_basic = 0
const cset_font8x8_block = 1
const cset_font8x8_box = 2
const cset_font8x8_ext_latin = 3
const cset_font8x8_greek = 4
const cset_font8x8_hiragana = 5
const cset_font_cp437 = 6
const cset_pmlomb = 7

function get_char_array(charch)
{
	switch(charch >> 8)
	{
		case cset_font8x8_basic:
			return font8x8_basic[charch & 0xFF];
		case cset_font8x8_block:
			return font8x8_block[charch & 0xFF];
		case cset_font8x8_box:
			return font8x8_box[charch & 0xFF];
		case cset_font8x8_ext_latin:
			return font8x8_ext_latin[charch & 0xFF];
		case cset_font8x8_greek:
			return font8x8_greek[charch & 0xFF];
		case cset_font8x8_hiragana:
			return font8x8_hiragana[charch & 0xFF];
		case cset_font_cp437:
			return font_cp437[charch & 0xFF];
		case cset_pmlomb:
			return pmlomb[charch & 0xFF];
		default:
			return font8x8_basic[charch & 0xFF];
	}
	
	return null;
}

function draw_character(addr, color)
{
	/*
	CHARACTER STRING
	
	1  2  3  4
	00-00-00-00
	
	1 byte(MSB): font
	2 byte: ascii character
	3 byte: char color
	4 byte(LSB): background color
	*/
    const CHAR_COLOR = color & 0xFF;
    const BACKGROUND_COLOR = ((color >> 8) & 0xFF);
    const CHARACTER = color >> 16;
    const MODE_ALPHA_COLOR = 0xF8;

    if((addr/4) > 999)
        return;

    //return the bitmap of the character
    let character = get_char_array(CHARACTER);

    if(character == null)
        return;

	//ascii_char_memory[addr] = (CHARACTER) & 0xFF;

    let screen_pos = 0;

    let clr = 0;

    //addr *= 2;

    addr += ((addr/8)/40)* (320*7); //0xA00;

	//let char_arr = []
    for(let i = 0; i < 8; i++)
    {
        for(let id = 0; id < 8; id++)
        {
            let bit = (character[i] >> id) & 0x1;

            screen_pos = addr+id;

            if(!bit)
                clr = CHAR_COLOR;
            else
                clr = BACKGROUND_COLOR;

            if( clr == MODE_ALPHA_COLOR )
                continue;

			let vga_color = (VGA_RGB_table[clr] << 8) | 0xFF;
            VRAM_MEMORY[screen_pos] = vga_color;
			pixel_bitmask[screen_pos] = 1;
			upd_pixel_cnt[0]++;
        }
        addr += 320;
    }
}

function text_mode_controller(addr, charac, rw)
{
    if(rw == WRITE)
    {
        CHARACTER_MEMORY[addr] = charac;
        draw_character(addr, CHARACTER_MEMORY[addr]);
    }
    else if(rw == READ)
    {
        charac = CHARACTER_MEMORY[addr];
    }
}

function video_memory_controller(addr, color, rw)
{
    if(rw)
    {
        VRAM_MEMORY[addr/4] = color;
		pixel_bitmask[addr] = 1;
		upd_pixel_cnt[0]++;
		
		//update_pixel([[addr, color]])
    }
    else if(!rw)
    {
        color = VRAM_MEMORY[addr/4];
    }
}

function send_to_chipset(addr, data, idx, rw, sz)
{
	let memory_dev = null
	
	let addr_offset = 0
	
	let isram = false
	
    if(addr >= ROM_MEMORY_START_ADDRESS && addr <= (ROM_MEMORY_START_ADDRESS + ROM_MEMORY_SIZE)-1)
	{
		addr_offset = addr - ROM_MEMORY_START_ADDRESS;
		
		memory_dev = ROM_MEMORY
	}
    else if(addr >= RAM_START_ADDRESS && addr <= (RAM_START_ADDRESS+RAM_SIZE)-1)
	{
		memory_dev = RAM_MEMORY
		addr_offset = addr - RAM_START_ADDRESS;
		console.log("ADDR: "+addr)
		console.log("RAM_START_ADDRESS: "+RAM_START_ADDRESS)
		console.log("ADDR OFFSET: "+addr_offset)
		console.log("RAM "+addr_offset+" -- "+rw+" -- "+sz)
		isram = true
	}
    else if(addr >= MM_START_ADDRESS && addr <= (MM_START_ADDRESS+MM_SIZE)-1)
	{
		if(MM_MEMORY == null)
			return;
		
		addr_offset = addr - MM_START_ADDRESS;
		
		memory_dev = MM_MEMORY;
	}
	
	if (memory_dev != null)
	{	
		mem_device_controller(memory_dev, addr_offset, data, idx, rw, sz)
		if(isram)
		{
		console.log(addr_offset+" - "+data+" - "+rw+" - "+sz)
		console.log("MEM DEV: "+memory_dev)
		console.log("RAM MEM: "+RAM_MEMORY)
		}
		memory_dev = null
		return
	}

    if(addr >= VIDEO_MEMORY_START_ADDRESS && addr <= (VIDEO_MEMORY_START_ADDRESS + VIDEO_MEMORY_SIZE)-1)
    {
        if(sz != FOUR_BYTE)
            return; //FAULT

        video_memory_controller(addr-VIDEO_MEMORY_START_ADDRESS, data, rw);
        return;
    }

    if(addr >= TEXT_MODE_MEMORY_START_ADDRESS && addr <= (TEXT_MODE_MEMORY_START_ADDRESS + TEXT_MODE_MEMORY_SIZE)-1)
    {
        text_mode_controller(addr-TEXT_MODE_MEMORY_START_ADDRESS, data, rw);
        return;
    }
	
	if(addr == STOP_REGISTER_ADDRESS)
	{
        if(sz != ONE_BYTE || rw != WRITE)
            return;
		ctrl_word[0] = 0;
		return;
	}
	
	if(addr == KEYCODE_REGISTER_ADDRESS)
	{
        if(sz != ONE_BYTE || rw != READ)
            return;
		data = keycode[0];
		return;
	}
}

//EMULATOR FUNCTION
function riscv32I_core()
{
	if(ctrl_word[1] == 1)
		reset_routine();

	let inst1 = new Uint32Array(1)

    //send_to_chipset(pc[0], inst_arr, READ, FOUR_BYTE);
	send_to_chipset(pc[0], inst1, 0, READ, FOUR_BYTE);

	//inst = compose_array(inst_arr);

	console.log("INST2: "+inst1[0])

	return

    switch(inst & 0x7F)
    {
        case LUI:
            lui();
            break;
        case AUIPC:
            auipc();
            break;
        case JAL:
            jal();
            return;
        case JALR:
            jalr();
            return;
        case B_TYPE:
            switch(FUNCT3()) //check funct3
            {
            case BEQ:
                if(beq())
                    return;
                break;
            case BNE:
                if(bne())
                    return;
                break;
            case BLT:
                if(blt())
                    return;
                break;
            case BGE:
                if(bge())
                    return;
                break;
            case BLTU:
                if(bltu())
                    return;
                break;
            case BGEU:
                if(bgeu())
                    return;
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case LOAD_TYPE:
            switch(FUNCT3())
            {
            case LB:
                lb();
                break;
            case LH:
                lh();
                break;
            case LW:
                lw();
                break;
            case LBU:
                lbu();
                break;
            case LHU:
                lhu();
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case STORE_TYPE:
            switch(FUNCT3())
            {
            case SB:
                sb();
                break;
            case SH:
                sh();
                break;
            case SW:
                sw();
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case I_TYPE:
            switch(FUNCT3())
            {
            case ADDI:
                addi();
                break;
            case SLTI:
                slti();
                break;
            case SLTIU:
                sltiu();
                break;
            case XORI:
                xori();
                break;
            case ORI:
                ori();
                break;
            case ANDI:
                andi();
                break;
            case SLLI:
                slli();
                break;
            case SRLI_SRAI:
                if(!FUNCT7())
                    srli();
                else if(FUNCT7() == 32)
                    srai();
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case R_TYPE:
            switch(FUNCT7()) //(FUNCT3) + (FUNCT7) )
            {
            case FUNCT7_SUB_SRA:
                switch(FUNCT3())
                {
                case SUB:
                    sub();
                    break;
                case SRA:
                    sra();
                    break;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    break;
                }
                break;
            case FUNCT7_RTYPE:
                switch(FUNCT3())
                {
                case ADD:
                    add();
                    break;
                case SLL:
                    sll();
                    break;
                case SLT:
                    slt();
                    break;
                case SLTU:
                    sltu();
                    break;
                case XOR:
                    xor();
                    break;
                case SRL:
                    srl();
                    break;
                case OR:
                    or();
                    break;
                case AND:
                    and();
                    break;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            case FUNCT7_MULDIV:
                switch(FUNCT3())
                {
                case MUL:
                    mul();
                    break;
                case MULH:
                    mulh();
                    break;
                case MULHSU:
                    mulhsu();
                    break;
                case MULHU:
                    mulhu();
                    break;
                case DIV:
                    _div();
                    break;
                case DIVU:
                    divu();
                    break;
                case REM:
                    rem();
                    break;
                case REMU:
                    remu();
                    break;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case FENCE: //NOT IMPLEMENTED
            if(inst >> 12)
            {
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case SYSTEM:
            switch(FUNCT3())
            {
            case PRIV:
                switch(inst >> 20)
                {
                case ECALL:
                    //eti_handler(MCAUSE_ECALL);
                    return;
                case EBREAK:
                    //eti_handler(MCAUSE_EBREAK);
                    return;
                case MRET:
                    //pc = csr.mepc;
                    return;
                case WFI:
                    //CORE_LOG("WFI\n");
                    return;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            case CSRRW:
                break;
            case CSRRS:
                break;
            case CSRRC:
                break;
            case CSRRWI:
                break;
            case CSRRSI:
                break;
            case CSRRCI:
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        default:
            //eti_handler(MCAUSE_ILLEGAL_OP);
            return;
    }

    pc[0] += 4;
}
