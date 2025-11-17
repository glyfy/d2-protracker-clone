// src/mui-theme.d.ts
import '@mui/material/styles';

type D2ptGrayKeys = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

declare module '@mui/material/styles' {
  interface Palette {
    /** Custom grayscale, e.g. theme.palette.d2ptGray[3] */
    d2ptGray: Record<D2ptGrayKeys, string>;
  }
  interface PaletteOptions {
    d2ptGray?: Partial<Record<D2ptGrayKeys, string>>;
  }
}
