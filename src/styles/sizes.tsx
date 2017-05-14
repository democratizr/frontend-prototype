export type Size = string;

const sizeStr = (sizes, unit) => sizes.map(size => `${size}${unit}`).join(' ');

export const em = (...sizes: number[]) => sizeStr(sizes, 'em');
export const rem = (...sizes: number[]) => sizeStr(sizes, 'rem');
export const percent = (...sizes: number[]) => sizeStr(sizes, '%');
export const px = (...sizes: number[]) => sizeStr(sizes, 'px');
