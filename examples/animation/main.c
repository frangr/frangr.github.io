asm("li sp, 0x2DC7C0;"); //0x5033C4

void _start()
{
	unsigned char* mm_pixel = (unsigned char*)0x7A1200;
	unsigned int* videomem;
	unsigned int cnt = 0;
	
	while(1)
	{			
		for(char ix = 0; ix < 6; ix++)
		{
			videomem = (unsigned int*)0xF42400;
			
			for(unsigned short i = 0; i < 64000; i++)
			{
				if(*((unsigned char*)0xF81BA1) == 83) //S key to stop cycle
					goto stop_frvse;
				
				*videomem = (mm_pixel[cnt] << 24) | (mm_pixel[cnt+1] << 16) | (mm_pixel[cnt+2] << 8) | mm_pixel[cnt+3];
				cnt += 3;
				videomem++;
			}
			
			unsigned int delay = 0xFFFFF; 
			while(delay--); //frame delay
		}
		
		mm_pixel = (unsigned char*)0x7A1200; //RESET MASS MEMORY POINTER
		cnt = 0;
	}
	
stop_frvse:
	*((unsigned char*)0xF81BA0) = 0xFF;
}