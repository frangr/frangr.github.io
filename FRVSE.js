function functest(p1){console.log("test: "+p1)}

//"MACRO"
const MAX_INTERRUPT_NUMBER = 8;
const MAX_NMI_NUMBER = 4;

/**----------------------------------------**/
const ROM_MEMORY_START_ADDRESS = 0x0;
const ROM_MEMORY_SIZE = 0x4C4B40;

const VIDEO_MEMORY_START_ADDRESS = 0x4C4B41;
const VIDEO_MEMORY_SIZE = 0x3E800;
const VIDEO_MEMORY_CONTROL_REGISTER = 0x7DFA03;

const TEXT_MODE_MEMORY_START_ADDRESS = 0x7DFA3D;
const TEXT_MODE_MEMORY_SIZE = 0xFA0;

const CHARACTER_MEMORY_SIZE = 1000; //16000

const RAM_START_ADDRESS = 0x503342;
const RAM_SIZE = 0x2DC6C0;

const SCPI_1_ADDRESS = 0x7DFA04;
const SCPI_2_ADDRESS = 0x7DFA05;
const SCPI_3_ADDRESS = 0x7DFA06;

const INTERRUPT_MASK_REGISTER = 0x7DFA07;

const INTERRUPT_CODE_ADDRESS = 0x7DFA08;
const NMI_CODE_ADDRESS = 0x7DFA09;

const MASS_MEMORY_ADDRESS_PORT_ADDRESS = 0x7DFA0A;
const MASS_MEMORY_DATA_PORT_ADDRESS = 0x7DFA0F;
const MASS_MEMORY_CONTROL_REGISTER_ADDRESS = 0x7DFA14;

const keyboard_register = 0x7DFA18;
const audio_db_register = 0x7DFA1B;
const audio_samr_register = 0x7DFA1E;

const MTIME_ADDRESS_HIGH = 0x7DFA20;
const MTIME_ADDRESS_LOW = 0x7DFA24;

const TIM1_MTIMECMP_ADDRESS_HIGH = 0x7DFA28;
const TIM1_MTIMECMP_ADDRESS_LOW = 0x7DFA2C;

const TIM2_MTIMECMP_ADDRESS_HIGH = 0x7DFA30;
const TIM2_MTIMECMP_ADDRESS_LOW = 0x7DFA34;

const TIM3_MTIMECMP_ADDRESS_HIGH = 0x7DFA38;
const TIM3_MTIMECMP_ADDRESS_LOW = 0x7DFA3C;
/**----------------------------------------**/

const INTERRUPT_CODE_KEYBOA(inst >> 7) & 0b11111 = 0b1;
const INTERRUPT_CODE_TIM1 = 0b10;
const INTERRUPT_CODE_TIM2 = 0b100;
const INTERRUPT_CODE_TIM3 = 0b1000;

// HDD_COMMANDS
const WRITE_ONE_BYTE = 0;
const WRITE_TWO_BYTE = 1;
const WRITE_FOUR_BYTE = 2;
const READ_ONE_BYTE = 3;
const READ_TWO_BYTE = 4;
const READ_FOUR_BYTE = 5;

// DIRECTORIES
const ROM_DIRECTORY = "rom_peripheral"; //"../rom_peripheral"
const MASS_MEMORY_DIRECTORY = "mass_memory_peripheral"; //"../mass_memory_peripheral"

// DEBUG_PRINTF
// const DEBUG_PRINTF;

// READ WRITE
const READ = 0;
const WRITE = 1;

// BOOLEAN VALUES
const FALSE = 0;
const TRUE = 1;

// STRING LENGTH
const ONE_BYTE = 0;
const TWO_BYTE = 1;
const FOUR_BYTE = 2;

// INSTRUCTION DECODE
const (inst >> 12) & 0x7 = (inst >> 12) & 0x7; //(inst >> 9) & 0x7
const (inst >> 25) = inst >> 25;
const OPCODE = inst & 0x7F;
const ((inst >> 15) & 0b11111) = (inst >> 15) & 0b11111;
const (inst >> 20) & 0b11111 = (inst >> 20) & 0b11111;
const (inst >> 7) & 0b11111 = (inst >> 7) & 0b11111;
const (signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111)) = (signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
const (unsigned short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111)) = (unsigned short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
const (int32_t)(((inst & 0b1111111111000000000000000000000) >> 20) | ((inst & 0b100000000000000000000) >> 9) | (inst & 0b11111111000000000000) | (inst & 0b10000000000000000000000000000000)) //((inst >> 21) & 0b1111111111) | (inst >> 9) & 0b100000000= (int32_t)(((inst & 0b1111111111000000000000000000000) >> 20) | ((inst & 0b100000000000000000000) >> 9) | (inst & 0b11111111000000000000) | (inst & 0b10000000000000000000000000000000)); //((inst >> 21) & 0b1111111111) | (inst >> 9) & 0b100000000
const (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE//(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE; //(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE
const ((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111) = ((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111);

// RESET VECTOR
const RESET_VECTOR = ROM_MEMORY_START_ADDRESS;

// INSTRUCTION FINAL DECODE
const LUI = 0b0110111;
const AUIPC = 0b0010111;
const JAL = 0b1101111;
const JALR = 0b1100111;
const BEQ = 0b000;
const BNE = 0b001;
const BLT = 0b100;
const BGE = 0b101;
const BLTU = 0b110;
const BGEU = 0b111;
const LB = 0b000;
const LH = 0b001;
const LW = 0b010;
const LBU = 0b100;
const LHU = 0b101;
const SB = 0b000;
const SH = 0b001;
const SW = 0b010;
const ADDI = 0b000;
const SLTI = 0b010;
const SLTIU = 0b011;
const XORI = 0b100;
const ORI = 0b110;
const ANDI = 0b111;
const SLLI = 0b001;
const SRLI_SRAI = 0b101;
const ADD = 0;
const SUB = 0; //32
const SLL = 1;
const SLT = 2;
const SLTU = 3;
const XOR = 4;
const SRL = 5;
const SRA = 37;
const OR = 6;
const AND = 7;
//#define FENCE 0
const FENCEI = 0b1 00000;
const ECALL = 0;
const EBREAK = 0b000000000001; //0b100
const MRET = 0b1100000010;
const WFI = 0b000100000101;
const CSRRW = 0b1;
const CSRRS = 0b10;
const CSRRC = 0b11;
const CSRRWI = 0b101;
const CSRRSI = 0b110;
const CSRRCI = 0b111;
/*
#define CSRRWI 1
#define CSRRSI 2
#define CSRRCI 14
*/

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

const SYSTEM = 0b1110011;
const PRIV = 0;
const FENCE = 0b0001111;

// INSTRUCTION TYPE
const B_TYPE = 0b1100011;
const LOAD_TYPE = 0b0000011;
const STORE_TYPE = 0b0100011;
const I_TYPE = 0b0010011;
//#define SHIFT_TYPE
const R_TYPE = 0b0110011;

// CHIPSET INFO
const ROM_OFFSET = 0x4;
const ROM_SIZE = 20000; //320*200 screen with 4 byte pixel data

const RAM_OFFSET = 20100;
//#define RAM_SIZE 20000000

const VIDEO_MEMORY_OFFSET = 20020200;
//#define VIDEO_MEMORY_SIZE 256000

const HDD_OFFSET = 20276300;
const HDD_SIZE = 20000000;

const RAM_RANGE = addr >= RAM_OFFSET && addr <= RAM_OFFSET + RAM_SIZE;
const VIDEO_MEMORY_RANGE = addr >= VIDEO_MEMORY_OFFSET && addr <= VIDEO_MEMORY_OFFSET + VIDEO_MEMORY_SIZE;
const ROM_RANGE = addr >= ROM_OFFSET && addr <= ROM_OFFSET + ROM_SIZE;
const HDD_RANGE = addr >= HDD_OFFSET && addr <= HDD_OFFSET + HDD_SIZE;
const SCP_RANGE = addr >= 0x0 && addr <= 0x2;
const SERIAL_RANGE = addr === 0x3;

const W = 320;
const H = 200;

const PIXEL_MODE = 0;
const TEXT_MODE = 1;

const MTVEC_INITIAL_VALUE = 0x000000bc; //0x0
const MCAUSE_INITIAL_VALUE = 0x0;
const MTVAL_INITIAL_VALUE = 0x0;
const MEPC_INITIAL_VALUE = 0x0;
const MSTATUS_INITIAL_VALUE = 0x0;
const MIE_INITIAL_VALUE = 0x0;
const MISA_INITIAL_VALUE = 0b01000000000000000001000100000000;
const MHARTID_INITIAL_VALUE = 0x0;

/** MSTATUS **/
const MSTATUS_MPIE = (csr.mstatus >> 7) & 0b1;

/** MTVEC **/
const MTVEC_MODE = csr.mtvec & 0b11;

/** MCAUSE **/
const MCAUSE_EXCEPTION_CODE = csr.mcause & 0x7FFFFFFF;
/** MCAUSE CODE **/
const MCAUSE_EXCEPTION_CODE_Machine_external_interrupt = 0x8000000B; //11 with highest bit set
const MCAUSE_EXCEPTION_CODE_Machine_timer_interrupt = 0x80000007; //11 with highest bit set
const MCAUSE_EXCEPTION_CODE_Nmi = 0;

// MCAUSE VALUE
const MCAUSE_ECALL = 11;
const MCAUSE_EBREAK = 3;
const MCAUSE_ILLEGAL_OP = 2;

// CSR ADDRESS
const MTVEC_ADDR = 0x305;
const MCAUSE_ADDR = 0x342;
const MTVAL_ADDR = 0x343;
const MEPC_ADDR = 0x341;
const MISA_ADDR = 0x301;

const EXT_ITR_ENABLE = (csr.mie & 0b00001000000000000000000000000000);
const MSTATUS_ITR_ENABLE = (csr.mstatus & 0b00000000000000000000000000001000);

//VARIABLES
let pc = new Uint8Array(4) //PUT RESET VECTOR
let reg = new Uint32Array(32) //SYSTEM REGISTERS
let inst = new Uint8Array(4) //INSTRUCTION REGISTER
let nmi_pin = 0
let reset_pin = 0
let intr_pin = 0

function reset_routine()
{
    static char reset_bool = FALSE;

    pc = RESET_VECTOR;

    csr.mtvec = MTVEC_INITIAL_VALUE;
    csr.mcause = MCAUSE_INITIAL_VALUE;
    csr.mtval = MTVAL_INITIAL_VALUE;
    csr.mepc = MEPC_INITIAL_VALUE;
    csr.mstatus = MSTATUS_INITIAL_VALUE;
    csr.mhartid = MIE_INITIAL_VALUE;
    csr.misa = MISA_INITIAL_VALUE;
    csr.mhartid = MHARTID_INITIAL_VALUE;

    //reset_pin = 0;
    if(reset_bool == FALSE)
    {
        reset_pin = 0;
        reset_bool = TRUE;
    }


    nmi_pin = 0;
    intr_pin = 0;

    for(uint8_t i = 0; i < 32; i++)
        if(reg[i])
            reg[i] = 0;

    fill_screen(0x0);
}

function get_CSR(uint16_t addr)
{
    switch(addr)
    {
    case MTVEC_ADDR:
        return &csr.mtvec;
    case MCAUSE_ADDR:
        return &csr.mcause;
    case MTVAL_ADDR:
        return &csr.mtval;
    case MEPC_ADDR:
        return &csr.mepc;
    case MISA_ADDR:
        return &csr.misa;
    default:
        return NULL;
    }
}

function lui()
{
    if((inst >> 7) & 0b11111)
        reg[(inst >> 7) & 0b11111] = inst & 0b11111111111111111111000000000000;
}
function auipc()
{
    if((inst >> 7) & 0b11111)
        reg[(inst >> 7) & 0b11111] = (inst & 0b11111111111111111111000000000000) + pc;
}
function jal()
{
    let bf = 0;

    if((inst >> 7) & 0b11111)
        reg[(inst >> 7) & 0b11111] = pc + 4;

    bf = (((inst & 0b1111111111000000000000000000000) >> 20) | ((inst & 0b100000000000000000000) >> 9) | (inst & 0b11111111000000000000) );
    if(inst >> 31)
        bf |= 0b11111111111100000000000000000000;

    pc += bf;
}
function jalr()
{
    let bf = 0;

    if((inst >> 7) & 0b11111)
        reg[(inst >> 7) & 0b11111] = pc + 4;

    bf = inst >> 20;

    if(inst >> 31)
        bf |= 0xFFFFF000;

    bf += (int32_t)reg[((inst >> 15) & 0b11111)];

    bf &= 0xFFFFFFFE;

    pc = bf;
}
function beq()
{
    let bf = 0;

    if(reg[((inst >> 15) & 0b11111)] == reg[(inst >> 20) & 0b11111])
    {
        bf = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE//(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE;

        if(inst >> 31)
            bf |= 0b11111111111111111111000000000000;
        else
            bf &= 0b00000000000000000000111111111110;

        pc += bf;
        return 1;
    }
    return 0;
}
function bne()
{
    let bf = 0;

    if(reg[((inst >> 15) & 0b11111)] != reg[(inst >> 20) & 0b11111])
    {
        bf = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE//(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE;

        if(inst >> 31)
            bf |= 0b11111111111111111111000000000000;
        else
            bf &= 0b00000000000000000000111111111110;

        pc += bf;
        return 1;
    }
    return 0;
}
function blt()
{
    if((int32_t)reg[((inst >> 15) & 0b11111)] < (int32_t)reg[(inst >> 20) & 0b11111])
    {
        int32_t bf = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE//(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE;

        if(inst >> 31)
            bf |= 0b11111111111111111111000000000000;
        else
            bf &= 0b00000000000000000000111111111110;

        pc += bf;
        return 1;
    }
    return 0;
}
function bge()
{
    if((int32_t)reg[((inst >> 15) & 0b11111)] >= (int32_t)reg[(inst >> 20) & 0b11111])
    {
        int32_t bf = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE//(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE;

        if(inst >> 31)
            bf |= 0b11111111111111111111000000000000;
        else
            bf &= 0b00000000000000000000111111111110;

        pc += bf;
        return 1;
    }
    return 0;
}
function bltu()
{
    if(reg[((inst >> 15) & 0b11111)] < reg[(inst >> 20) & 0b11111])
    {
        int32_t bf = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE//(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE;

        if(inst >> 31)
            bf |= 0b11111111111111111111000000000000;
        else
            bf &= 0b00000000000000000000111111111110;

        pc += bf;
        return 1;
    }
    return 0;
}
function bgeu()
{
    if(reg[((inst >> 15) & 0b11111)] >= reg[(inst >> 20) & 0b11111])
    {
        int32_t bf = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE//(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE;

        if(inst >> 31)
            bf |= 0b11111111111111111111000000000000;
        else
            bf &= 0b00000000000000000000111111111110;

        pc += bf;
        return 1;
    }
    return 0;
}
function lb()
{
    short imm = inst >> 20;

    if(imm >> 11)
        imm |= 0b1111000000000000;

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &reg[(inst >> 7) & 0b11111], READ, ONE_BYTE);

    //sign extension
    if(reg[(inst >> 7) & 0b11111] >> 7)
        reg[(inst >> 7) & 0b11111] |= 0xFFFFFF00;
}
function lh()
{
    short imm = inst >> 20;

    if(imm >> 11)
        imm |= 0b1111000000000000;

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &reg[(inst >> 7) & 0b11111], READ, TWO_BYTE);

    SWAP_16(&reg[(inst >> 7) & 0b11111])

    //sign extension
    if(reg[(inst >> 7) & 0b11111] >> 15)
        reg[(inst >> 7) & 0b11111] |= 0xFFFF0000;
}
function lw()
{

    short imm = inst >> 20;

    if(imm >> 11)
        imm |= 0b1111000000000000;

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &reg[(inst >> 7) & 0b11111], READ, FOUR_BYTE);

    SWAP_32(&reg[(inst >> 7) & 0b11111])

    #ifdef DEBUG_PRINTF
    CORE_LOG("lw\n");
    #endif // DEBUG_PRINTF
}
function lbu()
{
    short imm = inst >> 20;

    if(imm >> 11)
        imm |= 0b1111000000000000;

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &reg[(inst >> 7) & 0b11111], READ, ONE_BYTE);
}
function lhu()
{
    short imm = inst >> 20;

    if(imm >> 11)
        imm |= 0b1111000000000000;

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &reg[(inst >> 7) & 0b11111], READ, TWO_BYTE);

    SWAP_16(&reg[(inst >> 7) & 0b11111])
}
function sb()
{
    short imm = ((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111);

    if(imm >> 11)
        imm |= 0b1111000000000000;

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &reg[(inst >> 20) & 0b11111], WRITE, ONE_BYTE);
}
function sh()
{
    short imm = ((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111);

    if(imm >> 11)
        imm |= 0b1111000000000000;

    uint16_t rs2_le = reg[(inst >> 20) & 0b11111];

    SWAP_32(&rs2_le)

    uint32_t rs2_le2 = rs2_le;

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &rs2_le2, WRITE, TWO_BYTE); //(((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111))
}
function sw()
{
    short imm = ((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111);

    if(imm >> 11)
        imm |= 0b1111000000000000;

    unsigned int rs2_le = reg[(inst >> 20) & 0b11111];
    SWAP_32(&rs2_le)

    send_to_chipset(reg[((inst >> 15) & 0b11111)] + imm, &rs2_le, WRITE, FOUR_BYTE); //(((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111))
}
function addi()
{
    int32_t bf = 0;

    bf = (inst & 0b01111111111100000000000000000000) >> 20;

    if(inst >> 31)
        bf |= 0b111111111111111111111100000000000;
    else
        bf &= 0b000000000000000000000011111111111;

    int32_t bfr = (int32_t)reg[((inst >> 15) & 0b11111)] + bf;
    reg[(inst >> 7) & 0b11111] = bfr; //reg[((inst >> 15) & 0b11111)] + bf; //(signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
}
function slti()
{
    short bf = inst >> 20;

    if(bf & 0b100000000000)
        bf |= 0b1111000000000000;

    reg[(inst >> 7) & 0b11111] = (int32_t)reg[((inst >> 15) & 0b11111)] < bf? 1 : 0; //(signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111))
}
function sltiu()
{
    unsigned short bf = inst >> 20;

    if(bf & 0b100000000000)
        bf |= 0b1111000000000000;

    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] < bf? 1 : 0; //(signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111))
}
function xori()
{
    short bf = inst >> 20;

    if(bf & 0b100000000000)
        bf |= 0b1111000000000000;

    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] ^ bf; // (signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
}
function ori()
{
    short bf = inst >> 20;

    if(bf & 0b100000000000)
        bf |= 0b1111000000000000;

    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] | bf; //(signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
}
function andi()
{
    short bf = inst >> 20;

    if(bf & 0b100000000000)
        bf |= 0b1111000000000000;

    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] & bf; //(signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
}
function slli()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] << ((inst >> 20) & 0b11111); //(inst >> 20) & 0b11111 used as shamt[4:0]
}
function srli()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] >> ((inst >> 20) & 0b11111); //(inst >> 20) & 0b11111 used as shamt[4:0]
}
function srai()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] >> ((inst >> 20) & 0b11111); //| (reg[((inst >> 15) & 0b11111)] & 0x80000000); //(inst >> 20) & 0b11111 used as shamt[4:0]

    if(reg[((inst >> 15) & 0b11111)] & 0x80000000)
        reg[(inst >> 7) & 0b11111] |= (unsigned int)pow(2, ((inst >> 20) & 0b11111)-1) << (32 - (unsigned int)pow(2, ((inst >> 20) & 0b11111)-1));
}
function add()
{
    uint32_t sigbf = (int32_t)reg[((inst >> 15) & 0b11111)] + (int32_t)reg[(inst >> 20) & 0b11111];
    reg[(inst >> 7) & 0b11111] = sigbf;
}
function sub()
{
    uint32_t bf = (int32_t)reg[((inst >> 15) & 0b11111)] - (int32_t)reg[(inst >> 20) & 0b11111];
    reg[(inst >> 7) & 0b11111] = bf;
}
function sll()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] << (reg[(inst >> 20) & 0b11111] & 0b11111);
}
function slt()
{
    reg[(inst >> 7) & 0b11111] = (int32_t)reg[((inst >> 15) & 0b11111)] < (int32_t)reg[(inst >> 20) & 0b11111]? 1 : 0;
}
function sltu()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] < reg[(inst >> 20) & 0b11111]? 1 : 0;
}
function xor()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] ^ reg[(inst >> 20) & 0b11111];
}
function srl()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] >> (reg[(inst >> 20) & 0b11111] & 0b11111);
}
function sra()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] >> ((inst >> 20) & 0b11111); //| (reg[((inst >> 15) & 0b11111)] & 0x80000000); //(inst >> 20) & 0b11111 used as shamt[4:0]

    if(reg[((inst >> 15) & 0b11111)] & 0x80000000)
        reg[(inst >> 7) & 0b11111] |= (unsigned int)pow(2, (reg[(inst >> 20) & 0b11111] & 0x1F )-1) << (32 - (unsigned int)pow(2, (reg[(inst >> 20) & 0b11111] & 0x1F )-1));
}
function or()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] | reg[(inst >> 20) & 0b11111];
}
function and()
{
    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] & reg[(inst >> 20) & 0b11111];
}

function mul()
{
    reg[(inst >> 7) & 0b11111] = (int32_t)((int32_t)reg[((inst >> 15) & 0b11111)] * (int32_t)reg[(inst >> 20) & 0b11111]);
}

function mulh()
{
    reg[(inst >> 7) & 0b11111] = ((int64_t)((int64_t)reg[((inst >> 15) & 0b11111)] * (int64_t)reg[(inst >> 20) & 0b11111])) >> 32;
}

function mulhsu()
{
    reg[(inst >> 7) & 0b11111] = ((int64_t)((int64_t)reg[((inst >> 15) & 0b11111)] * (uint64_t)reg[(inst >> 20) & 0b11111])) >> 32;
}

function mulhu()
{
    reg[(inst >> 7) & 0b11111] = ((uint64_t)(reg[((inst >> 15) & 0b11111)] * reg[(inst >> 20) & 0b11111])) >> 32;
}

function _div()
{
    if(!reg[(inst >> 20) & 0b11111])
    {
        reg[(inst >> 7) & 0b11111] = 0xFFFFFFFF;
        return;
    }

    reg[(inst >> 7) & 0b11111] = (int32_t)( (int32_t)reg[((inst >> 15) & 0b11111)] / (int32_t)reg[(inst >> 20) & 0b11111] );
}

function divu()
{
    if(!reg[(inst >> 20) & 0b11111])
    {
        reg[(inst >> 7) & 0b11111] = 0xFFFFFFFF;
        return;
    }

    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] / reg[(inst >> 20) & 0b11111];
}

function rem()
{
    if(!reg[(inst >> 20) & 0b11111])
    {
        reg[(inst >> 7) & 0b11111] = 0xFFFFFFFF;
        return;
    }

    reg[(inst >> 7) & 0b11111] = (int32_t)((int32_t)reg[((inst >> 15) & 0b11111)] % (int32_t)reg[(inst >> 20) & 0b11111]);
}

function remu()
{
    if(!reg[(inst >> 20) & 0b11111])
    {
        reg[(inst >> 7) & 0b11111] = 0xFFFFFFFF;
        return;
    }

    reg[(inst >> 7) & 0b11111] = reg[((inst >> 15) & 0b11111)] % reg[(inst >> 20) & 0b11111];
}

function mem_device_controller(device, addr, data, rw, sz)
{
    if(rw == READ)
    {
        switch(sz)
        {
        case ONE_BYTE:
			data[0] = device[addr]
            break;
        case TWO_BYTE:
			data[0] = device[addr]
			data[1] = device[addr+1]
            break;
        case FOUR_BYTE:
			data[0] = device[addr]
			data[1] = device[addr+1]
			data[2] = device[addr+2]
			data[3] = device[addr+3]
            break;
        }
    }
    else if(rw == WRITE)
    {
        switch(sz)
        {
        case ONE_BYTE:
            device[addr] = data[0];
            break;
        case TWO_BYTE:
            device[addr] = data[0];
            device[addr+1] = data[1];
            break;
        case FOUR_BYTE:
            device[addr] = data[0];
            device[addr+1] = data[1];
            device[addr+2] = data[2];
            device[addr+3] = data[3];
            break;
        }
    }
}

function send_to_chipset(addr, data, rw, sz)
{
	let memory_dev = null
	
    if(addr >= ROM_MEMORY_START_ADDRESS && addr <= (ROM_MEMORY_START_ADDRESS + ROM_MEMORY_SIZE) )
		memory_dev = ROM_MEMORY
    else if(addr >= RAM_START_ADDRESS && addr <= (RAM_START_ADDRESS+RAM_SIZE)-1)
		memory_dev = RAM_MEMORY
    else if(addr >= MM_START_ADDRESS && addr <= (MM_START_ADDRESS+MM_SIZE)-1)
		memory_dev = MM_MEMORY
	
	if (memory_dev != null)
	{
		mem_device_controller(memory_dev, addr, data, rw, sz)
		memory_dev = null
		return
	}

    if(addr >= VIDEO_MEMORY_START_ADDRESS && addr <= (VIDEO_MEMORY_START_ADDRESS + VIDEO_MEMORY_SIZE) )
    {
        if(sz != FOUR_BYTE)
            return; //FAULT

        video_memory_controller(addr-VIDEO_MEMORY_START_ADDRESS, data, rw);
        return;
    }

    if(addr == VIDEO_MEMORY_CONTROL_REGISTER)
    {
        if(sz != ONE_BYTE)
            return; //FAULT

        video_memory_control_register = (uint8_t)*data;

        video_memory_control_register_decode();

        return;
    }

    if(addr >= TEXT_MODE_MEMORY_START_ADDRESS && addr <= (TEXT_MODE_MEMORY_START_ADDRESS + TEXT_MODE_MEMORY_SIZE) )
    {
        text_mode_controller(addr-TEXT_MODE_MEMORY_START_ADDRESS, data, rw);
        return;
    }
}

function riscv32I_core()
{
    if(reset_pin)
        reset_routine();

    if(nmi_pin)
    {
        eti_handler(MCAUSE_EXCEPTION_CODE_Nmi);
        nmi_pin = 0;
    }


    if(intr_pin)
    {
        interrupt_controller_ack();

        uint32_t cmcause;
        if(itr_code == INTERRUPT_CODE_TIM1 || itr_code == INTERRUPT_CODE_TIM2 || itr_code == INTERRUPT_CODE_TIM3)
            cmcause = MCAUSE_EXCEPTION_CODE_Machine_timer_interrupt;
        else
            cmcause = MCAUSE_EXCEPTION_CODE_Machine_external_interrupt;

        eti_handler(cmcause);
        /** INTERRUPT ROUTINE, JUMP TO HANDLER AND GET INTERRUPT CODE **/
    }

	if(false)
		timer_tick();

    send_to_chipset(pc, inst, READ, FOUR_BYTE);

    SWAP_32(&inst)

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
            switch((inst >> 12) & 0x7) //check funct3
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
                eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case LOAD_TYPE:
            switch((inst >> 12) & 0x7)
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
                eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case STORE_TYPE:
            switch((inst >> 12) & 0x7)
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
                eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case I_TYPE:
            switch((inst >> 12) & 0x7)
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
                if(!(inst >> 25))
                    srli();
                else if((inst >> 25) == 32)
                    srai();
                break;
            default:
                eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case R_TYPE:
            switch((inst >> 25)) //((inst >> 12) & 0x7) + ((inst >> 25)) )
            {
            case FUNCT7_SUB_SRA:
                switch((inst >> 12) & 0x7)
                {
                case SUB:
                    sub();
                    break;
                case SRA:
                    sra();
                    break;
                default:
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    break;
                }
                break;
            case FUNCT7_RTYPE:
                switch((inst >> 12) & 0x7)
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
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            case FUNCT7_MULDIV:
                switch((inst >> 12) & 0x7)
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
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            default:
                eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case FENCE: //NOT IMPLEMENTED
            if(inst >> 12)
            {
                eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case SYSTEM:
            switch((inst >> 12) & 0x7)
            {
            case PRIV:
                switch(inst >> 20)
                {
                case ECALL:
                    eti_handler(MCAUSE_ECALL);
                    return;
                case EBREAK:
                    eti_handler(MCAUSE_EBREAK);
                    return;
                case MRET:
                    pc = csr.mepc;
                    return;
                case WFI:
                    CORE_LOG("WFI\n");
                    return;
                default:
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            case CSRRW:
                if((csr_pt = get_CSR(inst >> 20)) == NULL)
                {
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }

                if((inst >> 7) & 0b11111)
                    reg[(inst >> 7) & 0b11111] = *csr_pt;
                *csr_pt = reg[((inst >> 15) & 0b11111)];

                break;
            case CSRRS:
                if((csr_pt = get_CSR(inst >> 20)) == NULL)
                {
                    printf("1b %d\n", inst >> 20);
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }

                if((inst >> 7) & 0b11111)
                    reg[(inst >> 7) & 0b11111] = *csr_pt;

                if(((inst >> 15) & 0b11111))
                    *csr_pt |= reg[((inst >> 15) & 0b11111)];

                break;
            case CSRRC:
                if((csr_pt = get_CSR(inst >> 20)) == NULL)
                {
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }

                if((inst >> 7) & 0b11111)
                    reg[(inst >> 7) & 0b11111] = *csr_pt;

                if(((inst >> 15) & 0b11111))
                    *csr_pt = ~(~reg[((inst >> 15) & 0b11111)] | *csr_pt);
                break;
            case CSRRWI:
                if((csr_pt = get_CSR(inst >> 20)) == NULL)
                {
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }

                if((inst >> 7) & 0b11111)
                    reg[(inst >> 7) & 0b11111] = *csr_pt;
                *csr_pt = ((inst >> 15) & 0b11111);
                break;
            case CSRRSI:
                if((csr_pt = get_CSR(inst >> 20)) == NULL)
                {
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }

                reg[(inst >> 7) & 0b11111] = *csr_pt;
                if(((inst >> 15) & 0b11111))
                    *csr_pt |= ((inst >> 15) & 0b11111);
                break;
            case CSRRCI:
                if((csr_pt = get_CSR(inst >> 20)) == NULL)
                {
                    eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }

                reg[(inst >> 7) & 0b11111] = *csr_pt;
                if(((inst >> 15) & 0b11111))
                    *csr_pt = ~(~((inst >> 15) & 0b11111) | *csr_pt);
                break;
            default:
                eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        default:
            eti_handler(MCAUSE_ILLEGAL_OP);
            return;
    }

    pc += 4;
}