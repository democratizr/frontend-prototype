const sizeStr = (sizes, unit) => sizes.map(size => `${size}${unit}`).join(' ');

export const em = (...sizes) => sizeStr(sizes, 'em');
export const rem = (...sizes) => sizeStr(sizes, 'rem');
export const percent = (...sizes) => sizeStr(sizes, '%');
export const px = (...sizes) => sizeStr(sizes, 'px');
