var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function cn() {
  return tailwindMerge.twMerge(clsx.clsx([].slice.call(arguments)));
}

exports.cn = cn;
//# sourceMappingURL=index.js.map
