#ifndef FRVSELIB_H
#define FRVSELIB_H

#define ROM_MEMORY_START_ADDRESS 0x0
#define ROM_MEMORY_SIZE 0x2DC6C0 //3MB

#define RAM_START_ADDRESS (ROM_MEMORY_START_ADDRESS + ROM_MEMORY_SIZE) //0x2DC6C0
#define RAM_SIZE 0x4C4B40 //5MB

#define MM_START_ADDRESS (RAM_START_ADDRESS + RAM_SIZE) //0x7A1200
#define MM_SIZE 0x7A1200 //8MB

#define VIDEO_MEMORY_START_ADDRESS (MM_START_ADDRESS + MM_SIZE) //0xF42400
#define VIDEO_MEMORY_SIZE 0x3E800

#define TEXT_MODE_MEMORY_START_ADDRESS (VIDEO_MEMORY_START_ADDRESS + VIDEO_MEMORY_SIZE) //0xF80C00
#define TEXT_MODE_MEMORY_SIZE 0xFA0 //4000 bytes (1000 4-byte word for each character)

#define STOP_REGISTER_ADDRESS (TEXT_MODE_MEMORY_START_ADDRESS + TEXT_MODE_MEMORY_SIZE) //F81BA0

#define KEYCODE_REGISTER_ADDRESS STOP_REGISTER_ADDRESS+1 //F81BA1

#define DEBUG_VALUE_PORT_ADDRESS KEYCODE_REGISTER_ADDRESS+1 //F81BA2

void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color);

void redraw_text_memory()

void write_string(short pos, char* str, short strlen, unsigned char font, unsigned char char_color, unsigned char background_color);

void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color);

void character_set_font(unsigned short pos, unsigned char font);

void character_set_ascii(unsigned short pos, unsigned char ascii);

void character_set_char_color(unsigned short pos, unsigned char char_color);

void character_set_background_color(unsigned short pos, unsigned char bck_color);

unsigned int get_character(short pos);

char character_get_font(short pos);

char character_get_ascii(short pos);

char character_get_char_color(short pos);

char character_get_bck_color(short pos);

void stop_FRVSE();

#endif