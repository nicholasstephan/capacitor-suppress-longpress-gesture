import { WebPlugin } from '@capacitor/core';
import type { SuppressLongpressGesturePlugin } from './definitions';
export declare class SuppressLongpressGestureWeb extends WebPlugin implements SuppressLongpressGesturePlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    activateService(): Promise<string>;
    deactivateService(): Promise<string>;
}
