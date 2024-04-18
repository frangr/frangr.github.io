// *******FRVSE - Franto RISC-V Simple Emulator - by Grieco Francesco*******

/*
import { font8x8_basic } from './VIDEO_DATA.js';
import { font8x8_block } from './VIDEO_DATA.js';
import { font8x8_box } from './VIDEO_DATA.js';
import { VGA_RGB_table } from './VIDEO_DATA.js';
*/

const font8x8_basic = [
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0000 (nul)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0001
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0002
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0003
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0004
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0005
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0006
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0007
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0008
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0009
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+000A
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+000B
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+000C
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+000D
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+000E
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+000F
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0010
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0011
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0012
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0013
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0014
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0015
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0016
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0017
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0018
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0019
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+001A
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+001B
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+001C
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+001D
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+001E
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+001F
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0020 (space)
    [ 0x18, 0x3C, 0x3C, 0x18, 0x18, 0x00, 0x18, 0x00],   // U+0021 (!)
    [ 0x36, 0x36, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0022 (")
    [ 0x36, 0x36, 0x7F, 0x36, 0x7F, 0x36, 0x36, 0x00],   // U+0023 (#)
    [ 0x0C, 0x3E, 0x03, 0x1E, 0x30, 0x1F, 0x0C, 0x00],   // U+0024 ($)
    [ 0x00, 0x63, 0x33, 0x18, 0x0C, 0x66, 0x63, 0x00],   // U+0025 (%)
    [ 0x1C, 0x36, 0x1C, 0x6E, 0x3B, 0x33, 0x6E, 0x00],   // U+0026 (&)
    [ 0x06, 0x06, 0x03, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0027 (')
    [ 0x18, 0x0C, 0x06, 0x06, 0x06, 0x0C, 0x18, 0x00],   // U+0028 (()
    [ 0x06, 0x0C, 0x18, 0x18, 0x18, 0x0C, 0x06, 0x00],   // U+0029 ())
    [ 0x00, 0x66, 0x3C, 0xFF, 0x3C, 0x66, 0x00, 0x00],   // U+002A (*)
    [ 0x00, 0x0C, 0x0C, 0x3F, 0x0C, 0x0C, 0x00, 0x00],   // U+002B (+)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x0C, 0x06],   // U+002C (,)
    [ 0x00, 0x00, 0x00, 0x3F, 0x00, 0x00, 0x00, 0x00],   // U+002D (-)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x0C, 0x0C, 0x00],   // U+002E (.)
    [ 0x60, 0x30, 0x18, 0x0C, 0x06, 0x03, 0x01, 0x00],   // U+002F (/)
    [ 0x3E, 0x63, 0x73, 0x7B, 0x6F, 0x67, 0x3E, 0x00],   // U+0030 (0)
    [ 0x0C, 0x0E, 0x0C, 0x0C, 0x0C, 0x0C, 0x3F, 0x00],   // U+0031 (1)
    [ 0x1E, 0x33, 0x30, 0x1C, 0x06, 0x33, 0x3F, 0x00],   // U+0032 (2)
    [ 0x1E, 0x33, 0x30, 0x1C, 0x30, 0x33, 0x1E, 0x00],   // U+0033 (3)
    [ 0x38, 0x3C, 0x36, 0x33, 0x7F, 0x30, 0x78, 0x00],   // U+0034 (4)
    [ 0x3F, 0x03, 0x1F, 0x30, 0x30, 0x33, 0x1E, 0x00],   // U+0035 (5)
    [ 0x1C, 0x06, 0x03, 0x1F, 0x33, 0x33, 0x1E, 0x00],   // U+0036 (6)
    [ 0x3F, 0x33, 0x30, 0x18, 0x0C, 0x0C, 0x0C, 0x00],   // U+0037 (7)
    [ 0x1E, 0x33, 0x33, 0x1E, 0x33, 0x33, 0x1E, 0x00],   // U+0038 (8)
    [ 0x1E, 0x33, 0x33, 0x3E, 0x30, 0x18, 0x0E, 0x00],   // U+0039 (9)
    [ 0x00, 0x0C, 0x0C, 0x00, 0x00, 0x0C, 0x0C, 0x00],   // U+003A (:)
    [ 0x00, 0x0C, 0x0C, 0x00, 0x00, 0x0C, 0x0C, 0x06],   // U+003B (;)
    [ 0x18, 0x0C, 0x06, 0x03, 0x06, 0x0C, 0x18, 0x00],   // U+003C (<)
    [ 0x00, 0x00, 0x3F, 0x00, 0x00, 0x3F, 0x00, 0x00],   // U+003D (=)
    [ 0x06, 0x0C, 0x18, 0x30, 0x18, 0x0C, 0x06, 0x00],   // U+003E (>)
    [ 0x1E, 0x33, 0x30, 0x18, 0x0C, 0x00, 0x0C, 0x00],   // U+003F (?)
    [ 0x3E, 0x63, 0x7B, 0x7B, 0x7B, 0x03, 0x1E, 0x00],   // U+0040 (@)
    [ 0x0C, 0x1E, 0x33, 0x33, 0x3F, 0x33, 0x33, 0x00],   // U+0041 (A)
    [ 0x3F, 0x66, 0x66, 0x3E, 0x66, 0x66, 0x3F, 0x00],   // U+0042 (B)
    [ 0x3C, 0x66, 0x03, 0x03, 0x03, 0x66, 0x3C, 0x00],   // U+0043 (C)
    [ 0x1F, 0x36, 0x66, 0x66, 0x66, 0x36, 0x1F, 0x00],   // U+0044 (D)
    [ 0x7F, 0x46, 0x16, 0x1E, 0x16, 0x46, 0x7F, 0x00],   // U+0045 (E)
    [ 0x7F, 0x46, 0x16, 0x1E, 0x16, 0x06, 0x0F, 0x00],   // U+0046 (F)
    [ 0x3C, 0x66, 0x03, 0x03, 0x73, 0x66, 0x7C, 0x00],   // U+0047 (G)
    [ 0x33, 0x33, 0x33, 0x3F, 0x33, 0x33, 0x33, 0x00],   // U+0048 (H)
    [ 0x1E, 0x0C, 0x0C, 0x0C, 0x0C, 0x0C, 0x1E, 0x00],   // U+0049 (I)
    [ 0x78, 0x30, 0x30, 0x30, 0x33, 0x33, 0x1E, 0x00],   // U+004A (J)
    [ 0x67, 0x66, 0x36, 0x1E, 0x36, 0x66, 0x67, 0x00],   // U+004B (K)
    [ 0x0F, 0x06, 0x06, 0x06, 0x46, 0x66, 0x7F, 0x00],   // U+004C (L)
    [ 0x63, 0x77, 0x7F, 0x7F, 0x6B, 0x63, 0x63, 0x00],   // U+004D (M)
    [ 0x63, 0x67, 0x6F, 0x7B, 0x73, 0x63, 0x63, 0x00],   // U+004E (N)
    [ 0x1C, 0x36, 0x63, 0x63, 0x63, 0x36, 0x1C, 0x00],   // U+004F (O)
    [ 0x3F, 0x66, 0x66, 0x3E, 0x06, 0x06, 0x0F, 0x00],   // U+0050 (P)
    [ 0x1E, 0x33, 0x33, 0x33, 0x3B, 0x1E, 0x38, 0x00],   // U+0051 (Q)
    [ 0x3F, 0x66, 0x66, 0x3E, 0x36, 0x66, 0x67, 0x00],   // U+0052 (R)
    [ 0x1E, 0x33, 0x07, 0x0E, 0x38, 0x33, 0x1E, 0x00],   // U+0053 (S)
    [ 0x3F, 0x2D, 0x0C, 0x0C, 0x0C, 0x0C, 0x1E, 0x00],   // U+0054 (T)
    [ 0x33, 0x33, 0x33, 0x33, 0x33, 0x33, 0x3F, 0x00],   // U+0055 (U)
    [ 0x33, 0x33, 0x33, 0x33, 0x33, 0x1E, 0x0C, 0x00],   // U+0056 (V)
    [ 0x63, 0x63, 0x63, 0x6B, 0x7F, 0x77, 0x63, 0x00],   // U+0057 (W)
    [ 0x63, 0x63, 0x36, 0x1C, 0x1C, 0x36, 0x63, 0x00],   // U+0058 (X)
    [ 0x33, 0x33, 0x33, 0x1E, 0x0C, 0x0C, 0x1E, 0x00],   // U+0059 (Y)
    [ 0x7F, 0x63, 0x31, 0x18, 0x4C, 0x66, 0x7F, 0x00],   // U+005A (Z)
    [ 0x1E, 0x06, 0x06, 0x06, 0x06, 0x06, 0x1E, 0x00],   // U+005B ([)
    [ 0x03, 0x06, 0x0C, 0x18, 0x30, 0x60, 0x40, 0x00],   // U+005C (\)
    [ 0x1E, 0x18, 0x18, 0x18, 0x18, 0x18, 0x1E, 0x00],   // U+005D (])
    [ 0x08, 0x1C, 0x36, 0x63, 0x00, 0x00, 0x00, 0x00],   // U+005E (^)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF],   // U+005F (_)
    [ 0x0C, 0x0C, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+0060 (`)
    [ 0x00, 0x00, 0x1E, 0x30, 0x3E, 0x33, 0x6E, 0x00],   // U+0061 (a)
    [ 0x07, 0x06, 0x06, 0x3E, 0x66, 0x66, 0x3B, 0x00],   // U+0062 (b)
    [ 0x00, 0x00, 0x1E, 0x33, 0x03, 0x33, 0x1E, 0x00],   // U+0063 (c)
    [ 0x38, 0x30, 0x30, 0x3e, 0x33, 0x33, 0x6E, 0x00],   // U+0064 (d)
    [ 0x00, 0x00, 0x1E, 0x33, 0x3f, 0x03, 0x1E, 0x00],   // U+0065 (e)
    [ 0x1C, 0x36, 0x06, 0x0f, 0x06, 0x06, 0x0F, 0x00],   // U+0066 (f)
    [ 0x00, 0x00, 0x6E, 0x33, 0x33, 0x3E, 0x30, 0x1F],   // U+0067 (g)
    [ 0x07, 0x06, 0x36, 0x6E, 0x66, 0x66, 0x67, 0x00],   // U+0068 (h)
    [ 0x0C, 0x00, 0x0E, 0x0C, 0x0C, 0x0C, 0x1E, 0x00],   // U+0069 (i)
    [ 0x30, 0x00, 0x30, 0x30, 0x30, 0x33, 0x33, 0x1E],   // U+006A (j)
    [ 0x07, 0x06, 0x66, 0x36, 0x1E, 0x36, 0x67, 0x00],   // U+006B (k)
    [ 0x0E, 0x0C, 0x0C, 0x0C, 0x0C, 0x0C, 0x1E, 0x00],   // U+006C (l)
    [ 0x00, 0x00, 0x33, 0x7F, 0x7F, 0x6B, 0x63, 0x00],   // U+006D (m)
    [ 0x00, 0x00, 0x1F, 0x33, 0x33, 0x33, 0x33, 0x00],   // U+006E (n)
    [ 0x00, 0x00, 0x1E, 0x33, 0x33, 0x33, 0x1E, 0x00],   // U+006F (o)
    [ 0x00, 0x00, 0x3B, 0x66, 0x66, 0x3E, 0x06, 0x0F],   // U+0070 (p)
    [ 0x00, 0x00, 0x6E, 0x33, 0x33, 0x3E, 0x30, 0x78],   // U+0071 (q)
    [ 0x00, 0x00, 0x3B, 0x6E, 0x66, 0x06, 0x0F, 0x00],   // U+0072 (r)
    [ 0x00, 0x00, 0x3E, 0x03, 0x1E, 0x30, 0x1F, 0x00],   // U+0073 (s)
    [ 0x08, 0x0C, 0x3E, 0x0C, 0x0C, 0x2C, 0x18, 0x00],   // U+0074 (t)
    [ 0x00, 0x00, 0x33, 0x33, 0x33, 0x33, 0x6E, 0x00],   // U+0075 (u)
    [ 0x00, 0x00, 0x33, 0x33, 0x33, 0x1E, 0x0C, 0x00],   // U+0076 (v)
    [ 0x00, 0x00, 0x63, 0x6B, 0x7F, 0x7F, 0x36, 0x00],   // U+0077 (w)
    [ 0x00, 0x00, 0x63, 0x36, 0x1C, 0x36, 0x63, 0x00],   // U+0078 (x)
    [ 0x00, 0x00, 0x33, 0x33, 0x33, 0x3E, 0x30, 0x1F],   // U+0079 (y)
    [ 0x00, 0x00, 0x3F, 0x19, 0x0C, 0x26, 0x3F, 0x00],   // U+007A (z)
    [ 0x38, 0x0C, 0x0C, 0x07, 0x0C, 0x0C, 0x38, 0x00],   // U+007B ([)
    [ 0x18, 0x18, 0x18, 0x00, 0x18, 0x18, 0x18, 0x00],   // U+007C (|)
    [ 0x07, 0x0C, 0x0C, 0x38, 0x0C, 0x0C, 0x07, 0x00],   // U+007D (])
    [ 0x6E, 0x3B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+007E (~)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]    // U+007F
];    

const font8x8_block = [
    [ 0xFF, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00, 0x00],   // U+2580 (top half)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF],   // U+2581 (box 1/8)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF],   // U+2582 (box 2/8)
    [ 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFF],   // U+2583 (box 3/8)
    [ 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF],   // U+2584 (bottom half)
    [ 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF],   // U+2585 (box 5/8)
    [ 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF],   // U+2586 (box 6/8)
    [ 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF],   // U+2587 (box 7/8)
    [ 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF],   // U+2588 (solid)
    [ 0x7F, 0x7F, 0x7F, 0x7F, 0x7F, 0x7F, 0x7F, 0x7F],   // U+2589 (box 7/8)
    [ 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F, 0x3F],   // U+258A (box 6/8)
    [ 0x1F, 0x1F, 0x1F, 0x1F, 0x1F, 0x1F, 0x1F, 0x1F],   // U+258B (box 5/8)
    [ 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F],   // U+258C (left half)
    [ 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07, 0x07],   // U+258D (box 3/8)
    [ 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03, 0x03],   // U+258E (box 2/8)
    [ 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01],   // U+258F (box 1/8)
    [ 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0],   // U+2590 (right half)
    [ 0x55, 0x00, 0xAA, 0x00, 0x55, 0x00, 0xAA, 0x00],   // U+2591 (25% solid)
    [ 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA, 0x55, 0xAA],   // U+2592 (50% solid)
    [ 0xFF, 0xAA, 0xFF, 0x55, 0xFF, 0xAA, 0xFF, 0x55],   // U+2593 (75% solid)
    [ 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],   // U+2594 (box 1/8)
    [ 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80],   // U+2595 (box 1/8)
    [ 0x00, 0x00, 0x00, 0x00, 0x0F, 0x0F, 0x0F, 0x0F],   // U+2596 (box bottom left)
    [ 0x00, 0x00, 0x00, 0x00, 0xF0, 0xF0, 0xF0, 0xF0],   // U+2597 (box bottom right)
    [ 0x0F, 0x0F, 0x0F, 0x0F, 0x00, 0x00, 0x00, 0x00],   // U+2598 (box top left)
    [ 0x0F, 0x0F, 0x0F, 0x0F, 0xFF, 0xFF, 0xFF, 0xFF],   // U+2599 (boxes left and bottom)
    [ 0x0F, 0x0F, 0x0F, 0x0F, 0xF0, 0xF0, 0xF0, 0xF0],   // U+259A (boxes top-left and bottom right)
    [ 0xFF, 0xFF, 0xFF, 0xFF, 0x0F, 0x0F, 0x0F, 0x0F],   // U+259B (boxes top and left)
    [ 0xFF, 0xFF, 0xFF, 0xFF, 0xF0, 0xF0, 0xF0, 0xF0],   // U+259C (boxes top and right)
    [ 0xF0, 0xF0, 0xF0, 0xF0, 0x00, 0x00, 0x00, 0x00],   // U+259D (box top right)
    [ 0xF0, 0xF0, 0xF0, 0xF0, 0x0F, 0x0F, 0x0F, 0x0F],   // U+259E (boxes top right and bottom left)
    [ 0xF0, 0xF0, 0xF0, 0xF0, 0xFF, 0xFF, 0xFF, 0xFF],   // U+259F (boxes right and bottom)
];

const font8x8_box = [
    [ 0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0x00, 0x00],   // U+2500 (thin horizontal)
    [ 0x00, 0x00, 0x00, 0xFF, 0xFF, 0x00, 0x00, 0x00],   // U+2501 (thick horizontal)
    [ 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08],   // U+2502 (thin vertical)
    [ 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18, 0x18],   // U+2503 (thich vertical)
    [ 0x00, 0x00, 0x00, 0x00, 0xBB, 0x00, 0x00, 0x00],   // U+2504 (thin horizontal dashed)
    [ 0x00, 0x00, 0x00, 0xBB, 0xBB, 0x00, 0x00, 0x00],   // U+2505 (thick horizontal dashed)
    [ 0x08, 0x00, 0x08, 0x08, 0x08, 0x00, 0x08, 0x08],   // U+2506 (thin vertical dashed)
    [ 0x18, 0x00, 0x18, 0x18, 0x18, 0x00, 0x18, 0x18],   // U+2507 (thich vertical dashed)
    [ 0x00, 0x00, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00],   // U+2508 (thin horizontal dotted)
    [ 0x00, 0x00, 0x00, 0x55, 0x55, 0x00, 0x00, 0x00],   // U+2509 (thick horizontal dotted)
    [ 0x00, 0x08, 0x00, 0x08, 0x00, 0x08, 0x00, 0x08],   // U+250A (thin vertical dotted)
    [ 0x00, 0x18, 0x00, 0x18, 0x00, 0x18, 0x00, 0x18],   // U+250B (thich vertical dotted)
    [ 0x00, 0x00, 0x00, 0x00, 0xf8, 0x08, 0x08, 0x08],   // U+250C (down L, right L)
    [ 0x00, 0x00, 0x00, 0xf8, 0xf8, 0x08, 0x08, 0x08],   // U+250D (down L, right H)
    [ 0x00, 0x00, 0x00, 0x00, 0xf8, 0x18, 0x18, 0x18],   // U+250E (down H, right L)
    [ 0x00, 0x00, 0x00, 0xf8, 0xf8, 0x18, 0x18, 0x18],   // U+250F (down H, right H)
    [ 0x00, 0x00, 0x00, 0x00, 0x0f, 0x08, 0x08, 0x08],   // U+2510 (down L, left L)
    [ 0x00, 0x00, 0x00, 0x0f, 0x0f, 0x08, 0x08, 0x08],   // U+2511 (down L, left H)
    [ 0x00, 0x00, 0x00, 0x00, 0x1f, 0x18, 0x18, 0x18],   // U+2512 (down H, left L)
    [ 0x00, 0x00, 0x00, 0x1f, 0x1f, 0x18, 0x18, 0x18],   // U+2513 (down H, left H)
    [ 0x08, 0x08, 0x08, 0x08, 0xf8, 0x00, 0x00, 0x00],   // U+2514 (up L, right L)
    [ 0x08, 0x08, 0x08, 0xf8, 0xf8, 0x00, 0x00, 0x00],   // U+2515 (up L, right H)
    [ 0x18, 0x18, 0x18, 0x18, 0xf8, 0x00, 0x00, 0x00],   // U+2516 (up H, right L)
    [ 0x18, 0x18, 0x18, 0xf8, 0xf8, 0x00, 0x00, 0x00],   // U+2517 (up H, right H)
    [ 0x08, 0x08, 0x08, 0x08, 0x0f, 0x00, 0x00, 0x00],   // U+2518 (up L, left L)
    [ 0x08, 0x08, 0x08, 0x0f, 0x0f, 0x00, 0x00, 0x00],   // U+2519 (up L, left H)
    [ 0x18, 0x18, 0x18, 0x18, 0x1f, 0x00, 0x00, 0x00],   // U+251A (up H, left L)
    [ 0x18, 0x18, 0x18, 0x1f, 0x1f, 0x00, 0x00, 0x00],   // U+251B (up H, left H)
    [ 0x08, 0x08, 0x08, 0x08, 0xf8, 0x08, 0x08, 0x08],   // U+251C (down L, right L, up L)
    [ 0x08, 0x08, 0x08, 0xf8, 0xf8, 0x08, 0x08, 0x08],   // U+251D (down L, right H, up L)
    [ 0x18, 0x18, 0x18, 0x18, 0xf8, 0x08, 0x08, 0x08],   // U+251E (down L, right L, up H)
    [ 0x08, 0x08, 0x08, 0x08, 0xf8, 0x18, 0x18, 0x18],   // U+251F (down H, right L, up L)
    [ 0x18, 0x18, 0x18, 0x18, 0xf8, 0x18, 0x18, 0x18],   // U+2520 (down H, right L, up H)
    [ 0x18, 0x18, 0x18, 0xf8, 0xf8, 0x08, 0x08, 0x08],   // U+2521 (down L, right H, up H)
    [ 0x08, 0x08, 0x08, 0xf8, 0xf8, 0x18, 0x18, 0x18],   // U+2522 (down H, right H, up L)
    [ 0x18, 0x18, 0x18, 0xf8, 0xf8, 0x18, 0x18, 0x18],   // U+2523 (down H, right H, up H)
    [ 0x08, 0x08, 0x08, 0x08, 0x0f, 0x08, 0x08, 0x08],   // U+2524 (down L, left L, up L)
    [ 0x08, 0x08, 0x08, 0x0f, 0x0f, 0x08, 0x08, 0x08],   // U+2525 (down L, left H, up L)
    [ 0x18, 0x18, 0x18, 0x18, 0x1f, 0x08, 0x08, 0x08],   // U+2526 (down L, left L, up H)
    [ 0x08, 0x08, 0x08, 0x08, 0x1f, 0x18, 0x18, 0x18],   // U+2527 (down H, left L, up L)
    [ 0x18, 0x18, 0x18, 0x18, 0x1f, 0x18, 0x18, 0x18],   // U+2528 (down H, left L, up H)
    [ 0x18, 0x18, 0x18, 0x1f, 0x1f, 0x08, 0x08, 0x08],   // U+2529 (down L, left H, up H)
    [ 0x08, 0x08, 0x08, 0x1f, 0x1f, 0x18, 0x18, 0x18],   // U+252A (down H, left H, up L)
    [ 0x18, 0x18, 0x18, 0x1f, 0x1f, 0x18, 0x18, 0x18],   // U+252B (down H, left H, up H)
    [ 0x00, 0x00, 0x00, 0x00, 0xff, 0x08, 0x08, 0x08],   // U+252C (down L, right L, left L)
    [ 0x00, 0x00, 0x00, 0x0f, 0xff, 0x08, 0x08, 0x08],   // U+252D (down L, right L, left H)
    [ 0x00, 0x00, 0x00, 0xf8, 0xff, 0x08, 0x08, 0x08],   // U+252E (down L, right H, left L)
    [ 0x00, 0x00, 0x00, 0xff, 0xff, 0x08, 0x08, 0x08],   // U+252F (down L, right H, left H)
    [ 0x00, 0x00, 0x00, 0x00, 0xff, 0x18, 0x18, 0x18],   // U+2530 (down H, right L, left L)
    [ 0x00, 0x00, 0x00, 0x1f, 0xff, 0x18, 0x18, 0x18],   // U+2531 (down H, right L, left H)
    [ 0x00, 0x00, 0x00, 0xf8, 0xff, 0x18, 0x18, 0x18],   // U+2532 (down H, right H, left L)
    [ 0x00, 0x00, 0x00, 0xff, 0xff, 0x18, 0x18, 0x18],   // U+2533 (down H, right H, left H)
    [ 0x08, 0x08, 0x08, 0x08, 0xff, 0x00, 0x00, 0x00],   // U+2534 (up L, right L, left L)
    [ 0x08, 0x08, 0x08, 0x0f, 0xff, 0x00, 0x00, 0x00],   // U+2535 (up L, right L, left H)
    [ 0x08, 0x08, 0x08, 0xf8, 0xff, 0x00, 0x00, 0x00],   // U+2536 (up L, right H, left L)
    [ 0x08, 0x08, 0x08, 0xff, 0xff, 0x00, 0x00, 0x00],   // U+2537 (up L, right H, left H)
    [ 0x18, 0x18, 0x18, 0x18, 0xff, 0x00, 0x00, 0x00],   // U+2538 (up H, right L, left L)
    [ 0x18, 0x18, 0x18, 0x1f, 0xff, 0x00, 0x00, 0x00],   // U+2539 (up H, right L, left H)
    [ 0x18, 0x18, 0x18, 0xf8, 0xff, 0x00, 0x00, 0x00],   // U+253A (up H, right H, left L)
    [ 0x18, 0x18, 0x18, 0xff, 0xff, 0x00, 0x00, 0x00],   // U+253B (up H, right H, left H)
    [ 0x08, 0x08, 0x08, 0x08, 0xff, 0x08, 0x08, 0x08],   // U+253C (up L, right L, left L, down L)
    [ 0x08, 0x08, 0x08, 0x0f, 0xff, 0x08, 0x08, 0x08],   // U+253D (up L, right L, left H, down L)
    [ 0x08, 0x08, 0x08, 0xf8, 0xff, 0x08, 0x08, 0x08],   // U+253E (up L, right H, left L, down L)
    [ 0x08, 0x08, 0x08, 0xff, 0xff, 0x08, 0x08, 0x08],   // U+253F (up L, right H, left H, down L)
    [ 0x18, 0x18, 0x18, 0x18, 0xff, 0x08, 0x08, 0x08],   // U+2540 (up H, right L, left L, down L)
    [ 0x08, 0x08, 0x08, 0x08, 0xff, 0x18, 0x18, 0x18],   // U+2541 (up L, right L, left L, down H)
    [ 0x18, 0x18, 0x18, 0x18, 0xff, 0x18, 0x18, 0x18],   // U+2542 (up H, right L, left L, down H)
    [ 0x18, 0x18, 0x18, 0x1f, 0xff, 0x08, 0x08, 0x08],   // U+2543 (up H, right L, left H, down L)
    [ 0x18, 0x18, 0x18, 0xf8, 0xff, 0x08, 0x08, 0x08],   // U+2544 (up H, right H, left L, down L)
    [ 0x08, 0x08, 0x08, 0x1f, 0xff, 0x18, 0x18, 0x18],   // U+2545 (up L, right L, left H, down H)
    [ 0x08, 0x08, 0x08, 0xf8, 0xff, 0x18, 0x18, 0x18],   // U+2546 (up L, right H, left L, down H)
    [ 0x08, 0x08, 0x08, 0xff, 0xff, 0x18, 0x18, 0x18],   // U+2547 (up L, right H, left H, down H)
    [ 0x18, 0x18, 0x18, 0xff, 0xff, 0x08, 0x08, 0x08],   // U+254B (up H, right H, left H, down L)
    [ 0x18, 0x18, 0x18, 0xf8, 0xff, 0x18, 0x18, 0x18],   // U+254A (up H, right H, left L, down H)
    [ 0x18, 0x18, 0x18, 0x1f, 0xff, 0x18, 0x18, 0x18],   // U+2549 (up H, right L, left H, down H)
    [ 0x18, 0x18, 0x18, 0xff, 0xff, 0x18, 0x18, 0x18],   // U+254B (up H, right H, left H, down H)
    [ 0x00, 0x00, 0x00, 0x00, 0xE7, 0x00, 0x00, 0x00],   // U+254C (thin horizontal broken)
    [ 0x00, 0x00, 0x00, 0xE7, 0xE7, 0x00, 0x00, 0x00],   // U+254D (thick horizontal broken)
    [ 0x08, 0x08, 0x08, 0x00, 0x00, 0x08, 0x08, 0x08],   // U+254E (thin vertical broken)
    [ 0x18, 0x18, 0x18, 0x00, 0x00, 0x18, 0x18, 0x18],   // U+254F (thich vertical broken)
    [ 0x00, 0x00, 0x00, 0xFF, 0x00, 0xFF, 0x00, 0x00],   // U+2550 (double horizontal)
    [ 0x14, 0x14, 0x14, 0x14, 0x14, 0x14, 0x14, 0x14],   // U+2551 (double vertical)
    [ 0x00, 0x00, 0x00, 0xF8, 0x08, 0xF8, 0x08, 0x08],   // U+2552 (down L, right D)
    [ 0x00, 0x00, 0x00, 0x00, 0xFC, 0x14, 0x14, 0x14],   // U+2553 (down D, right L)
    [ 0x00, 0x00, 0x00, 0xFC, 0x04, 0xF4, 0x14, 0x14],   // U+2554 (down D, right D)
    [ 0x00, 0x00, 0x00, 0x0F, 0x08, 0x0F, 0x08, 0x08],   // U+2555 (down L, left D)
    [ 0x00, 0x00, 0x00, 0x00, 0x1F, 0x14, 0x14, 0x14],   // U+2556 (down D, left L)
    [ 0x00, 0x00, 0x00, 0x1F, 0x10, 0x17, 0x14, 0x14],   // U+2557 (down D, left D)
    [ 0x08, 0x08, 0x08, 0xF8, 0x08, 0xF8, 0x00, 0x00],   // U+2558 (up L, right D)
    [ 0x14, 0x14, 0x14, 0x14, 0xFC, 0x00, 0x00, 0x00],   // U+2559 (up D, right L)
    [ 0x14, 0x14, 0x14, 0xF4, 0x04, 0xFC, 0x00, 0x00],   // U+255A (up D, right D)
    [ 0x08, 0x08, 0x08, 0x0F, 0x08, 0x0F, 0x00, 0x00],   // U+255B (up L, left D)
    [ 0x14, 0x14, 0x14, 0x14, 0x1F, 0x00, 0x00, 0x00],   // U+255C (up D, left L)
    [ 0x14, 0x14, 0x14, 0x17, 0x10, 0x1F, 0x00, 0x00],   // U+255D (up D, left D)
    [ 0x08, 0x08, 0x08, 0xF8, 0x08, 0xF8, 0x08, 0x08],   // U+255E (up L, down L, right D)
    [ 0x14, 0x14, 0x14, 0x14, 0xF4, 0x14, 0x14, 0x14],   // U+255F (up D, down D, right L)
    [ 0x14, 0x14, 0x14, 0xF4, 0x04, 0xF4, 0x14, 0x14],   // U+2560 (up D, down D, right D)
    [ 0x08, 0x08, 0x08, 0x0F, 0x08, 0x0F, 0x08, 0x08],   // U+2561 (up L, down L, left D)
    [ 0x14, 0x14, 0x14, 0x14, 0x17, 0x14, 0x14, 0x14],   // U+2562 (up D, down D, left L)
    [ 0x14, 0x14, 0x14, 0x17, 0x10, 0x17, 0x14, 0x14],   // U+2563 (up D, down D, left D)
    [ 0x00, 0x00, 0x00, 0xFF, 0x00, 0xFF, 0x08, 0x08],   // U+2564 (left D, right D, down L)
    [ 0x00, 0x00, 0x00, 0x00, 0xFF, 0x14, 0x14, 0x14],   // U+2565 (left L, right L, down D)
    [ 0x00, 0x00, 0x00, 0xFF, 0x00, 0xF7, 0x14, 0x14],   // U+2566 (left D, right D, down D)
    [ 0x08, 0x08, 0x08, 0xFF, 0x00, 0xFF, 0x00, 0x00],   // U+2567 (left D, right D, up L)
    [ 0x14, 0x14, 0x14, 0x14, 0xFF, 0x00, 0x00, 0x00],   // U+2568 (left L, right L, up D)
    [ 0x14, 0x14, 0x14, 0xF7, 0x00, 0xFF, 0x00, 0x00],   // U+2569 (left D, right D, up D)
    [ 0x08, 0x08, 0x08, 0xFF, 0x08, 0xFF, 0x08, 0x08],   // U+256A (left D, right D, down L, up L)
    [ 0x14, 0x14, 0x14, 0x14, 0xFF, 0x14, 0x14, 0x14],   // U+256B (left L, right L, down D, up D)
    [ 0x14, 0x14, 0x14, 0xF7, 0x00, 0xF7, 0x14, 0x14],   // U+256C (left D, right D, down D, up D)
    [ 0x00, 0x00, 0x00, 0x00, 0xE0, 0x10, 0x08, 0x08],   // U+256D (curve down-right)
    [ 0x00, 0x00, 0x00, 0x00, 0x03, 0x04, 0x08, 0x08],   // U+256E (curve down-left)
    [ 0x08, 0x08, 0x08, 0x04, 0x03, 0x00, 0x00, 0x00],   // U+256F (curve up-left)
    [ 0x08, 0x08, 0x08, 0x10, 0xE0, 0x00, 0x00, 0x00],   // U+2570 (curve up-right)
    [ 0x80, 0x40, 0x20, 0x10, 0x08, 0x04, 0x02, 0x01],   // U+2571 (diagonal bottom-left to top-right)
    [ 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80],   // U+2572 (diagonal bottom-right to top-left)
    [ 0x81, 0x42, 0x24, 0x18, 0x18, 0x24, 0x42, 0x81],   // U+2573 (diagonal cross)
    [ 0x00, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x00, 0x00],   // U+2574 (left L)
    [ 0x08, 0x08, 0x08, 0x08, 0x00, 0x00, 0x00, 0x00],   // U+2575 (up L)
    [ 0x00, 0x00, 0x00, 0x00, 0xF8, 0x00, 0x00, 0x00],   // U+2576 (right L)
    [ 0x00, 0x00, 0x00, 0x00, 0x08, 0x08, 0x08, 0x08],   // U+2577 (down L)
    [ 0x00, 0x00, 0x00, 0x0F, 0x0F, 0x00, 0x00, 0x00],   // U+2578 (left H)
    [ 0x18, 0x18, 0x18, 0x18, 0x00, 0x00, 0x00, 0x00],   // U+2579 (up H)
    [ 0x00, 0x00, 0x00, 0xF8, 0xF8, 0x00, 0x00, 0x00],   // U+257A (right H)
    [ 0x00, 0x00, 0x00, 0x00, 0x18, 0x18, 0x18, 0x18],   // U+257B (down H)
    [ 0x00, 0x00, 0x00, 0xF8, 0xFF, 0x00, 0x00, 0x00],   // U+257C (right H, left L)
    [ 0x08, 0x08, 0x08, 0x08, 0x18, 0x18, 0x18, 0x18],   // U+257D (up L, down H)
    [ 0x00, 0x00, 0x00, 0x0F, 0xFF, 0x00, 0x00, 0x00],   // U+257E (right L, left H)
    [ 0x18, 0x18, 0x18, 0x18, 0x08, 0x08, 0x08, 0x08]    // U+257F (up H, down L)
];

const VGA_RGB_table = [
    0x000000, 0x0000a8, 0x00a800, 0x00a8a8, 0xa80000, 0xa800a8, 0xa85400, 0xa8a8a8, 0x545454, 0x5454fc, 0x54fc54, 0x54fcfc, 0xfc5454, 0xfc54fc, 0xfcfc54, 0xfcfcfc,
    0x000000, 0x141414, 0x202020, 0x2c2c2c, 0x383838, 0x444444, 0x505050, 0x606060, 0x707070, 0x808080, 0x909090, 0xa0a0a0, 0xb4b4b4, 0xc8c8c8, 0xe0e0e0, 0xfcfcfc,
    0x0000fc, 0x4000fc, 0x7c00fc, 0xbc00fc, 0xfc00fc, 0xfc00bc, 0xfc007c, 0xfc0040, 0xfc0000, 0xfc4000, 0xfc7c00, 0xfcbc00, 0xfcfc00, 0xbcfc00, 0x7cfc00, 0x40fc00,
    0x00fc00, 0x00fc40, 0x00fc7c, 0x00fcbc, 0x00fcfc, 0x00bcfc, 0x007cfc, 0x0040fc, 0x7c7cfc, 0x9c7cfc, 0xbc7cfc, 0xdc7cfc, 0xfc7cfc, 0xfc7cdc, 0xfc7cbc, 0xfc7c9c,
    0xfc7c7c, 0xfc9c7c, 0xfcbc7c, 0xfcdc7c, 0xfcfc7c, 0xdcfc7c, 0xbcfc7c, 0x9cfc7c, 0x7cfc7c, 0x7cfc9c, 0x7cfcbc, 0x7cfcdc, 0x7cfcfc, 0x7cdcfc, 0x7cbcfc, 0x7c9cfc,
    0xb4b4fc, 0xc4b4fc, 0xd8b4fc, 0xe8b4fc, 0xfcb4fc, 0xfcb4e8, 0xfcb4d8, 0xfcb4c4, 0xfcb4b4, 0xfcc4b4, 0xfcd8b4, 0xfce8b4, 0xfcfcb4, 0xe8fcb4, 0xd8fcb4, 0xc4fcb4,
    0xb4fcb4, 0xb4fcc4, 0xb4fcd8, 0xb4fce8, 0xb4fcfc, 0xb4e8fc, 0xb4d8fc, 0xb4c4fc, 0x000070, 0x1c0070, 0x380070, 0x540070, 0x700070, 0x700054, 0x700038, 0x70001c,
    0x700000, 0x701c00, 0x703800, 0x705400, 0x707000, 0x547000, 0x387000, 0x1c7000, 0x007000, 0x00701c, 0x007038, 0x007054, 0x007070, 0x005470, 0x003870, 0x001c70,
    0x383870, 0x443870, 0x543870, 0x603870, 0x703870, 0x703860, 0x703854, 0x703844, 0x703838, 0x704438, 0x705438, 0x706038, 0x707038, 0x607038, 0x547038, 0x447038,
    0x387038, 0x387044, 0x387054, 0x387060, 0x387070, 0x386070, 0x385470, 0x384470, 0x505070, 0x585070, 0x605070, 0x685070, 0x705070, 0x705068, 0x705060, 0x705058,
    0x705050, 0x705850, 0x706050, 0x706850, 0x707050, 0x687050, 0x607050, 0x587050, 0x507050, 0x507058, 0x507060, 0x507068, 0x507070, 0x506870, 0x506070, 0x505870,
    0x000040, 0x100040, 0x200040, 0x300040, 0x400040, 0x400030, 0x400020, 0x400010, 0x400000, 0x401000, 0x402000, 0x403000, 0x404000, 0x304000, 0x204000, 0x104000,
    0x004000, 0x004010, 0x004020, 0x004030, 0x004040, 0x003040, 0x002040, 0x001040, 0x202040, 0x282040, 0x302040, 0x382040, 0x402040, 0x402038, 0x402030, 0x402028,
    0x402020, 0x402820, 0x403020, 0x403820, 0x404020, 0x384020, 0x304020, 0x284020, 0x204020, 0x204028, 0x204030, 0x204038, 0x204040, 0x203840, 0x203040, 0x202840,
    0x2c2c40, 0x302c40, 0x342c40, 0x3c2c40, 0x402c40, 0x402c3c, 0x402c34, 0x402c30, 0x402c2c, 0x40302c, 0x40342c, 0x403c2c, 0x40402c, 0x3c402c, 0x34402c, 0x30402c,
    0x2c402c, 0x2c4030, 0x2c4034, 0x2c403c, 0x2c4040, 0x2c3c40, 0x2c3440, 0x2c3040, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000
];

//let html_pc_id
//let html_reg_id

//"MACRO"
const MAX_INTERRUPT_NUMBER = 8;
const MAX_NMI_NUMBER = 4;

/*
const ROM_MEMORY_START_ADDRESS = 0x0;
const ROM_MEMORY_SIZE = 0x4C4B40;

const RAM_START_ADDRESS = 0x503342;
const RAM_SIZE = 0x2DC6C0;

const MASS_MEMORY_ADDRESS_PORT_ADDRESS = 0x7DFA0A;
const MASS_MEMORY_DATA_PORT_ADDRESS = 0x7DFA0F;
const MASS_MEMORY_CONTROL_REGISTER_ADDRESS = 0x7DFA14;

const VIDEO_MEMORY_START_ADDRESS = 0x4C4B41;
const VIDEO_MEMORY_SIZE = 0x3E800;
const VIDEO_MEMORY_CONTROL_REGISTER = 0x7DFA03;

const TEXT_MODE_MEMORY_START_ADDRESS = 0x7DFA3D;
const TEXT_MODE_MEMORY_SIZE = 0xFA0;

const CHARACTER_MEMORY_SIZE = 1000; //16000
*/

const ROM_MEMORY_START_ADDRESS = 0x0;
const ROM_MEMORY_SIZE = 0x2DC6C0; //3MB

const RAM_START_ADDRESS = ROM_MEMORY_START_ADDRESS + ROM_MEMORY_SIZE; //0x2DC6C0
const RAM_SIZE = 0x4C4B40; //5MB

const MM_START_ADDRESS = RAM_START_ADDRESS + RAM_SIZE; //0x7A1200
const MM_SIZE = 0x7A1200; //8MB

const VIDEO_MEMORY_START_ADDRESS = MM_START_ADDRESS + MM_SIZE; //0xF42400
const VIDEO_MEMORY_SIZE = 0x3E800;

const TEXT_MODE_MEMORY_START_ADDRESS = VIDEO_MEMORY_START_ADDRESS + VIDEO_MEMORY_SIZE; //0xF80C00
const TEXT_MODE_MEMORY_SIZE = 0xFA0; //4000 bytes (1000 4-byte word for each character)

const STOP_REGISTER_ADDRESS = TEXT_MODE_MEMORY_START_ADDRESS + TEXT_MODE_MEMORY_SIZE //F81BA0

/**----------------------------------------**/
/*
const ROM_MEMORY_START_ADDRESS = 0x0;
const ROM_MEMORY_SIZE = 0x4C4B40;

const RAM_START_ADDRESS = 0x4C4B40;
const RAM_SIZE = 0x7A1200;

const MM_START_ADDRESS = 0x7A1200;
const MM_SIZE = 0x7A1200;

const VIDEO_MEMORY_START_ADDRESS = 0x7A120C;
const VIDEO_MEMORY_SIZE = 0x3E800;

const TEXT_MODE_MEMORY_START_ADDRESS = 0x7DFA0C;
const TEXT_MODE_MEMORY_SIZE = 0xFA0;

const CHARACTER_MEMORY_SIZE = 1000;
*/
/**----------------------------------------**/

// HDD_COMMANDS
const WRITE_ONE_BYTE = 0;
const WRITE_TWO_BYTE = 1;
const WRITE_FOUR_BYTE = 2;
const READ_ONE_BYTE = 3;
const READ_TWO_BYTE = 4;
const READ_FOUR_BYTE = 5;

// READ WRITE
const READ = 0;
const WRITE = 1;

// BOOLEAN VALUES
const FALSE = 0;
const TRUE = 1;

// STRING LENGTH
const ONE_BYTE = 0;
const TWO_BYTE = 1;
const FOUR_BYTE = 2;

// RESET VECTOR
const RESET_VECTOR = ROM_MEMORY_START_ADDRESS;

// INSTRUCTION FINAL DECODE
const LUI = 0x37;
const AUIPC = 0x17;
const JAL = 0x6F;
const JALR = 0x67;
const BEQ = 0x0;
const BNE = 0x1;
const BLT = 0x4;
const BGE = 0x5;
const BLTU = 0x6;
const BGEU = 0x7;
const LB = 0x0;
const LH = 0x1;
const LW = 0x2;
const LBU = 0x4;
const LHU = 0x5;
const SB = 0x0;
const SH = 0x1;
const SW = 0x2;
const ADDI = 0x0;
const SLTI = 0x2;
const SLTIU = 0x3;
const XORI = 0x4;
const ORI = 0x6;
const ANDI = 0x7;
const SLLI = 0x1;
const SRLI_SRAI = 0x5;
const ADD = 0x0;
const SUB = 0x20; //0x20 in hex equals 32 in decimal
const SLL = 0x1;
const SLT = 0x2;
const SLTU = 0x3;
const XOR = 0x4;
const SRL = 0x5;
const SRA = 0x25; //0x25 in hex equals 37 in decimal
const OR = 0x6;
const AND = 0x7;
const FENCEI = 0x8;
const ECALL = 0x0;
const EBREAK = 0x2;
const MRET = 0x342;
const WFI = 0x105;
const CSRRW = 0x1;
const CSRRS = 0x2;
const CSRRC = 0x3;
const CSRRWI = 0x5;
const CSRRSI = 0x6;
const CSRRCI = 0x7;
const FUNCT7_SUB_SRA = 0x20;
const FUNCT7_RTYPE = 0;
const FUNCT7_MULDIV = 0x1;
const MUL = 0; //6
const MULH = 1; //7
const MULHSU = 2; //8
const MULHU = 3; //9
const DIV = 4; //10
const DIVU = 5; //11
const REM = 6; //12
const REMU = 7; //13

const SYSTEM = 0x73;
const PRIV = 0;
const FENCE = 0xF;

// INSTRUCTION TYPE
const B_TYPE = 0x63;
const LOAD_TYPE = 3;
const STORE_TYPE = 0x23;
const I_TYPE = 0x13;
//#define SHIFT_TYPE
const R_TYPE = 0x33;

// CHIPSET INFO
const ROM_OFFSET = 0x4;
const ROM_SIZE = 20000; //320*200 screen with 4 byte pixel data

const RAM_OFFSET = 20100;
//#define RAM_SIZE 20000000

const VIDEO_MEMORY_OFFSET = 20020200;
//#define VIDEO_MEMORY_SIZE 256000

const HDD_OFFSET = 20276300;
const HDD_SIZE = 20000000;

const W = 320;
const H = 200;

const PIXEL_MODE = 0;
const TEXT_MODE = 1;

const MTVEC_INITIAL_VALUE = 0x000000bc; //0x0
const MCAUSE_INITIAL_VALUE = 0x0;
const MTVAL_INITIAL_VALUE = 0x0;
const MEPC_INITIAL_VALUE = 0x0;
const MSTATUS_INITIAL_VALUE = 0x0;
const MIE_INITIAL_VALUE = 0x0;
const MISA_INITIAL_VALUE = 0x40001100;
const MHARTID_INITIAL_VALUE = 0x0;

/** MCAUSE CODE **/
const MCAUSE_EXCEPTION_CODE_Machine_external_interrupt = 0x8000000B; //11 with highest bit set
const MCAUSE_EXCEPTION_CODE_Machine_timer_interrupt = 0x80000007; //11 with highest bit set
const MCAUSE_EXCEPTION_CODE_Nmi = 0;

// MCAUSE VALUE
const MCAUSE_ECALL = 11;
const MCAUSE_EBREAK = 3;
const MCAUSE_ILLEGAL_OP = 2;

// CSR ADDRESS
const MTVEC_ADDR = 0x305;
const MCAUSE_ADDR = 0x342;
const MTVAL_ADDR = 0x343;
const MEPC_ADDR = 0x341;
const MISA_ADDR = 0x301;

//EMULATOR VARIABLES/CONST
let ROM_MEMORY = null
let RAM_MEMORY = null
let MM_MEMORY = null
let VRAM_MEMORY = null
let CHARACTER_MEMORY = null
//let ascii_char_memory = null
let inst = 0
let hex_dec = false
let u16 = new Uint16Array(5)
let i16 = new Int16Array(5)
let u32 = new Uint32Array(5)
let i32 = new Int32Array(5)
let u64 = new BigUint64Array(5)
let i64 = new BigInt64Array(5)
//RISC-V VARIABLES
//let pc = new Uint8Array(4)
let pc = null;
let reg = new Uint32Array(32) //SYSTEM REGISTERS
let inst_arr = new Uint8Array(4) //INSTRUCTION REGISTER
let reset_pin = 1
const frvse_state_void = "void"
const frvse_state_stop = "stop"
const frvse_state_run = "run"
const frvse_state_step = "step"
let FRVSE_current_state = frvse_state_void
let ERROR_MESSAGE = ""

function FRVSE_set_state(state){
	FRVSE_current_state = state;
	FRVSE_message("FRVSE state: "+state, "black")
	return
	FRVSE_current_state = state;
	var state_message = document.getElementById("state_message");
	state_message.textContent = "FRVSE state: "+state;
	state_message.style.color = "black";
}

function FRVSE_error(err)
{
	ERROR_MESSAGE = err;
	FRVSE_message(err, "red")
	return
	var state_message = document.getElementById("state_message");
	state_message.textContent = err;
	ERROR_MESSAGE = err;
	state_message.style.color = "red";
}

function FRVSE_message(mex, color)
{
	self.postMessage(["EMUM", mex, color]);
}

function update_pixel(pixel_data)
{
	self.postMessage(["UPXD", pixel_data]);
}

let pixel_cnt = 0;
function fill_screen()
{
	update_pixel([[pixel_cnt, 0x00FFFFFF]])
	pixel_cnt++;
	if(pixel_cnt == W*H)
		pixel_cnt = 0;
	setTimeout(fill_screen, 200);
}

function is_web_worker()
{
	if (typeof self !== 'undefined' && self instanceof WorkerGlobalScope) {
		return true;
	} else {
		return false;
	}
}

let run_FRVSE = false;
//main function that executes FRVSE emulator
self.onmessage = function(event) {
	console.log("FRVSE WEB WORKER CALLED");
	if (event.data[0] === "ROMU") //transfer ROM file
	{
		ROM_MEMORY = event.data[1]
		console.log("ROM_MEMORY:: "+ROM_MEMORY)
	}
    if (event.data === 'start') {
		
		FRVSE_main()
		/*
		console.log("run_FRVSE = "+run_FRVSE)
		
		if(!start_frvse())
		{
			console.log("A7")
			return;
		}
		
		console.log("while : "+run_FRVSE)
		while(run_FRVSE)
		{
			console.log("RUN FRVSE")
			riscv32I_core()
		}
		*/
    }
};

function FRVSE_main()
{
	console.log("run_FRVSE = "+run_FRVSE)
	console.log("WW2: "+is_web_worker())
	if(!start_frvse())
	{
		console.log("A7")
		return;
	}
	
	console.log("while : "+run_FRVSE)
	while(run_FRVSE)
	{
		//console.log("RUN FRVSE")
		riscv32I_core()
	}
}

let init_lock = false
function init_frvse()
{	
	console.log("A4")
	if (init_lock)
		return;
	
	console.log("A5")
	if (ROM_MEMORY == null)
	{
		FRVSE_error("ERROR: ROM MEMORY FILE NOT ADDED.")
		console.log("ROM ERROR: "+ROM_MEMORY)
		return 1;
	}
	console.log("A6")
	
	console.log(ROM_MEMORY)
	
	RAM_MEMORY = new Uint8Array(RAM_SIZE)
	MM_MEMORY = new Uint8Array(100)
	VRAM_MEMORY = new Uint32Array(W*H)
	CHARACTER_MEMORY = new Uint32Array(TEXT_MODE_MEMORY_SIZE/4)
	//ascii_char_memory = new Uint8Array(TEXT_MODE_MEMORY_SIZE/4)
	
	/**CREATE PIXELMAP**/
	self.postMessage("CPXM");
	//createPixelMap();
	/**CREATE PIXELMAP**/
	
	/** CREATE REG DATA **/
	self.postMessage("CREG");
	
	/*
	html_pc_id = document.getElementById("pcid");
	console.log("html1: "+html_pc_id);
	
	html_reg_id = []
	
	for(let i = 0; i < 32; i++)
		html_reg_id.push(document.getElementById("x"+i+"id"));
	*/
	
	/** CREATE REG DATA **/
	
	init_lock = true;
}

function start_frvse()
{
	console.log("A1")
	if (FRVSE_current_state == frvse_state_run)
		return false;
	
	console.log("A2")
	if(init_frvse() == 1)
		return false;
	console.log("A3")
	
	FRVSE_set_state(frvse_state_run);
	
	//start emulator
	run_FRVSE = true;
	console.log("start_frvse()")
	//FRVSE_main();
	return true;
}

function stop_frvse()
{
	if (FRVSE_current_state != frvse_state_run)
		return;
	
	FRVSE_set_state(frvse_state_stop);
	run_FRVSE = false;
}

function step_frvse()
{
	if (FRVSE_current_state == frvse_state_run)
		return;
	
	if(init_frvse() == 1)
		return;
	
	FRVSE_set_state(frvse_state_step);
	riscv32I_core()
}

function compose_array(arr)
{
	if (arr.length > 4)
		return null;
	
	let ret_arr = 0;
	let bit_cnt = 0;
	
	for (i in arr) 
	{
		ret_arr |= arr[i] << bit_cnt;
		bit_cnt += 8;
	}
	
	return ret_arr;
}

function value_in_array(arr, val)
{
	arr[0] = val & 0xFF;
	arr[1] = (val >> 8) & 0xFF;
	arr[2] = (val >> 16) & 0xFF;
	arr[3] = (val >> 24) & 0xFF;
}

function add_to_array(arr, val)
{
	let valres = compose_array(arr)
	valres += val
	value_in_array(arr, valres)
}

function toHex32(number) {
    let hexString = Number(number).toString(16).toUpperCase();
    
    while (hexString.length < 8) {
        hexString = '0' + hexString;
    }

    return hexString;
}

function update_reg()
{
	console.log("REG LOG");
	self.postMessage(["REG", reg]);
	return;
	
	html_pc_id.textContent = hex_dec == false? toHex32(pc) : pc;
	for (i in html_reg_id) 
		html_reg_id[i].textContent = hex_dec == false? toHex32(reg[i]) : reg[i];
}

function reg_mode(mode)
{
	hex_dec = mode;
	update_reg()
}

function FUNCT3(){return (inst >> 12) & 0x7;}

function FUNCT7(){return (inst >> 25);}

function RS1(){return ((inst >> 15) & 0x1F);}

function RS2(){return (inst >> 20) & 0x1F;}

function RD(){return (inst >> 7) & 0x1F;}

function I_TYPE_IMMEDIATE(){
	i16[0] = (inst & 0x80000000 | ((inst >> 20) & 0x7ff));
	return i16[0];
}

function I_TYPE_IMMEDIATE_U(){
	u16[0] = (inst & 0x80000000 | ((inst >> 20) & 0x7ff));
	return u16[0];
}

function JAL_IMMEDIATE(){
	i32[0] = (((inst & 0x7FE00000) >> 20) | ((inst & 0x100000) >> 9) | (inst & 0xFF000) | (inst & 0x80000000));
	return i32[0];
}

function BRANCH_IMMEDIATE(){
	return (((inst & 0xF00) >> 7) | ((inst & 0x7E000000) >> 20) | ((inst & 0x80) << 4)) & 0xFFFFFFFE;
}

function SW_ADDRESS(){
	return ((inst >> 20) & 0xFE0) | ((inst >> 7) & 0x1F);
}

let reset_bool = false
function reset_routine()
{
	console.log("resetpin2")
	pc = RESET_VECTOR;

    if(reset_bool == false)
    {
        reset_pin = 0;
        reset_bool = true;
    }

	reg = new Uint32Array(32) //RESET GP REGISTERS
	console.log("REGTEST: "+reg)
}

//INSTRUCTION FUNCTIONS
function lui() //#
{
    if(RD())
        reg[RD()] = inst & 0xFFFFF000;
}
function auipc() //#
{
    if(RD())
        reg[RD()] = (inst & 0xFFFFF000) + pc; //pc
}
function jal() //#
{
    let bf = 0;

    if(RD())
        reg[RD()] = pc + 4;

    bf = (((inst & 0x7FE00000) >> 20) | ((inst & 0x100000) >> 9) | (inst & 0xFF000) );
    if(inst >> 31)
        bf |= 0xFFF00000;

	//add_to_array(pc, bf);
    pc += bf;
}
function jalr() //#
{
    let bf = 0;

    if(RD())
        reg[RD()] = pc + 4;

    bf = inst >> 20;

    if(inst >> 31)
        bf |= 0xFFFFF000;

	i32[0] = reg[RS1()];
    bf += i32[0];

    bf &= 0xFFFFFFFE;

	//add_to_array(pc, bf);
    pc = bf;
}
function beq() //#
{
    let bf = 0;

    if(reg[RS1()] == reg[RS2()])
    {
        bf = BRANCH_IMMEDIATE();

        if(inst >> 31)
            bf |= 0xFFFFF000;
        else
            bf &= 0xFFE;

		//add_to_array(pc, bf);
        pc += bf;
        return 1;
    }
    return 0;
}
function bne() //#
{
    let bf = 0;

    if(reg[RS1()] != reg[RS2()])
    {
        bf = BRANCH_IMMEDIATE();

        if(inst >> 31)
            bf |= 0xFFFFF000;
        else
            bf &= 0xFFE;

		//add_to_array(pc, bf);
        pc += bf;
        return 1;
    }
    return 0;
}
function blt() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	
    if(i32[0] < i32[1])
    {
        i32[2] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[2] |= 0xFFFFF000;
        else
            i32[2] &= 0xFFE;

		//add_to_array(pc, bf);
        pc += i32[2];
        return 1;
    }
    return 0;
}
function bge() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	
    if(i32[0] >= i32[1])
    {
        i32[2] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[2] |= 0xFFFFF000;
        else
            i32[2] &= 0xFFE;

		//add_to_array(pc, bf);
        pc += i32[2];
        return 1;
    }
    return 0;
}
function bltu() //#
{
    if(reg[RS1()] < reg[RS2()])
    {
		i32[0] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[0] |= 0xFFFFF000;
        else
            i32[0] &= 0xFFE;

		//add_to_array(pc, i32[0]);
        pc += i32[0];
        return 1;
    }
    return 0;
}
function bgeu() //#
{
    if(reg[RS1()] >= reg[RS2()])
    {
		i32[0] = BRANCH_IMMEDIATE();

        if(inst >> 31)
            i32[0] |= 0xFFFFF000;
        else
            i32[0] &= 0xFFE;

		//add_to_array(pc, i32[0]);
        pc += i32[0];
        return 1;
    }
    return 0;
}
function lb() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, ONE_BYTE);

    //sign extension
    if(reg[RD()] >> 7)
        reg[RD()] |= 0xFFFFFF00;
}
function lh() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, TWO_BYTE);

    //sign extension
    if(reg[RD()] >> 15)
        reg[RD()] |= 0xFFFF0000;
}
function lw() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, FOUR_BYTE);
}
function lbu() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, ONE_BYTE);
}
function lhu() //#
{
	i16[0] = inst >> 20;

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RD()], READ, TWO_BYTE);
}
function sb() //#
{
	i16[0] = SW_ADDRESS();

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RS2()], WRITE, ONE_BYTE);
}
function sh() //#
{
	let imm = new Int16Array(1);
	imm[0] = SW_ADDRESS();

    if(imm[0] >> 11)
        imm[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + imm[0], reg[RS2()], WRITE, TWO_BYTE); //(SW_ADDRESS)
}
function sw() //#
{
	i16[0] = SW_ADDRESS();

    if(i16[0] >> 11)
        i16[0] |= 0xF000;

    send_to_chipset(reg[RS1()] + i16[0], reg[RS2()], WRITE, FOUR_BYTE); //(SW_ADDRESS)
}
function addi() //#
{
    i32[0] = (inst & 0x7FF00000) >> 20;

    if(inst >> 31)
        i32[0] |= 0x1FFFFF800;
    else
        i32[0] &= 0x7FF;

	i32[1] = reg[RS1()]
	
	i32[1] += i32[0];

    reg[RD()] = i32[1];
}
function slti() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

	i32[0] = reg[RS1()]
    reg[RD()] = i32[0] < i16[0]? 1 : 0; //I_TYPE_IMMEDIATE
}
function sltiu() //#
{
    u16[0] = inst >> 20;

    if(u16[0] & 0x800)
        u16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] < u16[0]? 1 : 0; //I_TYPE_IMMEDIATE
}
function xori() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] ^ i16[0]; // I_TYPE_IMMEDIATE;
}
function ori() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] | i16[0]; //I_TYPE_IMMEDIATE;
}
function andi() //#
{
    i16[0] = inst >> 20;

    if(i16[0] & 0x800)
        i16[0] |= 0xF000;

    reg[RD()] = reg[RS1()] & i16[0]; //I_TYPE_IMMEDIATE;
}
function slli() //#
{
    reg[RD()] = reg[RS1()] << (RS2()); //RS2 used as shamt[4:0]
}
function srli() //#
{
    reg[RD()] = reg[RS1()] >> (RS2()); //RS2 used as shamt[4:0]
}
function srai() //#
{
    reg[RD()] = reg[RS1()] >> (RS2()); //| (reg[RS1] & 0x80000000); //RS2 used as shamt[4:0]

    if(reg[RS1] & 0x80000000)
	{
		u32[0] = Math.pow(2, (RS2)-1);
		u32[1] = Math.pow(2, (RS2)-1);
		reg[RD()] |= u32[0] << (32 - u32[1]);
	}
}
function add() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
    reg[RD()] = i32[0] + i32[1];
}
function sub() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
    reg[RD()] = i32[0] - i32[1];
}
function sll() //#
{
    reg[RD()] = reg[RS1()] << (reg[RS2()] & 0x1F);
}
function slt() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	
    reg[RD()] = i32[0] < i32[1]? 1 : 0;
}
function sltu() //#
{
    reg[RD()] = reg[RS1()] < reg[RS2()]? 1 : 0;
}
function xor() //#
{
    reg[RD()] = reg[RS1()] ^ reg[RS2()];
}
function srl() //#
{
    reg[RD()] = reg[RS1()] >> (reg[RS2()] & 0x1F);
}
function sra() //#
{
    reg[RD()] = reg[RS1()] >> (RS2()); //| (reg[RS1] & 0x80000000); //RS2 used as shamt[4:0]

    if(reg[RS1()] & 0x80000000)
	{
		u32[0] = pow(2, (reg[RS2()] & 0x1F )-1);
		u32[1] = pow(2, (reg[RS2()] & 0x1F )-1);
		
		reg[RD()] |= u32[0] << (32 - u32[1]);
	}
}
function or() //#
{
    reg[RD()] = reg[RS1()] | reg[RS2()];
}
function and() //#
{
    reg[RD()] = reg[RS1()] & reg[RS2()];
}

function mul() //#
{
	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
    reg[RD()] = i32[0]*i32[1];
}

function mulh() //#
{
	i64[0] = reg[RS1()];
	i64[1] = reg[RS2()];
	
	i64[0] = i64[0]*i64[1]
	
    reg[RD()] = i64[0] >> 32;
}

function mulhsu() //#
{
	i64[0] = reg[RS1()];
	i64[1] = 0;
	
	u64[0] = reg[RS2()]; 
	
	i64[1] = i64[0] * u64[0];
	
    reg[RD()] = i64[1] >> 32;
}

function mulhu() //#
{
	u64[0] = reg[RS1()] * reg[RS2()];
	
    reg[RD()] = u64[0] >> 32;
}

function _div() //#
{
    if(!reg[RS2()])
    {
        reg[RD()] = 0xFFFFFFFF;
        return;
    }

	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	i32[2] = i32[0] / i32[1];
    reg[RD()] = i32[2];
}

function divu() //#
{
    if(!reg[RS2()])
    {
        reg[RD()] = 0xFFFFFFFF;
        return;
    }

    reg[RD] = reg[RS1()] / reg[RS2()];
}

function rem() //#
{
    if(!reg[RS2()])
    {
        reg[RD()] = 0xFFFFFFFF;
        return;
    }

	i32[0] = reg[RS1()];
	i32[1] = reg[RS2()];
	i32[2] = i32[0] % i32[1];
    reg[RD()] = i32[2];
}

function remu() //#
{
    if(!reg[RS2()])
    {
        reg[RD] = 0xFFFFFFFF;
        return;
    }

    reg[RD()] = reg[RS1()] % reg[RS2()];
}

function mem_device_controller(device, addr, data, rw, sz)
{
	console.log("MEM DEV2")
    if(rw == READ)
    {
		console.log("MEM DEV3")
        switch(sz)
        {
        case ONE_BYTE:
			data[0] = device[addr]
            break;
        case TWO_BYTE:
			data[0] = device[addr]
			data[1] = device[addr+1]
            break;
        case FOUR_BYTE:
			data[0] = device[addr]
			data[1] = device[addr+1]
			data[2] = device[addr+2]
			data[3] = device[addr+3]
            break;
        }
    }
    else if(rw == WRITE)
    {
		console.log("MEM DEV4")
        switch(sz)
        {
        case ONE_BYTE:
            device[addr] = data[0];
            break;
        case TWO_BYTE:
            device[addr] = data[0];
            device[addr+1] = data[1];
            break;
        case FOUR_BYTE:
            device[addr] = data[0];
            device[addr+1] = data[1];
            device[addr+2] = data[2];
            device[addr+3] = data[3];
            break;
        }
    }
}

const CHAR_BASIC = 0
const CHAR_BLOCK = 1
const CHAR_BOX = 2
function get_char_array(charch)
{
	switch(charch >> 8)
	{
		case CHAR_BASIC:
			return font8x8_basic[charch & 0xFF];
		case CHAR_BLOCK:
			return font8x8_block[charch & 0xFF];
		case CHAR_BOX:
			return font8x8_box[charch & 0xFF];
	}
	
	return null;
}

function draw_character(addr, color)
{
	/*
	CHARACTER STRING
	
	1  2  3  4
	00-00-00-00
	
	1 byte(MSB): font
	2 byte: ascii character
	3 byte: char color
	4 byte(LSB): background color
	*/
    const CHAR_COLOR = color & 0xFF;
    const BACKGROUND_COLOR = ((color >> 8) & 0xFF);
    const CHARACTER = color >> 16;
    const MODE_ALPHA_COLOR = 0xF8;

    if((addr/4) > 999)
        return;

    //return the bitmap of the character
    let character = get_char_array(CHARACTER);

    if(character == null)
        return;

	//ascii_char_memory[addr] = (CHARACTER) & 0xFF;

    let screen_pos = 0;

    let clr = 0;

    //addr *= 2;

    addr += ((addr/8)/40)* (320*7); //0xA00;

	let char_arr = []
    for(let i = 0; i < 8; i++)
    {
        for(let id = 0; id < 8; id++)
        {
            let bit = (character[i] >> id) & 0x1;

            screen_pos = addr+id;

            if(!bit)
                clr = CHAR_COLOR;
            else
                clr = BACKGROUND_COLOR;

            if( clr == MODE_ALPHA_COLOR )
                continue;

			let vga_color = (VGA_RGB_table[clr] << 8) | 0xFF;
            VRAM_MEMORY[screen_pos] = vga_color;
			char_arr.push([screen_pos, vga_color])
        }
        addr += 320;
    }
	update_pixel(char_arr)
}

function text_mode_controller(addr, charac, rw)
{
    if(rw == WRITE)
    {
        CHARACTER_MEMORY[addr] = charac;
        draw_character(addr, CHARACTER_MEMORY[addr]);
    }
    else if(rw == READ)
    {
        charac = CHARACTER_MEMORY[addr];
    }
}

function video_memory_controller(addr, color, rw)
{
    if(rw)
    {
        VRAM_MEMORY[addr/4] = color;
		
		update_pixel([[addr, color]])
    }
    else if(!rw)
    {
        color = VRAM_MEMORY[addr/4];
    }
}

function send_to_chipset(addr, data, rw, sz)
{
	console.log("CHIPSET")
	let memory_dev = null
	
	let addr_offset = 0
	
    if(addr >= ROM_MEMORY_START_ADDRESS && addr <= (ROM_MEMORY_START_ADDRESS + ROM_MEMORY_SIZE)-1)
	{
		console.log("ROM MEM")
		addr_offset = addr - ROM_MEMORY_START_ADDRESS;
		
		//if(addr_offset > ROM_MEMORY_SIZE)
			//return;
		
		memory_dev = ROM_MEMORY
	}
    else if(addr >= RAM_START_ADDRESS && addr <= (RAM_START_ADDRESS+RAM_SIZE)-1)
	{
		memory_dev = RAM_MEMORY
		addr_offset = addr - RAM_START_ADDRESS;
	}
    else if(addr >= MM_START_ADDRESS && addr <= (MM_START_ADDRESS+MM_SIZE)-1)
	{
		if(MM_MEMORY == null)
			return;
		
		addr_offset = addr - MM_START_ADDRESS;
		
		//if(addr_offset > MM_SIZE)
			//return;
		
		memory_dev = MM_MEMORY;
	}
	
	if (memory_dev != null)
	{
		console.log("MEM DEV1")
		mem_device_controller(memory_dev, addr_offset, data, rw, sz)
		memory_dev = null
		return
	}

    if(addr >= VIDEO_MEMORY_START_ADDRESS && addr <= (VIDEO_MEMORY_START_ADDRESS + VIDEO_MEMORY_SIZE)-1)
    {
        if(sz != FOUR_BYTE)
            return; //FAULT

        video_memory_controller(addr-VIDEO_MEMORY_START_ADDRESS, data, rw);
        return;
    }

    if(addr >= TEXT_MODE_MEMORY_START_ADDRESS && addr <= (TEXT_MODE_MEMORY_START_ADDRESS + TEXT_MODE_MEMORY_SIZE)-1)
    {
        text_mode_controller(addr-TEXT_MODE_MEMORY_START_ADDRESS, data, rw);
        return;
    }
	
	if(addr == STOP_REGISTER_ADDRESS)
	{
        if(sz != ONE_BYTE)
            return;
		stop_frvse();
		return;
	}
}

//EMULATOR FUNCTION
function riscv32I_core()
{
	return;
	console.log("reset_pin: ... "+reset_pin)
    if(reset_pin)
	{
		console.log("resetpin1")
		reset_routine();
	}

    send_to_chipset(pc, inst_arr, READ, FOUR_BYTE);

	inst = compose_array(inst_arr);

	console.log("REG LOG1: "+pc+" -- "+inst);

    switch(inst & 0x7F)
    {
        case LUI:
            lui();
            break;
        case AUIPC:
            auipc();
            break;
        case JAL:
            jal();
            return;
        case JALR:
            jalr();
            return;
        case B_TYPE:
            switch(FUNCT3()) //check funct3
            {
            case BEQ:
                if(beq())
                    return;
                break;
            case BNE:
                if(bne())
                    return;
                break;
            case BLT:
                if(blt())
                    return;
                break;
            case BGE:
                if(bge())
                    return;
                break;
            case BLTU:
                if(bltu())
                    return;
                break;
            case BGEU:
                if(bgeu())
                    return;
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case LOAD_TYPE:
            switch(FUNCT3())
            {
            case LB:
                lb();
                break;
            case LH:
                lh();
                break;
            case LW:
                lw();
                break;
            case LBU:
                lbu();
                break;
            case LHU:
                lhu();
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case STORE_TYPE:
            switch(FUNCT3())
            {
            case SB:
                sb();
                break;
            case SH:
                sh();
                break;
            case SW:
                sw();
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case I_TYPE:
            switch(FUNCT3())
            {
            case ADDI:
                addi();
                break;
            case SLTI:
                slti();
                break;
            case SLTIU:
                sltiu();
                break;
            case XORI:
                xori();
                break;
            case ORI:
                ori();
                break;
            case ANDI:
                andi();
                break;
            case SLLI:
                slli();
                break;
            case SRLI_SRAI:
                if(!FUNCT7())
                    srli();
                else if(FUNCT7() == 32)
                    srai();
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case R_TYPE:
            switch(FUNCT7()) //(FUNCT3) + (FUNCT7) )
            {
            case FUNCT7_SUB_SRA:
                switch(FUNCT3())
                {
                case SUB:
                    sub();
                    break;
                case SRA:
                    sra();
                    break;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    break;
                }
                break;
            case FUNCT7_RTYPE:
                switch(FUNCT3())
                {
                case ADD:
                    add();
                    break;
                case SLL:
                    sll();
                    break;
                case SLT:
                    slt();
                    break;
                case SLTU:
                    sltu();
                    break;
                case XOR:
                    xor();
                    break;
                case SRL:
                    srl();
                    break;
                case OR:
                    or();
                    break;
                case AND:
                    and();
                    break;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            case FUNCT7_MULDIV:
                switch(FUNCT3())
                {
                case MUL:
                    mul();
                    break;
                case MULH:
                    mulh();
                    break;
                case MULHSU:
                    mulhsu();
                    break;
                case MULHU:
                    mulhu();
                    break;
                case DIV:
                    _div();
                    break;
                case DIVU:
                    divu();
                    break;
                case REM:
                    rem();
                    break;
                case REMU:
                    remu();
                    break;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case FENCE: //NOT IMPLEMENTED
            if(inst >> 12)
            {
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        case SYSTEM:
            switch(FUNCT3())
            {
            case PRIV:
                switch(inst >> 20)
                {
                case ECALL:
                    //eti_handler(MCAUSE_ECALL);
                    return;
                case EBREAK:
                    //eti_handler(MCAUSE_EBREAK);
                    return;
                case MRET:
                    //pc = csr.mepc;
                    return;
                case WFI:
                    //CORE_LOG("WFI\n");
                    return;
                default:
                    //eti_handler(MCAUSE_ILLEGAL_OP);
                    return;
                }
                break;
            case CSRRW:
                break;
            case CSRRS:
                break;
            case CSRRC:
                break;
            case CSRRWI:
                break;
            case CSRRSI:
                break;
            case CSRRCI:
                break;
            default:
                //eti_handler(MCAUSE_ILLEGAL_OP);
                return;
            }
            break;
        default:
            //eti_handler(MCAUSE_ILLEGAL_OP);
            return;
    }

	console.log("REG LOG2");
	update_reg()

	//add_to_array(pc, 4)
    pc += 4;
}