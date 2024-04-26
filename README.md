# FRVSE Documentation

FRVSE (Franto RISC-V Simple Emulator) is a RISC-V emulator, currently it only support the 32-bit IM (RISCV32IM) architecture.

This project is the web version of the original FRVSE, a C .DLL with a freeGLUT GUI. The original project is currently not available on github.

FRVSE is intended for educational purposes and is pretty straightforward to use.

FRVSE is just like a small computer. There is a CPU, a ROM, a RAM and an handful of peripherals such as Mass Memory, a screen or registers [(See Full List)](# FRVSE COMPONENTS)
you can watch the state of the system registers(PC, reg[0]-reg[31]) and the content of the peripherals using the GUI.

To make FRVSE run code, you need to upload a .bin file, containing bare metal binaries, in the ROM path, and press the Start FRVSE button (or the Step FRVSE, if you want to step).
To create bare metal binaries to feed into FRVSE you just need to compile your code into RISC-V machine language. Bare metal binaries means it doesnt need to have things like headers or similiar
like an .exe/.elf file, bust just binary machine instructions.

FRVSE's Reset Vector is at the first address of the ROM memory. So when the CPU is reset, it fetch the first 4 byte of the ROM Memory and decodes them as an instruction. That's you need to upload
a binary file as your ROM Memory.

Personally, I compile my code using riscv-gcc. In FOLDER, you can find a .C file containing a little library to write code for FRVSE, and in the same folder you can find a .bat file to compile
this .C file into bare metal binary.

FRVSE's peripherals are memory mapped, being RISC-V a memory mapped architecture. To write or read from a memory 
just write code that writes or read from the addresses reserved (See Memory Map) for the peripherals you want to use (See Examples)


## FRVSE COMPONENTS
- ROM MEMORY:

A read/write memory emulating a Flash memory. It's where FRVSE start executing the code. Currently it have a maximum size of 3MB. 
The user must upload a binary file serving as the Flash memory. The memory can be written but the uploaded file will not be modified. If you need the written file, 
you can downlaod it using the "Download ROM Buffer" button. 
This memory is mandatory and must be present when the emulator is started, otherwise there will be an error.
See ROM Memory Example

- RAM MEMORY:

The RAM of the emulator, created when the emulator starts, with a size of 5MB. When the emulator is resetted, the memory is also resetted.
See RAM Memory Example

- Mass Memory:

A read/write memory emulating a mass memory. It have a maximum size of 8MB. It may be used to store big data to be used in the code like images. 
This memory is optional and can be not uploaded. If you try to write or read the Mass Memory when is not uploaded, nothing will happen.
If the uploaded Mass Memory is written, the original file will not be modified. If you need the written file, you can download it using the "Download MM Buffer" button.
See Mass Memory Example

- Video Memory:

A read/write memory emulating a Video Memory. It is created when the emulator is started. It can represent a 320x200 screen, or 64000 pixels, each pixel represented by 4 byte
for RGBA notation (the alpha channel is disabled). So the total size of the memory 256.000 bytes, or 256KB. The memory is updated in realtime and painted in the GUI.
See Video Memory Example

- Text Memory:

A read/write memory that allows you to easily print characters on the screen. FRVSE text mode can print 8x8 pixels character on the 320x200 screen, meaning you can have 1000 characters,
disposed in 40 rows and 25 columns. In the Text Memory, each character is represented by 4 bytes. There are 1000 character, so the memory is 4000 bytes long.
The 4 byte to represent a character are structured this way:

32                                                                0
 |character font|ascii character|character color|background color|

character font: select the font to print. See Text Memory Fonts
ascii character: the character you want to draw
character color: The color of the character, using the VGA Palette.
background color: the color of the character background, using the VGA Palette.

writing these 4 byte in the Text Memory will draw a character on the screen.
See Text Memory Example

- Stop Register:

A 1 byte write only register. If written, it stops the emulator. Useful to be put at the end of your code.
See Stop Register Example

- Keycode Register:

A 1 byte read only register. It's constantly updated with the currently pressed keyboard key.
See Keycode Register Example


## Memory Map
start adr|  device name     |r/w|size
0x0      | ROM MEMORY       |rw | 0x2DC6C0, 3MB
0x2DC6C0 | RAM MEMORY       |rw | 0x4C4B40, 5MB
0x7A1200 | MASS MEMORY      |rw | 0x7A1200, 8MB
0xF42400 | VIDEO MEMORY     |rw | 0x3E800, 256KB
0xF80C00 | TEXT MODE MEMORY |rw | 0xFA0, 4KB
0xF81BA0 | STOP REGISTER    |w  | 1 byte
0xF81BA1 | KEYCODE REGISTER |r  | 1 byte

| Start Address  | Device Name | R/W | Size |
| ------------- | ------------- | ------------- | ------------- |
| Content Cell  | Content Cell  | Content Cell  | Content Cell  |
| Content Cell  | Content Cell  | Content Cell  | Content Cell  |

- [FRVSE Architecture](#my-section)
- [Memory mapped address map](#my-section)
- [Peripherals](#my-section)
- [How to make FRVSE execute my code?](#my-section)
- [Using the GUI](#my-section)
- [The Video peripheral](#my-section)
- [The Text Mode peripheral](#my-section)








## My Section
