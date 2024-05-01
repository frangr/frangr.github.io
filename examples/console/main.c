
void write_character(unsigned short, unsigned char, unsigned char, unsigned char, unsigned char);

asm("li sp, 0x2DC7C0;"); //0x5033C4

void _start()
{
	char charlock = 0;
	unsigned short idx = 0;
	while(1)
	{
		unsigned char pressc = *((unsigned char*)0xF81BA1);
		
		if(pressc == 0)
		{
			charlock = 0;
			continue;
		}
		else
			if(charlock == 0)
			{
				if(pressc == 8) //8 is backspace
				{
					if(idx > 0)
					{
						idx--;
						write_character(idx, 0, 32, 0x0, 0x0);
					}
				}
				else
				{
					if(pressc <= 127)
					{
						write_character(idx, 0, pressc, 0x37, 0x64);
						idx++;
					}
				}
				
				charlock = 1;
			}
			else
				continue;
		
		if(idx == 1000)
			break;
	}
	
	*((unsigned char*)0xF81BA0) = 0xFF;
}


void write_character(unsigned short pos, unsigned char font, unsigned char ascii, unsigned char char_color, unsigned char background_color)
{
	unsigned int addr = 0xF80C00+pos;
	*((unsigned int*)addr) = (font << 24) | (ascii << 16) | (char_color << 8) | background_color;
}