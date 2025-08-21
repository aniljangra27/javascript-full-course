const fname = "Anil";
console.log(
    fname
);

//Template literal
const lname = 'kumar';
const myname = `${fname} ${lname}`;

console.log(myname);
console.log(`My
    name
    is 
    Anil 
    Kumar`);
const values = [10,3,20,46,9,34,5,7,2,8];
values.forEach(function(ele) {
    document.getElementById("demo").innerHTML += ele + " ";
});

const sortValue = values.sort((a,b)=> a-b);
sortValue.forEach(function(ele) {
    document.getElementById("demo").innerHTML += "Sort:"+ ele + " ";
});


/* Write your code below. Good luck! 🙂 */

const dolphinScore = [96, 108, 89];
let scoreDolphins = 0;
dolphinScore.forEach(function(score){scoreDolphins+=score});
console.log(scoreDolphins);
// alert(dolphinScore);
document.getElementById("demo").innerHTML += "Dolphins:" + scoreDolphins + " ";


const KoalasScore = [88, 91, 110];
let scoreKoalas = 0;
KoalasScore.forEach(function(score){scoreKoalas+=score;});
console.log(scoreKoalas);