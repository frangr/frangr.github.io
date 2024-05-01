#ifndef FRVSELIB_H
#define FRVSELIB_H

#define TEXT_MEMORY_START 0xF80C00
#define STOP_REGISTER_START 0xF81BA0

void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color);

void stop_FRVSE();

#endif