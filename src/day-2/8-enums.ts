// const enum Size {
//     s = 'small',
//     m = 'medium',
//     l = 'long',
// }

type Size = 'small' | 'medium' | 'long';
const SizeMap = {
    s: 'small',
    m: 'medium',
    l: 'long',
} as const;

// const sizeName = Size[10];
const size = SizeMap.s;

const sizes = Object.values(SizeMap);

function getButtonSize(size: Size) {}

getButtonSize(SizeMap.m);
getButtonSize('long');
