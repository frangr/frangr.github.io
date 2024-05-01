
void write_character(unsigned short, unsigned char, unsigned char, unsigned char, unsigned char);
char check_col(short pos);

asm("li sp, 0x2DC7C0;"); //0x5033C4

short objpos[] = {380, 289, 152, 873, 517, 550, 745, 936, 767, 522, 614, 882, 82, 94, 374, 489, 103, 269, 464, 580, 944, 677, 116, 364, -1};

void _start()
{
	short prev_pos = 0;
	short pos = 0;
	short new_pos;
	
	write_character(pos, 7, 7, 0xF, 0xF8);
	
	char cnt = 0;
	while(objpos[cnt] != -1)
		write_character(objpos[cnt++], 7, 5, 0x6, 0xF8);
	
	while(1)
	{
		unsigned char pressc = *((unsigned char*)0xF81BA1);
		
		new_pos = 0;
		
		if(pressc == 37) //left key
		{
			if(pos % 40)
				new_pos = -1;
			else
				continue;
		}
		else if(pressc == 38) //up key
		{
			if(pos < 40)
				continue;
			new_pos = -40;
		}
		else if(pressc == 39) //right key
		{
			if((pos+1) % 40)
				new_pos = 1;
			else
				continue;
		}
		else if(pressc == 40) //down key
		{
			if(pos > 959)
				continue;
			new_pos = 40;
		}
		else
			continue;
		
		if(!check_col(pos + new_pos))
			continue;
		
		prev_pos = pos;
		pos += new_pos;
		
		unsigned int delay = 0xFFFFF;
		while(delay--);
		
		write_character(prev_pos, 0, 0, 0x0, 0x0);
		write_character(pos, 7, 7, 0xF, 0xF8);
	}
	
	*((unsigned char*)0xF81BA0) = 0xFF;
}

char check_col(short pos)
{
	char cnt = 0;
	while(objpos[cnt] != -1)
		if(objpos[cnt++] == pos)
			return 0;
	return 1;
}

void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color)
{
	unsigned int addr = 0xF80C00+pos;
	*((unsigned int*)addr) = (font << 24) | (ascii << 16) | (char_color << 8) | background_color;
}