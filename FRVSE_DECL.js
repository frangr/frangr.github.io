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

const INTERRUPT_CODE_KEYBOARD = 0b1;
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
const FUNCT3 = (inst >> 12) & 0x7; //(inst >> 9) & 0x7
const FUNCT7 = inst >> 25;
const OPCODE = inst & 0x7F;
const RS1 = (inst >> 15) & 0b11111;
const RS2 = (inst >> 20) & 0b11111;
const RD = (inst >> 7) & 0b11111;
const I_TYPE_IMMEDIATE = (signed short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
const I_TYPE_IMMEDIATE_U = (unsigned short)(inst & 0x80000000 | ((inst >> 20) & 0b11111111111));
const JAL_IMMEDIATE = (int32_t)(((inst & 0b1111111111000000000000000000000) >> 20) | ((inst & 0b100000000000000000000) >> 9) | (inst & 0b11111111000000000000) | (inst & 0b10000000000000000000000000000000)); //((inst >> 21) & 0b1111111111) | (inst >> 9) & 0b100000000
const BRANCH_IMMEDIATE = (((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE; //(((inst & 0b111100000000) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0b10000000) << 4)) & 0xFFFFFFFE
const SW_ADDRESS = ((inst >> 20) & 0b111111100000) | ((inst >> 7) & 0b11111);

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
