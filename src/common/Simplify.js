export function simplify(num) {
  if (num > 100000000) {
    num = Math.round(parseInt(num) / 10000000) / 100;
    return num + '亿'
  }
  if (num >= 100000) {
    num = Math.round(parseInt(num) / 1000) / 100;
    return num + "万";
  } else {
    return num;
  }
}