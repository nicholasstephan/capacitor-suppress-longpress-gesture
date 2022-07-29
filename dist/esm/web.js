import { WebPlugin } from '@capacitor/core';
export class SuppressLongpressGestureWeb extends WebPlugin {
    async echo(options) {
        console.log('ECHO', options);
        return options;
    }
    async activateService() {
        console.warn('activateLongPressSuppression not supported for web');
        return 'activateLongPressSuppression not supported for web';
    }
    async deactivateService() {
        console.warn('deactivateLongPressSuppression not supported for web');
        return 'deactivateLongPressSuppression not supported for web';
    }
}
//# sourceMappingURL=web.js.map