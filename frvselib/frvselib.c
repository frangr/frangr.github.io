#include "frvselib.h"

void stop_FRVSE()
{
	*((unsigned char*)STOP_REGISTER_ADDRESS) = 0xFF;
}

void write_string(short pos, char* str, short strlen, unsigned char font, unsigned char char_color, unsigned char background_color)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	for(short i = 0; i < strlen; i++)
		*((unsigned int*)addr++) = (font << 24) | (str[i] << 16) | (char_color << 8) | background_color;
}

//TEXT MEMORY FUNCTIONS
void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	*((unsigned int*)addr) = (font << 24) | (ascii << 16) | (char_color << 8) | background_color;
}

void redraw_text_memory()
{
	unsigned int* addr = (unsigned int*)TEXT_MODE_MEMORY_START_ADDRESS;
	for(short i = 0; i < 1000; i++)
	{
		*addr = *addr;
		addr++;
	}	
}

void character_set_font(unsigned short pos, unsigned char font)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	textword &= 0x00FFFFFF;
	textword |= font << 24;
	*((unsigned int*)addr) = textword;
}

void character_set_ascii(unsigned short pos, unsigned char ascii)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	textword &= 0xFF00FFFF;
	textword |= ascii << 16;
	*((unsigned int*)addr) = textword;
}

void character_set_char_color(unsigned short pos, unsigned char char_color)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	textword &= 0xFFFF00FF;
	textword |= char_color << 8;
	*((unsigned int*)addr) = textword;
}

void character_set_background_color(unsigned short pos, unsigned char bck_color)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	textword &= 0xFFFFFF00;
	textword |= bck_color;
	*((unsigned int*)addr) = textword;
}

unsigned int get_character(short pos)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	return textword;
}

char character_get_font(short pos)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	return (textword >> 24) & 0xFF;
}

char character_get_ascii(short pos)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	return (textword >> 16) & 0xFF;
}

char character_get_char_color(short pos)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	return (textword >> 8) & 0xFF;
}

char character_get_bck_color(short pos)
{
	unsigned int addr = TEXT_MODE_MEMORY_START_ADDRESS+pos;
	unsigned int textword = *((unsigned int*)addr);
	return textword & 0xFF;
}