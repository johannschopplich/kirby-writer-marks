var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/escape-string-regexp/index.js"(exports2, module2) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module2.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var key;
    var convert = module2.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }
    var channels;
    var labels;
    var model;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = convert.gray.hsv = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      var path = [graph[toModel].parent, toModel];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn(args);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/ansi-styles/index.js"(exports2, module2) {
    "use strict";
    var colorConvert = require_color_convert();
    var wrapAnsi16 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => function() {
      const rgb = fn.apply(colorConvert, arguments);
      return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    function assembleStyles() {
      const codes = new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.grey = styles.color.gray;
      for (const groupName of Object.keys(styles)) {
        const group = styles[groupName];
        for (const styleName of Object.keys(group)) {
          const style = group[styleName];
          styles[styleName] = {
            open: `[${style[0]}m`,
            close: `[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
      }
      const ansi2ansi = (n) => n;
      const rgb2rgb = (r, g, b) => [r, g, b];
      styles.color.close = "[39m";
      styles.bgColor.close = "[49m";
      styles.color.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 0)
      };
      styles.color.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 0)
      };
      styles.color.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 0)
      };
      styles.bgColor.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 10)
      };
      styles.bgColor.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 10)
      };
      styles.bgColor.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 10)
      };
      for (let key of Object.keys(colorConvert)) {
        if (typeof colorConvert[key] !== "object") {
          continue;
        }
        const suite = colorConvert[key];
        if (key === "ansi16") {
          key = "ansi";
        }
        if ("ansi16" in suite) {
          styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
          styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
        }
        if ("ansi256" in suite) {
          styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
          styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
        }
        if ("rgb" in suite) {
          styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
          styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
        }
      }
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports2, module2) {
    "use strict";
    module2.exports = (flag, argv) => {
      argv = argv || process.argv;
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const pos = argv.indexOf(prefix + flag);
      const terminatorPos = argv.indexOf("--");
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports2, module2) {
    "use strict";
    var os = require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
      forceColor = false;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = true;
    }
    if ("FORCE_COLOR" in env) {
      forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(stream) {
      if (forceColor === false) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (stream && !stream.isTTY && forceColor !== true) {
        return 0;
      }
      const min = forceColor ? 1 : 0;
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return min;
      }
      return min;
    }
    function getSupportLevel(stream) {
      const level = supportsColor(stream);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: getSupportLevel(process.stdout),
      stderr: getSupportLevel(process.stderr)
    };
  }
});

// node_modules/chalk/templates.js
var require_templates = __commonJS({
  "node_modules/chalk/templates.js"(exports2, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;
    var ESCAPES = new Map([
      ["n", "\n"],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", ""],
      ["a", "\x07"]
    ]);
    function unescape(c) {
      if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      return ESCAPES.get(c) || c;
    }
    function parseArguments(name, args) {
      const results = [];
      const chunks = args.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk2, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk2;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    module2.exports = (chalk2, tmp) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? str : buildStyle(chalk2, styles)(str));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk2, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk/index.js
var require_chalk = __commonJS({
  "node_modules/chalk/index.js"(exports2, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles();
    var stdoutColor = require_supports_color().stdout;
    var template = require_templates();
    var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
    var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
    var skipModels = new Set(["gray"]);
    var styles = Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = stdoutColor ? stdoutColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
    }
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk2 = {};
        applyOptions(chalk2, options);
        chalk2.template = function() {
          const args = [].slice.call(arguments);
          return chalkTag.apply(null, [chalk2.template].concat(args));
        };
        Object.setPrototypeOf(chalk2, Chalk.prototype);
        Object.setPrototypeOf(chalk2.template, chalk2);
        chalk2.template.constructor = Chalk;
        return chalk2.template;
      }
      applyOptions(this, options);
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "[94m";
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, key);
        }
      };
    }
    styles.visible = {
      get() {
        return build.call(this, this._styles || [], true, "visible");
      }
    };
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], this._empty, model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, styles);
    function build(_styles, _empty, key) {
      const builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      builder._empty = _empty;
      const self2 = this;
      Object.defineProperty(builder, "level", {
        enumerable: true,
        get() {
          return self2.level;
        },
        set(level) {
          self2.level = level;
        }
      });
      Object.defineProperty(builder, "enabled", {
        enumerable: true,
        get() {
          return self2.enabled;
        },
        set(enabled) {
          self2.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      const args = arguments;
      const argsLen = args.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return "";
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += " " + args[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return this._empty ? "" : str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = "";
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function chalkTag(chalk2, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(" ");
      }
      const args = [].slice.call(arguments, 2);
      const parts = [strings.raw[0]];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk2, parts.join(""));
    }
    Object.defineProperties(Chalk.prototype, styles);
    module2.exports = Chalk();
    module2.exports.supportsColor = stdoutColor;
    module2.exports.default = module2.exports;
  }
});

// node_modules/consola/dist/consola.js
var require_consola = __commonJS({
  "node_modules/consola/dist/consola.js"(exports2, module2) {
    "use strict";
    function u(u2) {
      return u2 && typeof u2 == "object" && "default" in u2 ? u2.default : u2;
    }
    var D = u(require("util"));
    var e = require("path");
    var t = require("fs");
    var r = u(require("os"));
    var n = u(require("tty"));
    function s(u2, D2) {
      return u2(D2 = { exports: {} }, D2.exports), D2.exports;
    }
    var o;
    var i = (o = Object.freeze({ __proto__: null, default: [{ name: "AppVeyor", constant: "APPVEYOR", env: "APPVEYOR", pr: "APPVEYOR_PULL_REQUEST_NUMBER" }, { name: "Bamboo", constant: "BAMBOO", env: "bamboo_planKey" }, { name: "Bitbucket Pipelines", constant: "BITBUCKET", env: "BITBUCKET_COMMIT" }, { name: "Bitrise", constant: "BITRISE", env: "BITRISE_IO", pr: "BITRISE_PULL_REQUEST" }, { name: "Buddy", constant: "BUDDY", env: "BUDDY_WORKSPACE_ID", pr: "BUDDY_EXECUTION_PULL_REQUEST_ID" }, { name: "Buildkite", constant: "BUILDKITE", env: "BUILDKITE", pr: { env: "BUILDKITE_PULL_REQUEST", ne: "false" } }, { name: "CircleCI", constant: "CIRCLE", env: "CIRCLECI", pr: "CIRCLE_PULL_REQUEST" }, { name: "Cirrus CI", constant: "CIRRUS", env: "CIRRUS_CI", pr: "CIRRUS_PR" }, { name: "AWS CodeBuild", constant: "CODEBUILD", env: "CODEBUILD_BUILD_ARN" }, { name: "Codeship", constant: "CODESHIP", env: { CI_NAME: "codeship" } }, { name: "Drone", constant: "DRONE", env: "DRONE", pr: { DRONE_BUILD_EVENT: "pull_request" } }, { name: "dsari", constant: "DSARI", env: "DSARI" }, { name: "GitLab CI", constant: "GITLAB", env: "GITLAB_CI" }, { name: "GoCD", constant: "GOCD", env: "GO_PIPELINE_LABEL" }, { name: "Hudson", constant: "HUDSON", env: "HUDSON_URL" }, { name: "Jenkins", constant: "JENKINS", env: ["JENKINS_URL", "BUILD_ID"], pr: { any: ["ghprbPullId", "CHANGE_ID"] } }, { name: "Magnum CI", constant: "MAGNUM", env: "MAGNUM" }, { name: "Sail CI", constant: "SAIL", env: "SAILCI", pr: "SAIL_PULL_REQUEST_NUMBER" }, { name: "Semaphore", constant: "SEMAPHORE", env: "SEMAPHORE", pr: "PULL_REQUEST_NUMBER" }, { name: "Shippable", constant: "SHIPPABLE", env: "SHIPPABLE", pr: { IS_PULL_REQUEST: "true" } }, { name: "Solano CI", constant: "SOLANO", env: "TDDIUM", pr: "TDDIUM_PR_ID" }, { name: "Strider CD", constant: "STRIDER", env: "STRIDER" }, { name: "TaskCluster", constant: "TASKCLUSTER", env: ["TASK_ID", "RUN_ID"] }, { name: "Solano CI", constant: "TDDIUM", env: "TDDIUM", pr: "TDDIUM_PR_ID", deprecated: true }, { name: "TeamCity", constant: "TEAMCITY", env: "TEAMCITY_VERSION" }, { name: "Team Foundation Server", constant: "TFS", env: "TF_BUILD" }, { name: "Travis CI", constant: "TRAVIS", env: "TRAVIS", pr: { env: "TRAVIS_PULL_REQUEST", ne: "false" } }] })) && o.default || o;
    var a = s(function(u2, D2) {
      var e2 = process.env;
      function t2(u3) {
        return typeof u3 == "string" ? !!e2[u3] : Object.keys(u3).every(function(D3) {
          return e2[D3] === u3[D3];
        });
      }
      Object.defineProperty(D2, "_vendors", { value: i.map(function(u3) {
        return u3.constant;
      }) }), D2.name = null, D2.isPR = null, i.forEach(function(u3) {
        var r2 = (Array.isArray(u3.env) ? u3.env : [u3.env]).every(function(u4) {
          return t2(u4);
        });
        if (D2[u3.constant] = r2, r2)
          switch (D2.name = u3.name, typeof u3.pr) {
            case "string":
              D2.isPR = !!e2[u3.pr];
              break;
            case "object":
              "env" in u3.pr ? D2.isPR = u3.pr.env in e2 && e2[u3.pr.env] !== u3.pr.ne : "any" in u3.pr ? D2.isPR = u3.pr.any.some(function(u4) {
                return !!e2[u4];
              }) : D2.isPR = t2(u3.pr);
              break;
            default:
              D2.isPR = null;
          }
      }), D2.isCI = !!(e2.CI || e2.CONTINUOUS_INTEGRATION || e2.BUILD_NUMBER || e2.RUN_ID || D2.name);
    });
    var l = (a.name, a.isPR, a.isCI, false);
    var c = false;
    var h = false;
    var F = "development";
    var C = typeof window != "undefined";
    var f = "";
    var E = false;
    function g(u2) {
      return !(!u2 || u2 === "false");
    }
    typeof process != "undefined" && (process.platform && (f = String(process.platform)), process.stdout && (h = g(process.stdout.isTTY)), l = Boolean(a.isCI), process.env && (process.env.NODE_ENV && (F = process.env.NODE_ENV), c = g(process.env.DEBUG), E = g(process.env.MINIMAL)));
    var d = { browser: C, test: F === "test", dev: F === "development" || F === "dev", production: F === "production", debug: c, ci: l, tty: h, minimal: void 0, minimalCLI: void 0, windows: /^win/i.test(f), darwin: /^darwin/i.test(f), linux: /^linux/i.test(f) };
    d.minimal = E || d.ci || d.test || !d.tty, d.minimalCLI = d.minimal;
    var p = Object.freeze(d);
    var m = {};
    m[m.Fatal = 0] = "Fatal", m[m.Error = 0] = "Error", m[m.Warn = 1] = "Warn", m[m.Log = 2] = "Log", m[m.Info = 3] = "Info", m[m.Success = 3] = "Success", m[m.Debug = 4] = "Debug", m[m.Trace = 5] = "Trace", m[m.Silent = -1 / 0] = "Silent", m[m.Verbose = 1 / 0] = "Verbose";
    var b = { silent: { level: -1 }, fatal: { level: m.Fatal }, error: { level: m.Error }, warn: { level: m.Warn }, log: { level: m.Log }, info: { level: m.Info }, success: { level: m.Success }, debug: { level: m.Debug }, trace: { level: m.Trace }, verbose: { level: m.Trace }, ready: { level: m.Info }, start: { level: m.Info } };
    function y(u2) {
      return D2 = u2, Object.prototype.toString.call(D2) === "[object Object]" && (!(!u2.message && !u2.args) && !u2.stack);
      var D2;
    }
    var B = false;
    var v = [];
    var _ = class {
      constructor(u2 = {}) {
        this._reporters = u2.reporters || [], this._types = u2.types || b, this.level = u2.level !== void 0 ? u2.level : 3, this._defaults = u2.defaults || {}, this._async = u2.async !== void 0 ? u2.async : void 0, this._stdout = u2.stdout, this._stderr = u2.stderr, this._mockFn = u2.mockFn, this._throttle = u2.throttle || 1e3, this._throttleMin = u2.throttleMin || 5;
        for (const u3 in this._types) {
          const D2 = __spreadValues(__spreadValues({ type: u3 }, this._types[u3]), this._defaults);
          this[u3] = this._wrapLogFn(D2), this[u3].raw = this._wrapLogFn(D2, true);
        }
        this._mockFn && this.mockTypes(), this._lastLogSerialized = void 0, this._lastLog = void 0, this._lastLogTime = void 0, this._lastLogCount = 0, this._throttleTimeout = void 0;
      }
      get stdout() {
        return this._stdout || console._stdout;
      }
      get stderr() {
        return this._stderr || console._stderr;
      }
      create(u2) {
        return new _(Object.assign({ reporters: this._reporters, level: this.level, types: this._types, defaults: this._defaults, stdout: this._stdout, stderr: this._stderr, mockFn: this._mockFn }, u2));
      }
      withDefaults(u2) {
        return this.create({ defaults: Object.assign({}, this._defaults, u2) });
      }
      withTag(u2) {
        return this.withDefaults({ tag: this._defaults.tag ? this._defaults.tag + ":" + u2 : u2 });
      }
      addReporter(u2) {
        return this._reporters.push(u2), this;
      }
      removeReporter(u2) {
        if (u2) {
          const D2 = this._reporters.indexOf(u2);
          if (D2 >= 0)
            return this._reporters.splice(D2, 1);
        } else
          this._reporters.splice(0);
        return this;
      }
      setReporters(u2) {
        return this._reporters = Array.isArray(u2) ? u2 : [u2], this;
      }
      wrapAll() {
        this.wrapConsole(), this.wrapStd();
      }
      restoreAll() {
        this.restoreConsole(), this.restoreStd();
      }
      wrapConsole() {
        for (const u2 in this._types)
          console["__" + u2] || (console["__" + u2] = console[u2]), console[u2] = this[u2].raw;
      }
      restoreConsole() {
        for (const u2 in this._types)
          console["__" + u2] && (console[u2] = console["__" + u2], delete console["__" + u2]);
      }
      wrapStd() {
        this._wrapStream(this.stdout, "log"), this._wrapStream(this.stderr, "log");
      }
      _wrapStream(u2, D2) {
        u2 && (u2.__write || (u2.__write = u2.write), u2.write = (u3) => {
          this[D2].raw(String(u3).trim());
        });
      }
      restoreStd() {
        this._restoreStream(this.stdout), this._restoreStream(this.stderr);
      }
      _restoreStream(u2) {
        u2 && u2.__write && (u2.write = u2.__write, delete u2.__write);
      }
      pauseLogs() {
        B = true;
      }
      resumeLogs() {
        B = false;
        const u2 = v.splice(0);
        for (const D2 of u2)
          D2[0]._logFn(D2[1], D2[2]);
      }
      mockTypes(u2) {
        if (this._mockFn = u2 || this._mockFn, typeof this._mockFn == "function")
          for (const u3 in this._types)
            this[u3] = this._mockFn(u3, this._types[u3]) || this[u3], this[u3].raw = this[u3];
      }
      _wrapLogFn(u2, D2) {
        return (...e2) => {
          if (!B)
            return this._logFn(u2, e2, D2);
          v.push([this, u2, e2, D2]);
        };
      }
      _logFn(u2, D2, e2) {
        if (u2.level > this.level)
          return !!this._async && Promise.resolve(false);
        const t2 = Object.assign({ date: new Date(), args: [] }, u2);
        !e2 && D2.length === 1 && y(D2[0]) ? Object.assign(t2, D2[0]) : t2.args = Array.from(D2), t2.message && (t2.args.unshift(t2.message), delete t2.message), t2.additional && (Array.isArray(t2.additional) || (t2.additional = t2.additional.split("\n")), t2.args.push("\n" + t2.additional.join("\n")), delete t2.additional), t2.type = typeof t2.type == "string" ? t2.type.toLowerCase() : "", t2.tag = typeof t2.tag == "string" ? t2.tag.toLowerCase() : "";
        const r2 = (u3 = false) => {
          const D3 = this._lastLogCount - this._throttleMin;
          if (this._lastLog && D3 > 0) {
            const u4 = [...this._lastLog.args];
            D3 > 1 && u4.push(`(repeated ${D3} times)`), this._log(__spreadProps(__spreadValues({}, this._lastLog), { args: u4 })), this._lastLogCount = 1;
          }
          if (u3) {
            if (this._lastLog = t2, this._async)
              return this._logAsync(t2);
            this._log(t2);
          }
        };
        clearTimeout(this._throttleTimeout);
        const n2 = this._lastLogTime ? t2.date - this._lastLogTime : 0;
        if (this._lastLogTime = t2.date, n2 < this._throttle)
          try {
            const u3 = JSON.stringify([t2.type, t2.tag, t2.args]), D3 = this._lastLogSerialized === u3;
            if (this._lastLogSerialized = u3, D3 && (this._lastLogCount++, this._lastLogCount > this._throttleMin))
              return void (this._throttleTimeout = setTimeout(r2, this._throttle));
          } catch (u3) {
          }
        r2(true);
      }
      _log(u2) {
        for (const D2 of this._reporters)
          D2.log(u2, { async: false, stdout: this.stdout, stderr: this.stderr });
      }
      _logAsync(u2) {
        return Promise.all(this._reporters.map((D2) => D2.log(u2, { async: true, stdout: this.stdout, stderr: this.stderr })));
      }
    };
    function A(u2) {
      const D2 = process.cwd() + e.sep;
      return u2.split("\n").splice(1).map((u3) => u3.trim().replace("file://", "").replace(D2, ""));
    }
    _.prototype.add = _.prototype.addReporter, _.prototype.remove = _.prototype.removeReporter, _.prototype.clear = _.prototype.removeReporter, _.prototype.withScope = _.prototype.withTag, _.prototype.mock = _.prototype.mockTypes, _.prototype.pause = _.prototype.pauseLogs, _.prototype.resume = _.prototype.resumeLogs;
    var w = s(function(u2, D2) {
      u2.exports = function() {
        var u3 = "millisecond", D3 = "second", e2 = "minute", t2 = "hour", r2 = "day", n2 = "week", s2 = "month", o2 = "quarter", i2 = "year", a2 = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/, l2 = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, c2 = function(u4, D4, e3) {
          var t3 = String(u4);
          return !t3 || t3.length >= D4 ? u4 : "" + Array(D4 + 1 - t3.length).join(e3) + u4;
        }, h2 = { s: c2, z: function(u4) {
          var D4 = -u4.utcOffset(), e3 = Math.abs(D4), t3 = Math.floor(e3 / 60), r3 = e3 % 60;
          return (D4 <= 0 ? "+" : "-") + c2(t3, 2, "0") + ":" + c2(r3, 2, "0");
        }, m: function(u4, D4) {
          var e3 = 12 * (D4.year() - u4.year()) + (D4.month() - u4.month()), t3 = u4.clone().add(e3, s2), r3 = D4 - t3 < 0, n3 = u4.clone().add(e3 + (r3 ? -1 : 1), s2);
          return Number(-(e3 + (D4 - t3) / (r3 ? t3 - n3 : n3 - t3)) || 0);
        }, a: function(u4) {
          return u4 < 0 ? Math.ceil(u4) || 0 : Math.floor(u4);
        }, p: function(a3) {
          return { M: s2, y: i2, w: n2, d: r2, D: "date", h: t2, m: e2, s: D3, ms: u3, Q: o2 }[a3] || String(a3 || "").toLowerCase().replace(/s$/, "");
        }, u: function(u4) {
          return u4 === void 0;
        } }, F2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, C2 = "en", f2 = {};
        f2[C2] = F2;
        var E2 = function(u4) {
          return u4 instanceof m2;
        }, g2 = function(u4, D4, e3) {
          var t3;
          if (!u4)
            return C2;
          if (typeof u4 == "string")
            f2[u4] && (t3 = u4), D4 && (f2[u4] = D4, t3 = u4);
          else {
            var r3 = u4.name;
            f2[r3] = u4, t3 = r3;
          }
          return !e3 && t3 && (C2 = t3), t3 || !e3 && C2;
        }, d2 = function(u4, D4) {
          if (E2(u4))
            return u4.clone();
          var e3 = typeof D4 == "object" ? D4 : {};
          return e3.date = u4, e3.args = arguments, new m2(e3);
        }, p2 = h2;
        p2.l = g2, p2.i = E2, p2.w = function(u4, D4) {
          return d2(u4, { locale: D4.$L, utc: D4.$u, $offset: D4.$offset });
        };
        var m2 = function() {
          function c3(u4) {
            this.$L = this.$L || g2(u4.locale, null, true), this.parse(u4);
          }
          var h3 = c3.prototype;
          return h3.parse = function(u4) {
            this.$d = function(u5) {
              var D4 = u5.date, e3 = u5.utc;
              if (D4 === null)
                return new Date(NaN);
              if (p2.u(D4))
                return new Date();
              if (D4 instanceof Date)
                return new Date(D4);
              if (typeof D4 == "string" && !/Z$/i.test(D4)) {
                var t3 = D4.match(a2);
                if (t3)
                  return e3 ? new Date(Date.UTC(t3[1], t3[2] - 1, t3[3] || 1, t3[4] || 0, t3[5] || 0, t3[6] || 0, t3[7] || 0)) : new Date(t3[1], t3[2] - 1, t3[3] || 1, t3[4] || 0, t3[5] || 0, t3[6] || 0, t3[7] || 0);
              }
              return new Date(D4);
            }(u4), this.init();
          }, h3.init = function() {
            var u4 = this.$d;
            this.$y = u4.getFullYear(), this.$M = u4.getMonth(), this.$D = u4.getDate(), this.$W = u4.getDay(), this.$H = u4.getHours(), this.$m = u4.getMinutes(), this.$s = u4.getSeconds(), this.$ms = u4.getMilliseconds();
          }, h3.$utils = function() {
            return p2;
          }, h3.isValid = function() {
            return !(this.$d.toString() === "Invalid Date");
          }, h3.isSame = function(u4, D4) {
            var e3 = d2(u4);
            return this.startOf(D4) <= e3 && e3 <= this.endOf(D4);
          }, h3.isAfter = function(u4, D4) {
            return d2(u4) < this.startOf(D4);
          }, h3.isBefore = function(u4, D4) {
            return this.endOf(D4) < d2(u4);
          }, h3.$g = function(u4, D4, e3) {
            return p2.u(u4) ? this[D4] : this.set(e3, u4);
          }, h3.year = function(u4) {
            return this.$g(u4, "$y", i2);
          }, h3.month = function(u4) {
            return this.$g(u4, "$M", s2);
          }, h3.day = function(u4) {
            return this.$g(u4, "$W", r2);
          }, h3.date = function(u4) {
            return this.$g(u4, "$D", "date");
          }, h3.hour = function(u4) {
            return this.$g(u4, "$H", t2);
          }, h3.minute = function(u4) {
            return this.$g(u4, "$m", e2);
          }, h3.second = function(u4) {
            return this.$g(u4, "$s", D3);
          }, h3.millisecond = function(D4) {
            return this.$g(D4, "$ms", u3);
          }, h3.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, h3.valueOf = function() {
            return this.$d.getTime();
          }, h3.startOf = function(u4, o3) {
            var a3 = this, l3 = !!p2.u(o3) || o3, c4 = p2.p(u4), h4 = function(u5, D4) {
              var e3 = p2.w(a3.$u ? Date.UTC(a3.$y, D4, u5) : new Date(a3.$y, D4, u5), a3);
              return l3 ? e3 : e3.endOf(r2);
            }, F3 = function(u5, D4) {
              return p2.w(a3.toDate()[u5].apply(a3.toDate("s"), (l3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(D4)), a3);
            }, C3 = this.$W, f3 = this.$M, E3 = this.$D, g3 = "set" + (this.$u ? "UTC" : "");
            switch (c4) {
              case i2:
                return l3 ? h4(1, 0) : h4(31, 11);
              case s2:
                return l3 ? h4(1, f3) : h4(0, f3 + 1);
              case n2:
                var d3 = this.$locale().weekStart || 0, m3 = (C3 < d3 ? C3 + 7 : C3) - d3;
                return h4(l3 ? E3 - m3 : E3 + (6 - m3), f3);
              case r2:
              case "date":
                return F3(g3 + "Hours", 0);
              case t2:
                return F3(g3 + "Minutes", 1);
              case e2:
                return F3(g3 + "Seconds", 2);
              case D3:
                return F3(g3 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, h3.endOf = function(u4) {
            return this.startOf(u4, false);
          }, h3.$set = function(n3, o3) {
            var a3, l3 = p2.p(n3), c4 = "set" + (this.$u ? "UTC" : ""), h4 = (a3 = {}, a3.day = c4 + "Date", a3.date = c4 + "Date", a3[s2] = c4 + "Month", a3[i2] = c4 + "FullYear", a3[t2] = c4 + "Hours", a3[e2] = c4 + "Minutes", a3[D3] = c4 + "Seconds", a3[u3] = c4 + "Milliseconds", a3)[l3], F3 = l3 === r2 ? this.$D + (o3 - this.$W) : o3;
            if (l3 === s2 || l3 === i2) {
              var C3 = this.clone().set("date", 1);
              C3.$d[h4](F3), C3.init(), this.$d = C3.set("date", Math.min(this.$D, C3.daysInMonth())).toDate();
            } else
              h4 && this.$d[h4](F3);
            return this.init(), this;
          }, h3.set = function(u4, D4) {
            return this.clone().$set(u4, D4);
          }, h3.get = function(u4) {
            return this[p2.p(u4)]();
          }, h3.add = function(u4, o3) {
            var a3, l3 = this;
            u4 = Number(u4);
            var c4 = p2.p(o3), h4 = function(D4) {
              var e3 = d2(l3);
              return p2.w(e3.date(e3.date() + Math.round(D4 * u4)), l3);
            };
            if (c4 === s2)
              return this.set(s2, this.$M + u4);
            if (c4 === i2)
              return this.set(i2, this.$y + u4);
            if (c4 === r2)
              return h4(1);
            if (c4 === n2)
              return h4(7);
            var F3 = (a3 = {}, a3[e2] = 6e4, a3[t2] = 36e5, a3[D3] = 1e3, a3)[c4] || 1, C3 = this.$d.getTime() + u4 * F3;
            return p2.w(C3, this);
          }, h3.subtract = function(u4, D4) {
            return this.add(-1 * u4, D4);
          }, h3.format = function(u4) {
            var D4 = this;
            if (!this.isValid())
              return "Invalid Date";
            var e3 = u4 || "YYYY-MM-DDTHH:mm:ssZ", t3 = p2.z(this), r3 = this.$locale(), n3 = this.$H, s3 = this.$m, o3 = this.$M, i3 = r3.weekdays, a3 = r3.months, c4 = function(u5, t4, r4, n4) {
              return u5 && (u5[t4] || u5(D4, e3)) || r4[t4].substr(0, n4);
            }, h4 = function(u5) {
              return p2.s(n3 % 12 || 12, u5, "0");
            }, F3 = r3.meridiem || function(u5, D5, e4) {
              var t4 = u5 < 12 ? "AM" : "PM";
              return e4 ? t4.toLowerCase() : t4;
            }, C3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: o3 + 1, MM: p2.s(o3 + 1, 2, "0"), MMM: c4(r3.monthsShort, o3, a3, 3), MMMM: c4(a3, o3), D: this.$D, DD: p2.s(this.$D, 2, "0"), d: String(this.$W), dd: c4(r3.weekdaysMin, this.$W, i3, 2), ddd: c4(r3.weekdaysShort, this.$W, i3, 3), dddd: i3[this.$W], H: String(n3), HH: p2.s(n3, 2, "0"), h: h4(1), hh: h4(2), a: F3(n3, s3, true), A: F3(n3, s3, false), m: String(s3), mm: p2.s(s3, 2, "0"), s: String(this.$s), ss: p2.s(this.$s, 2, "0"), SSS: p2.s(this.$ms, 3, "0"), Z: t3 };
            return e3.replace(l2, function(u5, D5) {
              return D5 || C3[u5] || t3.replace(":", "");
            });
          }, h3.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, h3.diff = function(u4, r3, a3) {
            var l3, c4 = p2.p(r3), h4 = d2(u4), F3 = 6e4 * (h4.utcOffset() - this.utcOffset()), C3 = this - h4, f3 = p2.m(this, h4);
            return f3 = (l3 = {}, l3[i2] = f3 / 12, l3[s2] = f3, l3[o2] = f3 / 3, l3[n2] = (C3 - F3) / 6048e5, l3.day = (C3 - F3) / 864e5, l3[t2] = C3 / 36e5, l3[e2] = C3 / 6e4, l3[D3] = C3 / 1e3, l3)[c4] || C3, a3 ? f3 : p2.a(f3);
          }, h3.daysInMonth = function() {
            return this.endOf(s2).$D;
          }, h3.$locale = function() {
            return f2[this.$L];
          }, h3.locale = function(u4, D4) {
            if (!u4)
              return this.$L;
            var e3 = this.clone(), t3 = g2(u4, D4, true);
            return t3 && (e3.$L = t3), e3;
          }, h3.clone = function() {
            return p2.w(this.$d, this);
          }, h3.toDate = function() {
            return new Date(this.valueOf());
          }, h3.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, h3.toISOString = function() {
            return this.$d.toISOString();
          }, h3.toString = function() {
            return this.$d.toUTCString();
          }, c3;
        }();
        return d2.prototype = m2.prototype, d2.extend = function(u4, D4) {
          return u4(D4, m2, d2), d2;
        }, d2.locale = g2, d2.isDayjs = E2, d2.unix = function(u4) {
          return d2(1e3 * u4);
        }, d2.en = f2[C2], d2.Ls = f2, d2;
      }();
    });
    var O = { dateFormat: "HH:mm:ss", formatOptions: { date: true, colors: false, compact: true } };
    var M = (u2) => u2 ? `[${u2}]` : "";
    var S = class {
      constructor(u2) {
        this.options = Object.assign({}, O, u2);
      }
      formatStack(u2) {
        return "  " + A(u2).join("\n  ");
      }
      formatArgs(u2) {
        const e2 = u2.map((u3) => u3 && typeof u3.stack == "string" ? u3.message + "\n" + this.formatStack(u3.stack) : u3);
        return typeof D.formatWithOptions == "function" ? D.formatWithOptions(this.options.formatOptions, ...e2) : D.format(...e2);
      }
      formatDate(u2) {
        return this.options.formatOptions.date ? function(u3, D2) {
          return w(D2).format(u3);
        }(this.options.dateFormat, u2) : "";
      }
      filterAndJoin(u2) {
        return u2.filter((u3) => u3).join(" ");
      }
      formatLogObj(u2) {
        const D2 = this.formatArgs(u2.args);
        return this.filterAndJoin([M(u2.type), M(u2.tag), D2]);
      }
      log(u2, { async: D2, stdout: e2, stderr: r2 } = {}) {
        return function(u3, D3, e3 = "default") {
          const r3 = D3.__write || D3.write;
          switch (e3) {
            case "async":
              return new Promise((e4) => {
                r3.call(D3, u3) === true ? e4() : D3.once("drain", () => {
                  e4();
                });
              });
            case "sync":
              return t.writeSync(D3.fd, u3);
            default:
              return r3.call(D3, u3);
          }
        }(this.formatLogObj(u2, { width: e2.columns || 0 }) + "\n", u2.level < 2 ? r2 : e2, D2 ? "async" : "default");
      }
    };
    var I = (u2) => typeof u2 == "string" ? u2.replace((({ onlyFirst: u3 = false } = {}) => {
      const D2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
      return new RegExp(D2, u3 ? void 0 : "g");
    })(), "") : u2;
    var k = (u2) => !Number.isNaN(u2) && (u2 >= 4352 && (u2 <= 4447 || u2 === 9001 || u2 === 9002 || 11904 <= u2 && u2 <= 12871 && u2 !== 12351 || 12880 <= u2 && u2 <= 19903 || 19968 <= u2 && u2 <= 42182 || 43360 <= u2 && u2 <= 43388 || 44032 <= u2 && u2 <= 55203 || 63744 <= u2 && u2 <= 64255 || 65040 <= u2 && u2 <= 65049 || 65072 <= u2 && u2 <= 65131 || 65281 <= u2 && u2 <= 65376 || 65504 <= u2 && u2 <= 65510 || 110592 <= u2 && u2 <= 110593 || 127488 <= u2 && u2 <= 127569 || 131072 <= u2 && u2 <= 262141));
    var R = k;
    var T = k;
    R.default = T;
    var L = (u2) => {
      if (typeof (u2 = u2.replace(/\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g, "  ")) != "string" || u2.length === 0)
        return 0;
      u2 = I(u2);
      let D2 = 0;
      for (let e2 = 0; e2 < u2.length; e2++) {
        const t2 = u2.codePointAt(e2);
        t2 <= 31 || t2 >= 127 && t2 <= 159 || (t2 >= 768 && t2 <= 879 || (t2 > 65535 && e2++, D2 += R(t2) ? 2 : 1));
      }
      return D2;
    };
    var $ = L;
    var x = L;
    $.default = x;
    var U = /[|\\{}()[\]^$+*?.]/g;
    var j = function(u2) {
      if (typeof u2 != "string")
        throw new TypeError("Expected a string");
      return u2.replace(U, "\\$&");
    };
    var { platform: P } = process;
    var N = { tick: "\u2714", cross: "\u2716", star: "\u2605", square: "\u2587", squareSmall: "\u25FB", squareSmallFilled: "\u25FC", play: "\u25B6", circle: "\u25EF", circleFilled: "\u25C9", circleDotted: "\u25CC", circleDouble: "\u25CE", circleCircle: "\u24DE", circleCross: "\u24E7", circlePipe: "\u24BE", circleQuestionMark: "?\u20DD", bullet: "\u25CF", dot: "\u2024", line: "\u2500", ellipsis: "\u2026", pointer: "\u276F", pointerSmall: "\u203A", info: "\u2139", warning: "\u26A0", hamburger: "\u2630", smiley: "\u32E1", mustache: "\u0DF4", heart: "\u2665", nodejs: "\u2B22", arrowUp: "\u2191", arrowDown: "\u2193", arrowLeft: "\u2190", arrowRight: "\u2192", radioOn: "\u25C9", radioOff: "\u25EF", checkboxOn: "\u2612", checkboxOff: "\u2610", checkboxCircleOn: "\u24E7", checkboxCircleOff: "\u24BE", questionMarkPrefix: "?\u20DD", oneHalf: "\xBD", oneThird: "\u2153", oneQuarter: "\xBC", oneFifth: "\u2155", oneSixth: "\u2159", oneSeventh: "\u2150", oneEighth: "\u215B", oneNinth: "\u2151", oneTenth: "\u2152", twoThirds: "\u2154", twoFifths: "\u2156", threeQuarters: "\xBE", threeFifths: "\u2157", threeEighths: "\u215C", fourFifths: "\u2158", fiveSixths: "\u215A", fiveEighths: "\u215D", sevenEighths: "\u215E" };
    var q = { tick: "\u221A", cross: "\xD7", star: "*", square: "\u2588", squareSmall: "[ ]", squareSmallFilled: "[\u2588]", play: "\u25BA", circle: "( )", circleFilled: "(*)", circleDotted: "( )", circleDouble: "( )", circleCircle: "(\u25CB)", circleCross: "(\xD7)", circlePipe: "(\u2502)", circleQuestionMark: "(?)", bullet: "*", dot: ".", line: "\u2500", ellipsis: "...", pointer: ">", pointerSmall: "\xBB", info: "i", warning: "\u203C", hamburger: "\u2261", smiley: "\u263A", mustache: "\u250C\u2500\u2510", heart: N.heart, nodejs: "\u2666", arrowUp: N.arrowUp, arrowDown: N.arrowDown, arrowLeft: N.arrowLeft, arrowRight: N.arrowRight, radioOn: "(*)", radioOff: "( )", checkboxOn: "[\xD7]", checkboxOff: "[ ]", checkboxCircleOn: "(\xD7)", checkboxCircleOff: "( )", questionMarkPrefix: "\uFF1F", oneHalf: "1/2", oneThird: "1/3", oneQuarter: "1/4", oneFifth: "1/5", oneSixth: "1/6", oneSeventh: "1/7", oneEighth: "1/8", oneNinth: "1/9", oneTenth: "1/10", twoThirds: "2/3", twoFifths: "2/5", threeQuarters: "3/4", threeFifths: "3/5", threeEighths: "3/8", fourFifths: "4/5", fiveSixths: "5/6", fiveEighths: "5/8", sevenEighths: "7/8" };
    P === "linux" && (N.questionMarkPrefix = "?");
    var Y = P === "win32" ? q : N;
    var H = Object.assign((u2) => {
      if (Y === N)
        return u2;
      for (const [D2, e2] of Object.entries(N))
        e2 !== Y[D2] && (u2 = u2.replace(new RegExp(j(e2), "g"), Y[D2]));
      return u2;
    }, Y);
    var V = N;
    var W = q;
    H.main = V, H.windows = W;
    var G = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] };
    var z = {};
    for (const u2 of Object.keys(G))
      z[G[u2]] = u2;
    var Q = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
    var J = Q;
    for (const u2 of Object.keys(Q)) {
      if (!("channels" in Q[u2]))
        throw new Error("missing channels property: " + u2);
      if (!("labels" in Q[u2]))
        throw new Error("missing channel labels property: " + u2);
      if (Q[u2].labels.length !== Q[u2].channels)
        throw new Error("channel and label counts mismatch: " + u2);
      const { channels: D2, labels: e2 } = Q[u2];
      delete Q[u2].channels, delete Q[u2].labels, Object.defineProperty(Q[u2], "channels", { value: D2 }), Object.defineProperty(Q[u2], "labels", { value: e2 });
    }
    function K(u2) {
      const D2 = function() {
        const u3 = {}, D3 = Object.keys(J);
        for (let e3 = D3.length, t2 = 0; t2 < e3; t2++)
          u3[D3[t2]] = { distance: -1, parent: null };
        return u3;
      }(), e2 = [u2];
      for (D2[u2].distance = 0; e2.length; ) {
        const u3 = e2.pop(), t2 = Object.keys(J[u3]);
        for (let r2 = t2.length, n2 = 0; n2 < r2; n2++) {
          const r3 = t2[n2], s2 = D2[r3];
          s2.distance === -1 && (s2.distance = D2[u3].distance + 1, s2.parent = u3, e2.unshift(r3));
        }
      }
      return D2;
    }
    function Z(u2, D2) {
      return function(e2) {
        return D2(u2(e2));
      };
    }
    function X(u2, D2) {
      const e2 = [D2[u2].parent, u2];
      let t2 = J[D2[u2].parent][u2], r2 = D2[u2].parent;
      for (; D2[r2].parent; )
        e2.unshift(D2[r2].parent), t2 = Z(J[D2[r2].parent][r2], t2), r2 = D2[r2].parent;
      return t2.conversion = e2, t2;
    }
    Q.rgb.hsl = function(u2) {
      const D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255, r2 = Math.min(D2, e2, t2), n2 = Math.max(D2, e2, t2), s2 = n2 - r2;
      let o2, i2;
      n2 === r2 ? o2 = 0 : D2 === n2 ? o2 = (e2 - t2) / s2 : e2 === n2 ? o2 = 2 + (t2 - D2) / s2 : t2 === n2 && (o2 = 4 + (D2 - e2) / s2), o2 = Math.min(60 * o2, 360), o2 < 0 && (o2 += 360);
      const a2 = (r2 + n2) / 2;
      return i2 = n2 === r2 ? 0 : a2 <= 0.5 ? s2 / (n2 + r2) : s2 / (2 - n2 - r2), [o2, 100 * i2, 100 * a2];
    }, Q.rgb.hsv = function(u2) {
      let D2, e2, t2, r2, n2;
      const s2 = u2[0] / 255, o2 = u2[1] / 255, i2 = u2[2] / 255, a2 = Math.max(s2, o2, i2), l2 = a2 - Math.min(s2, o2, i2), c2 = function(u3) {
        return (a2 - u3) / 6 / l2 + 0.5;
      };
      return l2 === 0 ? (r2 = 0, n2 = 0) : (n2 = l2 / a2, D2 = c2(s2), e2 = c2(o2), t2 = c2(i2), s2 === a2 ? r2 = t2 - e2 : o2 === a2 ? r2 = 1 / 3 + D2 - t2 : i2 === a2 && (r2 = 2 / 3 + e2 - D2), r2 < 0 ? r2 += 1 : r2 > 1 && (r2 -= 1)), [360 * r2, 100 * n2, 100 * a2];
    }, Q.rgb.hwb = function(u2) {
      const D2 = u2[0], e2 = u2[1];
      let t2 = u2[2];
      const r2 = Q.rgb.hsl(u2)[0], n2 = 1 / 255 * Math.min(D2, Math.min(e2, t2));
      return t2 = 1 - 1 / 255 * Math.max(D2, Math.max(e2, t2)), [r2, 100 * n2, 100 * t2];
    }, Q.rgb.cmyk = function(u2) {
      const D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255, r2 = Math.min(1 - D2, 1 - e2, 1 - t2);
      return [100 * ((1 - D2 - r2) / (1 - r2) || 0), 100 * ((1 - e2 - r2) / (1 - r2) || 0), 100 * ((1 - t2 - r2) / (1 - r2) || 0), 100 * r2];
    }, Q.rgb.keyword = function(u2) {
      const D2 = z[u2];
      if (D2)
        return D2;
      let e2, t2 = 1 / 0;
      for (const D3 of Object.keys(G)) {
        const s2 = (n2 = G[D3], ((r2 = u2)[0] - n2[0]) ** 2 + (r2[1] - n2[1]) ** 2 + (r2[2] - n2[2]) ** 2);
        s2 < t2 && (t2 = s2, e2 = D3);
      }
      var r2, n2;
      return e2;
    }, Q.keyword.rgb = function(u2) {
      return G[u2];
    }, Q.rgb.xyz = function(u2) {
      let D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255;
      D2 = D2 > 0.04045 ? ((D2 + 0.055) / 1.055) ** 2.4 : D2 / 12.92, e2 = e2 > 0.04045 ? ((e2 + 0.055) / 1.055) ** 2.4 : e2 / 12.92, t2 = t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92;
      return [100 * (0.4124 * D2 + 0.3576 * e2 + 0.1805 * t2), 100 * (0.2126 * D2 + 0.7152 * e2 + 0.0722 * t2), 100 * (0.0193 * D2 + 0.1192 * e2 + 0.9505 * t2)];
    }, Q.rgb.lab = function(u2) {
      const D2 = Q.rgb.xyz(u2);
      let e2 = D2[0], t2 = D2[1], r2 = D2[2];
      e2 /= 95.047, t2 /= 100, r2 /= 108.883, e2 = e2 > 8856e-6 ? e2 ** (1 / 3) : 7.787 * e2 + 16 / 116, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116;
      return [116 * t2 - 16, 500 * (e2 - t2), 200 * (t2 - r2)];
    }, Q.hsl.rgb = function(u2) {
      const D2 = u2[0] / 360, e2 = u2[1] / 100, t2 = u2[2] / 100;
      let r2, n2, s2;
      if (e2 === 0)
        return s2 = 255 * t2, [s2, s2, s2];
      r2 = t2 < 0.5 ? t2 * (1 + e2) : t2 + e2 - t2 * e2;
      const o2 = 2 * t2 - r2, i2 = [0, 0, 0];
      for (let u3 = 0; u3 < 3; u3++)
        n2 = D2 + 1 / 3 * -(u3 - 1), n2 < 0 && n2++, n2 > 1 && n2--, s2 = 6 * n2 < 1 ? o2 + 6 * (r2 - o2) * n2 : 2 * n2 < 1 ? r2 : 3 * n2 < 2 ? o2 + (r2 - o2) * (2 / 3 - n2) * 6 : o2, i2[u3] = 255 * s2;
      return i2;
    }, Q.hsl.hsv = function(u2) {
      const D2 = u2[0];
      let e2 = u2[1] / 100, t2 = u2[2] / 100, r2 = e2;
      const n2 = Math.max(t2, 0.01);
      t2 *= 2, e2 *= t2 <= 1 ? t2 : 2 - t2, r2 *= n2 <= 1 ? n2 : 2 - n2;
      return [D2, 100 * (t2 === 0 ? 2 * r2 / (n2 + r2) : 2 * e2 / (t2 + e2)), 100 * ((t2 + e2) / 2)];
    }, Q.hsv.rgb = function(u2) {
      const D2 = u2[0] / 60, e2 = u2[1] / 100;
      let t2 = u2[2] / 100;
      const r2 = Math.floor(D2) % 6, n2 = D2 - Math.floor(D2), s2 = 255 * t2 * (1 - e2), o2 = 255 * t2 * (1 - e2 * n2), i2 = 255 * t2 * (1 - e2 * (1 - n2));
      switch (t2 *= 255, r2) {
        case 0:
          return [t2, i2, s2];
        case 1:
          return [o2, t2, s2];
        case 2:
          return [s2, t2, i2];
        case 3:
          return [s2, o2, t2];
        case 4:
          return [i2, s2, t2];
        case 5:
          return [t2, s2, o2];
      }
    }, Q.hsv.hsl = function(u2) {
      const D2 = u2[0], e2 = u2[1] / 100, t2 = u2[2] / 100, r2 = Math.max(t2, 0.01);
      let n2, s2;
      s2 = (2 - e2) * t2;
      const o2 = (2 - e2) * r2;
      return n2 = e2 * r2, n2 /= o2 <= 1 ? o2 : 2 - o2, n2 = n2 || 0, s2 /= 2, [D2, 100 * n2, 100 * s2];
    }, Q.hwb.rgb = function(u2) {
      const D2 = u2[0] / 360;
      let e2 = u2[1] / 100, t2 = u2[2] / 100;
      const r2 = e2 + t2;
      let n2;
      r2 > 1 && (e2 /= r2, t2 /= r2);
      const s2 = Math.floor(6 * D2), o2 = 1 - t2;
      n2 = 6 * D2 - s2, (1 & s2) != 0 && (n2 = 1 - n2);
      const i2 = e2 + n2 * (o2 - e2);
      let a2, l2, c2;
      switch (s2) {
        default:
        case 6:
        case 0:
          a2 = o2, l2 = i2, c2 = e2;
          break;
        case 1:
          a2 = i2, l2 = o2, c2 = e2;
          break;
        case 2:
          a2 = e2, l2 = o2, c2 = i2;
          break;
        case 3:
          a2 = e2, l2 = i2, c2 = o2;
          break;
        case 4:
          a2 = i2, l2 = e2, c2 = o2;
          break;
        case 5:
          a2 = o2, l2 = e2, c2 = i2;
      }
      return [255 * a2, 255 * l2, 255 * c2];
    }, Q.cmyk.rgb = function(u2) {
      const D2 = u2[0] / 100, e2 = u2[1] / 100, t2 = u2[2] / 100, r2 = u2[3] / 100;
      return [255 * (1 - Math.min(1, D2 * (1 - r2) + r2)), 255 * (1 - Math.min(1, e2 * (1 - r2) + r2)), 255 * (1 - Math.min(1, t2 * (1 - r2) + r2))];
    }, Q.xyz.rgb = function(u2) {
      const D2 = u2[0] / 100, e2 = u2[1] / 100, t2 = u2[2] / 100;
      let r2, n2, s2;
      return r2 = 3.2406 * D2 + -1.5372 * e2 + -0.4986 * t2, n2 = -0.9689 * D2 + 1.8758 * e2 + 0.0415 * t2, s2 = 0.0557 * D2 + -0.204 * e2 + 1.057 * t2, r2 = r2 > 31308e-7 ? 1.055 * r2 ** (1 / 2.4) - 0.055 : 12.92 * r2, n2 = n2 > 31308e-7 ? 1.055 * n2 ** (1 / 2.4) - 0.055 : 12.92 * n2, s2 = s2 > 31308e-7 ? 1.055 * s2 ** (1 / 2.4) - 0.055 : 12.92 * s2, r2 = Math.min(Math.max(0, r2), 1), n2 = Math.min(Math.max(0, n2), 1), s2 = Math.min(Math.max(0, s2), 1), [255 * r2, 255 * n2, 255 * s2];
    }, Q.xyz.lab = function(u2) {
      let D2 = u2[0], e2 = u2[1], t2 = u2[2];
      D2 /= 95.047, e2 /= 100, t2 /= 108.883, D2 = D2 > 8856e-6 ? D2 ** (1 / 3) : 7.787 * D2 + 16 / 116, e2 = e2 > 8856e-6 ? e2 ** (1 / 3) : 7.787 * e2 + 16 / 116, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116;
      return [116 * e2 - 16, 500 * (D2 - e2), 200 * (e2 - t2)];
    }, Q.lab.xyz = function(u2) {
      let D2, e2, t2;
      e2 = (u2[0] + 16) / 116, D2 = u2[1] / 500 + e2, t2 = e2 - u2[2] / 200;
      const r2 = e2 ** 3, n2 = D2 ** 3, s2 = t2 ** 3;
      return e2 = r2 > 8856e-6 ? r2 : (e2 - 16 / 116) / 7.787, D2 = n2 > 8856e-6 ? n2 : (D2 - 16 / 116) / 7.787, t2 = s2 > 8856e-6 ? s2 : (t2 - 16 / 116) / 7.787, D2 *= 95.047, e2 *= 100, t2 *= 108.883, [D2, e2, t2];
    }, Q.lab.lch = function(u2) {
      const D2 = u2[0], e2 = u2[1], t2 = u2[2];
      let r2;
      r2 = 360 * Math.atan2(t2, e2) / 2 / Math.PI, r2 < 0 && (r2 += 360);
      return [D2, Math.sqrt(e2 * e2 + t2 * t2), r2];
    }, Q.lch.lab = function(u2) {
      const D2 = u2[0], e2 = u2[1], t2 = u2[2] / 360 * 2 * Math.PI;
      return [D2, e2 * Math.cos(t2), e2 * Math.sin(t2)];
    }, Q.rgb.ansi16 = function(u2, D2 = null) {
      const [e2, t2, r2] = u2;
      let n2 = D2 === null ? Q.rgb.hsv(u2)[2] : D2;
      if (n2 = Math.round(n2 / 50), n2 === 0)
        return 30;
      let s2 = 30 + (Math.round(r2 / 255) << 2 | Math.round(t2 / 255) << 1 | Math.round(e2 / 255));
      return n2 === 2 && (s2 += 60), s2;
    }, Q.hsv.ansi16 = function(u2) {
      return Q.rgb.ansi16(Q.hsv.rgb(u2), u2[2]);
    }, Q.rgb.ansi256 = function(u2) {
      const D2 = u2[0], e2 = u2[1], t2 = u2[2];
      if (D2 === e2 && e2 === t2)
        return D2 < 8 ? 16 : D2 > 248 ? 231 : Math.round((D2 - 8) / 247 * 24) + 232;
      return 16 + 36 * Math.round(D2 / 255 * 5) + 6 * Math.round(e2 / 255 * 5) + Math.round(t2 / 255 * 5);
    }, Q.ansi16.rgb = function(u2) {
      let D2 = u2 % 10;
      if (D2 === 0 || D2 === 7)
        return u2 > 50 && (D2 += 3.5), D2 = D2 / 10.5 * 255, [D2, D2, D2];
      const e2 = 0.5 * (1 + ~~(u2 > 50));
      return [(1 & D2) * e2 * 255, (D2 >> 1 & 1) * e2 * 255, (D2 >> 2 & 1) * e2 * 255];
    }, Q.ansi256.rgb = function(u2) {
      if (u2 >= 232) {
        const D3 = 10 * (u2 - 232) + 8;
        return [D3, D3, D3];
      }
      let D2;
      u2 -= 16;
      return [Math.floor(u2 / 36) / 5 * 255, Math.floor((D2 = u2 % 36) / 6) / 5 * 255, D2 % 6 / 5 * 255];
    }, Q.rgb.hex = function(u2) {
      const D2 = (((255 & Math.round(u2[0])) << 16) + ((255 & Math.round(u2[1])) << 8) + (255 & Math.round(u2[2]))).toString(16).toUpperCase();
      return "000000".substring(D2.length) + D2;
    }, Q.hex.rgb = function(u2) {
      const D2 = u2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!D2)
        return [0, 0, 0];
      let e2 = D2[0];
      D2[0].length === 3 && (e2 = e2.split("").map((u3) => u3 + u3).join(""));
      const t2 = parseInt(e2, 16);
      return [t2 >> 16 & 255, t2 >> 8 & 255, 255 & t2];
    }, Q.rgb.hcg = function(u2) {
      const D2 = u2[0] / 255, e2 = u2[1] / 255, t2 = u2[2] / 255, r2 = Math.max(Math.max(D2, e2), t2), n2 = Math.min(Math.min(D2, e2), t2), s2 = r2 - n2;
      let o2, i2;
      return o2 = s2 < 1 ? n2 / (1 - s2) : 0, i2 = s2 <= 0 ? 0 : r2 === D2 ? (e2 - t2) / s2 % 6 : r2 === e2 ? 2 + (t2 - D2) / s2 : 4 + (D2 - e2) / s2, i2 /= 6, i2 %= 1, [360 * i2, 100 * s2, 100 * o2];
    }, Q.hsl.hcg = function(u2) {
      const D2 = u2[1] / 100, e2 = u2[2] / 100, t2 = e2 < 0.5 ? 2 * D2 * e2 : 2 * D2 * (1 - e2);
      let r2 = 0;
      return t2 < 1 && (r2 = (e2 - 0.5 * t2) / (1 - t2)), [u2[0], 100 * t2, 100 * r2];
    }, Q.hsv.hcg = function(u2) {
      const D2 = u2[1] / 100, e2 = u2[2] / 100, t2 = D2 * e2;
      let r2 = 0;
      return t2 < 1 && (r2 = (e2 - t2) / (1 - t2)), [u2[0], 100 * t2, 100 * r2];
    }, Q.hcg.rgb = function(u2) {
      const D2 = u2[0] / 360, e2 = u2[1] / 100, t2 = u2[2] / 100;
      if (e2 === 0)
        return [255 * t2, 255 * t2, 255 * t2];
      const r2 = [0, 0, 0], n2 = D2 % 1 * 6, s2 = n2 % 1, o2 = 1 - s2;
      let i2 = 0;
      switch (Math.floor(n2)) {
        case 0:
          r2[0] = 1, r2[1] = s2, r2[2] = 0;
          break;
        case 1:
          r2[0] = o2, r2[1] = 1, r2[2] = 0;
          break;
        case 2:
          r2[0] = 0, r2[1] = 1, r2[2] = s2;
          break;
        case 3:
          r2[0] = 0, r2[1] = o2, r2[2] = 1;
          break;
        case 4:
          r2[0] = s2, r2[1] = 0, r2[2] = 1;
          break;
        default:
          r2[0] = 1, r2[1] = 0, r2[2] = o2;
      }
      return i2 = (1 - e2) * t2, [255 * (e2 * r2[0] + i2), 255 * (e2 * r2[1] + i2), 255 * (e2 * r2[2] + i2)];
    }, Q.hcg.hsv = function(u2) {
      const D2 = u2[1] / 100, e2 = D2 + u2[2] / 100 * (1 - D2);
      let t2 = 0;
      return e2 > 0 && (t2 = D2 / e2), [u2[0], 100 * t2, 100 * e2];
    }, Q.hcg.hsl = function(u2) {
      const D2 = u2[1] / 100, e2 = u2[2] / 100 * (1 - D2) + 0.5 * D2;
      let t2 = 0;
      return e2 > 0 && e2 < 0.5 ? t2 = D2 / (2 * e2) : e2 >= 0.5 && e2 < 1 && (t2 = D2 / (2 * (1 - e2))), [u2[0], 100 * t2, 100 * e2];
    }, Q.hcg.hwb = function(u2) {
      const D2 = u2[1] / 100, e2 = D2 + u2[2] / 100 * (1 - D2);
      return [u2[0], 100 * (e2 - D2), 100 * (1 - e2)];
    }, Q.hwb.hcg = function(u2) {
      const D2 = u2[1] / 100, e2 = 1 - u2[2] / 100, t2 = e2 - D2;
      let r2 = 0;
      return t2 < 1 && (r2 = (e2 - t2) / (1 - t2)), [u2[0], 100 * t2, 100 * r2];
    }, Q.apple.rgb = function(u2) {
      return [u2[0] / 65535 * 255, u2[1] / 65535 * 255, u2[2] / 65535 * 255];
    }, Q.rgb.apple = function(u2) {
      return [u2[0] / 255 * 65535, u2[1] / 255 * 65535, u2[2] / 255 * 65535];
    }, Q.gray.rgb = function(u2) {
      return [u2[0] / 100 * 255, u2[0] / 100 * 255, u2[0] / 100 * 255];
    }, Q.gray.hsl = function(u2) {
      return [0, 0, u2[0]];
    }, Q.gray.hsv = Q.gray.hsl, Q.gray.hwb = function(u2) {
      return [0, 100, u2[0]];
    }, Q.gray.cmyk = function(u2) {
      return [0, 0, 0, u2[0]];
    }, Q.gray.lab = function(u2) {
      return [u2[0], 0, 0];
    }, Q.gray.hex = function(u2) {
      const D2 = 255 & Math.round(u2[0] / 100 * 255), e2 = ((D2 << 16) + (D2 << 8) + D2).toString(16).toUpperCase();
      return "000000".substring(e2.length) + e2;
    }, Q.rgb.gray = function(u2) {
      return [(u2[0] + u2[1] + u2[2]) / 3 / 255 * 100];
    };
    var uu = {};
    Object.keys(J).forEach((u2) => {
      uu[u2] = {}, Object.defineProperty(uu[u2], "channels", { value: J[u2].channels }), Object.defineProperty(uu[u2], "labels", { value: J[u2].labels });
      const D2 = function(u3) {
        const D3 = K(u3), e2 = {}, t2 = Object.keys(D3);
        for (let u4 = t2.length, r2 = 0; r2 < u4; r2++) {
          const u5 = t2[r2];
          D3[u5].parent !== null && (e2[u5] = X(u5, D3));
        }
        return e2;
      }(u2);
      Object.keys(D2).forEach((e2) => {
        const t2 = D2[e2];
        uu[u2][e2] = function(u3) {
          const D3 = function(...D4) {
            const e3 = D4[0];
            if (e3 == null)
              return e3;
            e3.length > 1 && (D4 = e3);
            const t3 = u3(D4);
            if (typeof t3 == "object")
              for (let u4 = t3.length, D5 = 0; D5 < u4; D5++)
                t3[D5] = Math.round(t3[D5]);
            return t3;
          };
          return "conversion" in u3 && (D3.conversion = u3.conversion), D3;
        }(t2), uu[u2][e2].raw = function(u3) {
          const D3 = function(...D4) {
            const e3 = D4[0];
            return e3 == null ? e3 : (e3.length > 1 && (D4 = e3), u3(D4));
          };
          return "conversion" in u3 && (D3.conversion = u3.conversion), D3;
        }(t2);
      });
    });
    var Du = uu;
    var eu = s(function(u2) {
      const D2 = (u3, D3) => (...e3) => `[${u3(...e3) + D3}m`, e2 = (u3, D3) => (...e3) => {
        const t3 = u3(...e3);
        return `[${38 + D3};5;${t3}m`;
      }, t2 = (u3, D3) => (...e3) => {
        const t3 = u3(...e3);
        return `[${38 + D3};2;${t3[0]};${t3[1]};${t3[2]}m`;
      }, r2 = (u3) => u3, n2 = (u3, D3, e3) => [u3, D3, e3], s2 = (u3, D3, e3) => {
        Object.defineProperty(u3, D3, { get: () => {
          const t3 = e3();
          return Object.defineProperty(u3, D3, { value: t3, enumerable: true, configurable: true }), t3;
        }, enumerable: true, configurable: true });
      };
      let o2;
      const i2 = (u3, D3, e3, t3) => {
        o2 === void 0 && (o2 = Du);
        const r3 = t3 ? 10 : 0, n3 = {};
        for (const [t4, s3] of Object.entries(o2)) {
          const o3 = t4 === "ansi16" ? "ansi" : t4;
          t4 === D3 ? n3[o3] = u3(e3, r3) : typeof s3 == "object" && (n3[o3] = u3(s3[D3], r3));
        }
        return n3;
      };
      Object.defineProperty(u2, "exports", { enumerable: true, get: function() {
        const u3 = new Map(), o3 = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
        o3.color.gray = o3.color.blackBright, o3.bgColor.bgGray = o3.bgColor.bgBlackBright, o3.color.grey = o3.color.blackBright, o3.bgColor.bgGrey = o3.bgColor.bgBlackBright;
        for (const [D3, e3] of Object.entries(o3)) {
          for (const [D4, t3] of Object.entries(e3))
            o3[D4] = { open: `[${t3[0]}m`, close: `[${t3[1]}m` }, e3[D4] = o3[D4], u3.set(t3[0], t3[1]);
          Object.defineProperty(o3, D3, { value: e3, enumerable: false });
        }
        return Object.defineProperty(o3, "codes", { value: u3, enumerable: false }), o3.color.close = "[39m", o3.bgColor.close = "[49m", s2(o3.color, "ansi", () => i2(D2, "ansi16", r2, false)), s2(o3.color, "ansi256", () => i2(e2, "ansi256", r2, false)), s2(o3.color, "ansi16m", () => i2(t2, "rgb", n2, false)), s2(o3.bgColor, "ansi", () => i2(D2, "ansi16", r2, true)), s2(o3.bgColor, "ansi256", () => i2(e2, "ansi256", r2, true)), s2(o3.bgColor, "ansi16m", () => i2(t2, "rgb", n2, true)), o3;
      } });
    });
    var tu = (u2, D2 = process.argv) => {
      const e2 = u2.startsWith("-") ? "" : u2.length === 1 ? "-" : "--", t2 = D2.indexOf(e2 + u2), r2 = D2.indexOf("--");
      return t2 !== -1 && (r2 === -1 || t2 < r2);
    };
    var { env: ru } = process;
    var nu;
    function su(u2) {
      return u2 !== 0 && { level: u2, hasBasic: true, has256: u2 >= 2, has16m: u2 >= 3 };
    }
    function ou(u2, D2) {
      if (nu === 0)
        return 0;
      if (tu("color=16m") || tu("color=full") || tu("color=truecolor"))
        return 3;
      if (tu("color=256"))
        return 2;
      if (u2 && !D2 && nu === void 0)
        return 0;
      const e2 = nu || 0;
      if (ru.TERM === "dumb")
        return e2;
      if (process.platform === "win32") {
        const u3 = r.release().split(".");
        return Number(u3[0]) >= 10 && Number(u3[2]) >= 10586 ? Number(u3[2]) >= 14931 ? 3 : 2 : 1;
      }
      if ("CI" in ru)
        return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((u3) => u3 in ru) || ru.CI_NAME === "codeship" ? 1 : e2;
      if ("TEAMCITY_VERSION" in ru)
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(ru.TEAMCITY_VERSION) ? 1 : 0;
      if ("GITHUB_ACTIONS" in ru)
        return 1;
      if (ru.COLORTERM === "truecolor")
        return 3;
      if ("TERM_PROGRAM" in ru) {
        const u3 = parseInt((ru.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (ru.TERM_PROGRAM) {
          case "iTerm.app":
            return u3 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      return /-256(color)?$/i.test(ru.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(ru.TERM) || "COLORTERM" in ru ? 1 : e2;
    }
    tu("no-color") || tu("no-colors") || tu("color=false") || tu("color=never") ? nu = 0 : (tu("color") || tu("colors") || tu("color=true") || tu("color=always")) && (nu = 1), "FORCE_COLOR" in ru && (nu = ru.FORCE_COLOR === "true" ? 1 : ru.FORCE_COLOR === "false" ? 0 : ru.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(ru.FORCE_COLOR, 10), 3));
    var iu = { supportsColor: function(u2) {
      return su(ou(u2, u2 && u2.isTTY));
    }, stdout: su(ou(true, n.isatty(1))), stderr: su(ou(true, n.isatty(2))) };
    var au = { stringReplaceAll: (u2, D2, e2) => {
      let t2 = u2.indexOf(D2);
      if (t2 === -1)
        return u2;
      const r2 = D2.length;
      let n2 = 0, s2 = "";
      do {
        s2 += u2.substr(n2, t2 - n2) + D2 + e2, n2 = t2 + r2, t2 = u2.indexOf(D2, n2);
      } while (t2 !== -1);
      return s2 += u2.substr(n2), s2;
    }, stringEncaseCRLFWithFirstIndex: (u2, D2, e2, t2) => {
      let r2 = 0, n2 = "";
      do {
        const s2 = u2[t2 - 1] === "\r";
        n2 += u2.substr(r2, (s2 ? t2 - 1 : t2) - r2) + D2 + (s2 ? "\r\n" : "\n") + e2, r2 = t2 + 1, t2 = u2.indexOf("\n", r2);
      } while (t2 !== -1);
      return n2 += u2.substr(r2), n2;
    } };
    var lu = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var cu = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var hu = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var Fu = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi;
    var Cu = new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", ""], ["a", "\x07"]]);
    function fu(u2) {
      const D2 = u2[0] === "u", e2 = u2[1] === "{";
      return D2 && !e2 && u2.length === 5 || u2[0] === "x" && u2.length === 3 ? String.fromCharCode(parseInt(u2.slice(1), 16)) : D2 && e2 ? String.fromCodePoint(parseInt(u2.slice(2, -1), 16)) : Cu.get(u2) || u2;
    }
    function Eu(u2, D2) {
      const e2 = [], t2 = D2.trim().split(/\s*,\s*/g);
      let r2;
      for (const D3 of t2) {
        const t3 = Number(D3);
        if (Number.isNaN(t3)) {
          if (!(r2 = D3.match(hu)))
            throw new Error(`Invalid Chalk template style argument: ${D3} (in style '${u2}')`);
          e2.push(r2[2].replace(Fu, (u3, D4, e3) => D4 ? fu(D4) : e3));
        } else
          e2.push(t3);
      }
      return e2;
    }
    function gu(u2) {
      cu.lastIndex = 0;
      const D2 = [];
      let e2;
      for (; (e2 = cu.exec(u2)) !== null; ) {
        const u3 = e2[1];
        if (e2[2]) {
          const t2 = Eu(u3, e2[2]);
          D2.push([u3].concat(t2));
        } else
          D2.push([u3]);
      }
      return D2;
    }
    function du(u2, D2) {
      const e2 = {};
      for (const u3 of D2)
        for (const D3 of u3.styles)
          e2[D3[0]] = u3.inverse ? null : D3.slice(1);
      let t2 = u2;
      for (const [u3, D3] of Object.entries(e2))
        if (Array.isArray(D3)) {
          if (!(u3 in t2))
            throw new Error("Unknown Chalk style: " + u3);
          t2 = D3.length > 0 ? t2[u3](...D3) : t2[u3];
        }
      return t2;
    }
    var pu = (u2, D2) => {
      const e2 = [], t2 = [];
      let r2 = [];
      if (D2.replace(lu, (D3, n2, s2, o2, i2, a2) => {
        if (n2)
          r2.push(fu(n2));
        else if (o2) {
          const D4 = r2.join("");
          r2 = [], t2.push(e2.length === 0 ? D4 : du(u2, e2)(D4)), e2.push({ inverse: s2, styles: gu(o2) });
        } else if (i2) {
          if (e2.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          t2.push(du(u2, e2)(r2.join(""))), r2 = [], e2.pop();
        } else
          r2.push(a2);
      }), t2.push(r2.join("")), e2.length > 0) {
        const u3 = `Chalk template literal is missing ${e2.length} closing bracket${e2.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(u3);
      }
      return t2.join("");
    };
    var { stdout: mu, stderr: bu } = iu;
    var { stringReplaceAll: yu, stringEncaseCRLFWithFirstIndex: Bu } = au;
    var vu = ["ansi", "ansi", "ansi256", "ansi16m"];
    var _u = Object.create(null);
    var Au = class {
      constructor(u2) {
        return wu(u2);
      }
    };
    var wu = (u2) => {
      const D2 = {};
      return ((u3, D3 = {}) => {
        if (D3.level && !(Number.isInteger(D3.level) && D3.level >= 0 && D3.level <= 3))
          throw new Error("The `level` option should be an integer from 0 to 3");
        const e2 = mu ? mu.level : 0;
        u3.level = D3.level === void 0 ? e2 : D3.level;
      })(D2, u2), D2.template = (...u3) => Lu(D2.template, ...u3), Object.setPrototypeOf(D2, Ou.prototype), Object.setPrototypeOf(D2.template, D2), D2.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      }, D2.template.Instance = Au, D2.template;
    };
    function Ou(u2) {
      return wu(u2);
    }
    for (const [u2, D2] of Object.entries(eu))
      _u[u2] = { get() {
        const e2 = ku(this, Iu(D2.open, D2.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, u2, { value: e2 }), e2;
      } };
    _u.visible = { get() {
      const u2 = ku(this, this._styler, true);
      return Object.defineProperty(this, "visible", { value: u2 }), u2;
    } };
    var Mu = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const u2 of Mu)
      _u[u2] = { get() {
        const { level: D2 } = this;
        return function(...e2) {
          const t2 = Iu(eu.color[vu[D2]][u2](...e2), eu.color.close, this._styler);
          return ku(this, t2, this._isEmpty);
        };
      } };
    for (const u2 of Mu) {
      _u["bg" + u2[0].toUpperCase() + u2.slice(1)] = { get() {
        const { level: D2 } = this;
        return function(...e2) {
          const t2 = Iu(eu.bgColor[vu[D2]][u2](...e2), eu.bgColor.close, this._styler);
          return ku(this, t2, this._isEmpty);
        };
      } };
    }
    var Su = Object.defineProperties(() => {
    }, __spreadProps(__spreadValues({}, _u), { level: { enumerable: true, get() {
      return this._generator.level;
    }, set(u2) {
      this._generator.level = u2;
    } } }));
    var Iu = (u2, D2, e2) => {
      let t2, r2;
      return e2 === void 0 ? (t2 = u2, r2 = D2) : (t2 = e2.openAll + u2, r2 = D2 + e2.closeAll), { open: u2, close: D2, openAll: t2, closeAll: r2, parent: e2 };
    };
    var ku = (u2, D2, e2) => {
      const t2 = (...u3) => Ru(t2, u3.length === 1 ? "" + u3[0] : u3.join(" "));
      return Object.setPrototypeOf(t2, Su), t2._generator = u2, t2._styler = D2, t2._isEmpty = e2, t2;
    };
    var Ru = (u2, D2) => {
      if (u2.level <= 0 || !D2)
        return u2._isEmpty ? "" : D2;
      let e2 = u2._styler;
      if (e2 === void 0)
        return D2;
      const { openAll: t2, closeAll: r2 } = e2;
      if (D2.indexOf("") !== -1)
        for (; e2 !== void 0; )
          D2 = yu(D2, e2.close, e2.open), e2 = e2.parent;
      const n2 = D2.indexOf("\n");
      return n2 !== -1 && (D2 = Bu(D2, r2, t2, n2)), t2 + D2 + r2;
    };
    var Tu;
    var Lu = (u2, ...D2) => {
      const [e2] = D2;
      if (!Array.isArray(e2))
        return D2.join(" ");
      const t2 = D2.slice(1), r2 = [e2.raw[0]];
      for (let u3 = 1; u3 < e2.length; u3++)
        r2.push(String(t2[u3 - 1]).replace(/[{}\\]/g, "\\$&"), String(e2.raw[u3]));
      return Tu === void 0 && (Tu = pu), Tu(u2, r2.join(""));
    };
    Object.defineProperties(Ou.prototype, _u);
    var $u = Ou();
    $u.supportsColor = mu, $u.stderr = Ou({ level: bu ? bu.level : 0 }), $u.stderr.supportsColor = bu;
    var xu = $u;
    var Uu = {};
    function ju(u2) {
      let D2 = Uu[u2];
      return D2 || (D2 = u2[0] === "#" ? xu.hex(u2) : xu[u2] || xu.keyword(u2), Uu[u2] = D2, D2);
    }
    var Pu = {};
    var Nu = { info: "cyan" };
    var qu = { 0: "red", 1: "yellow", 2: "white", 3: "green" };
    var Yu = { secondaryColor: "grey", formatOptions: { date: true, colors: true, compact: false } };
    var Hu = { info: H("\u2139"), success: H("\u2714"), debug: H("\u203A"), trace: H("\u203A"), log: "" };
    var Vu = class extends S {
      constructor(u2) {
        super(Object.assign({}, Yu, u2));
      }
      formatStack(u2) {
        const D2 = ju("grey"), e2 = ju("cyan");
        return "\n" + A(u2).map((u3) => "  " + u3.replace(/^at +/, (u4) => D2(u4)).replace(/\((.+)\)/, (u4, D3) => `(${e2(D3)})`)).join("\n");
      }
      formatType(u2, D2) {
        const e2 = Nu[u2.type] || qu[u2.level] || this.options.secondaryColor;
        if (D2)
          return function(u3) {
            let D3 = Pu[u3];
            return D3 || (D3 = u3[0] === "#" ? xu.bgHex(u3) : xu["bg" + u3[0].toUpperCase() + u3.slice(1)] || xu.bgKeyword(u3), Pu[u3] = D3, D3);
          }(e2).black(` ${u2.type.toUpperCase()} `);
        const t2 = typeof Hu[u2.type] == "string" ? Hu[u2.type] : u2.icon || u2.type;
        return t2 ? ju(e2)(t2) : "";
      }
      formatLogObj(u2, { width: D2 }) {
        const [e2, ...t2] = this.formatArgs(u2.args).split("\n"), r2 = u2.badge !== void 0 ? Boolean(u2.badge) : u2.level < 2, n2 = ju(this.options.secondaryColor), s2 = this.formatDate(u2.date), o2 = s2 && n2(s2), i2 = this.formatType(u2, r2), a2 = u2.tag ? n2(u2.tag) : "", l2 = e2.replace(/`([^`]+)`/g, (u3, D3) => xu.cyan(D3));
        let c2;
        const h2 = this.filterAndJoin([i2, l2]), F2 = this.filterAndJoin([a2, o2]), C2 = D2 - $(h2) - $(F2) - 2;
        return c2 = C2 > 0 && D2 >= 80 ? h2 + " ".repeat(C2) + F2 : h2, c2 += t2.length ? "\n" + t2.join("\n") : "", r2 ? "\n" + c2 + "\n" : c2;
      }
    };
    var Wu = class {
      constructor({ stream: u2 } = {}) {
        this.stream = u2 || process.stdout;
      }
      log(u2) {
        this.stream.write(JSON.stringify(u2) + "\n");
      }
    };
    var Gu = typeof __non_webpack_require__ != "undefined" ? __non_webpack_require__ : require;
    var zu = class {
      constructor(u2) {
        if (u2 && u2.log)
          this.logger = u2;
        else {
          const D2 = Gu("winston");
          this.logger = D2.createLogger(Object.assign({ level: "info", format: D2.format.simple(), transports: [new D2.transports.Console()] }, u2));
        }
      }
      log(u2) {
        const D2 = [].concat(u2.args), e2 = D2.shift();
        this.logger.log({ level: Qu[u2.level] || "info", label: u2.tag, message: e2, args: D2, timestamp: u2.date.getTime() / 1e3 });
      }
    };
    var Qu = { 0: "error", 1: "warn", 2: "info", 3: "verbose", 4: "debug", 5: "silly" };
    global.consola || (global.consola = function() {
      let u2 = p.debug ? 4 : 3;
      process.env.CONSOLA_LEVEL && (u2 = parseInt(process.env.CONSOLA_LEVEL) || u2);
      const D2 = new _({ level: u2, reporters: [p.ci || p.test ? new S() : new Vu()] });
      return D2.Consola = _, D2.BasicReporter = S, D2.FancyReporter = Vu, D2.JSONReporter = Wu, D2.WinstonReporter = zu, D2.LogLevel = m, D2;
    }());
    var Ju = global.consola;
    module2.exports = Ju;
  }
});

// src/node/patchKirbyPanel.ts
var import_fs = __toModule(require("fs"));
var import_chalk = __toModule(require_chalk());
var import_consola = __toModule(require_consola());
var pattern = "},this.marks)}";
var patch = ",...(window.panel.plugins.marks||[]).reduce((a,[n,f])=>({...a,n:new f()}),{})" + pattern;
async function main() {
  import_consola.default.start("Kirby Panel patcher for custom writer marks");
  let path = `${import_fs.default.existsSync("vendor/getkirby") ? "vendor/getkirby/cms" : "kirby"}/panel/dist/js`;
  path += import_fs.default.existsSync(`${path}/index.js`) ? "/index.js" : "/app.js";
  if (!import_fs.default.existsSync(path)) {
    import_consola.default.error(`couldn't find ${import_chalk.default.cyan(path)}, is Kirby installed?`);
    return;
  }
  const panel = import_fs.default.readFileSync(path, "utf8");
  if (panel.includes(patch)) {
    import_consola.default.success("already patched");
    return;
  }
  import_consola.default.info("patching the Panel...");
  const output = panel.replace(pattern, patch);
  import_fs.default.writeFileSync(path, output, "utf8");
  import_consola.default.success("successfully patched");
}
main().catch((err) => import_consola.default.error(err));
