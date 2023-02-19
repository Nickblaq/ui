(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('clsx'), require('tailwind-merge')) :
  typeof define === 'function' && define.amd ? define(['exports', 'clsx', 'tailwind-merge'], factory) :
  (global = global || self, factory(global.utils = {}, global.clsx, global.tailwindMerge));
}(this, (function (exports, clsx, tailwindMerge) {
  function cn() {
    return tailwindMerge.twMerge(clsx.clsx([].slice.call(arguments)));
  }

  exports.cn = cn;

})));
//# sourceMappingURL=index.umd.js.map
