#ifndef FRVSELIB_H
#define FRVSELIB_H

void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color);

void stop_FRVSE();

#endif