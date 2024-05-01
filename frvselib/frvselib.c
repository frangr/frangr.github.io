#include "frvselib.h"

void consolelog()
{
	*((unsigned char*)0xF81BA2) = 30;
}