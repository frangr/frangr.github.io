#include "frvselib.h"

void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color)
{
	unsigned int addr = TEXT_MEMORY_START+pos;
	*((unsigned int*)addr) = (font << 24) | (ascii << 16) | (char_color << 8) | background_color;
}

void stop_FRVSE()
{
	*((unsigned char*)STOP_REGISTER_START) = 0xFF;
}