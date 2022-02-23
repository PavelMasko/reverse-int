module.exports = function reverse(n) {
    const numberString = String(Math.abs(n));
    const arr = numberString.split('');
    return +arr.reverse().join('');
}