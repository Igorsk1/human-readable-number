module.exports = function toReadable(num) {
    if (num === 0) {
        return "zero";
    }

    const ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let res = "";
    let n = num.toString();

    if (num < 10) {
        res += ones[n];
    } else if (num > 10 && num < 20) {
        res += teens[n - 10];
    } else if (num < 100) {
        res += tens[n[0]] + " " + ones[n[1]];
    } else if (num < 1000) {
        let tempNum = Number(n.slice(1));
        res += ones[n[0]] + " hundred ";
        if (tempNum != 0) {
            res += toReadable(tempNum);
        }
    }

    return res.trim();
};
