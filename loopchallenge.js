const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = [];
const totals = [];

for(let i=0;i<bills.length;i++) {
  const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(calcTip(i) + bills[i]);
}

console.log(totals);
console.log(tips);


const calcAverage = function(arr) {
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage([2,5,6]))
console.log(calcAverage(totals))