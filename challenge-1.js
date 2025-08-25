/* Write your code below. Good luck! 🙂 */
const mark = {
    fullName: "Mark Miller's",
    mass: 78,
    height: 1.69,
    calcBMI : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith's",
    mass: 92,
    height: 1.95,
    calcBMI : function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// console.log(mark.calcBMI())

console.log(`${mark.calcBMI() > john.calcBMI()} ? ${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${john.fullName} (${john.calcBMI()})! : ${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName} (${mark.bmi})!`)