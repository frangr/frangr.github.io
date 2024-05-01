asm("li sp, 0x2DC7C0;"); //0x5033C4

void _start()
{
	unsigned char* mm_pixel = (unsigned char*)0x7A1200;
	unsigned int* videomem = (unsigned int*)0xF42400;
	unsigned int cnt = 0;
	
	for(unsigned short i = 0; i < 64000; i++)
	{
		*videomem = (mm_pixel[cnt] << 24) | (mm_pixel[cnt+1] << 16) | (mm_pixel[cnt+2] << 8) | mm_pixel[cnt+3];
		cnt += 3;
		videomem++;
	}
	
	*((unsigned char*)0xF81BA0) = 0xFF;
}