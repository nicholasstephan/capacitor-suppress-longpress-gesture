import { registerPlugin } from '@capacitor/core';
const SuppressLongpressGesture = registerPlugin('SuppressLongpressGesture', {
    web: () => import('./web').then(m => new m.SuppressLongpressGestureWeb()),
});
export * from './definitions';
export { SuppressLongpressGesture };
//# sourceMappingURL=index.js.map