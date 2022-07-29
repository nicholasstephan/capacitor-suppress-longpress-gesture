'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const SuppressLongpressGesture = core.registerPlugin('SuppressLongpressGesture', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SuppressLongpressGestureWeb()),
});

class SuppressLongpressGestureWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SuppressLongpressGestureWeb: SuppressLongpressGestureWeb
});

exports.SuppressLongpressGesture = SuppressLongpressGesture;
//# sourceMappingURL=plugin.cjs.js.map
