#include "frvselib.h"

void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color)
{
	unsigned int addr = 0xF80C00+pos;
	*((unsigned int*)addr) = (font << 24) | (ascii << 16) | (char_color << 8) | background_color;
}

void stop_FRVSE()
{
	*((unsigned char*)0xF81BA0) = 0xFF;
}