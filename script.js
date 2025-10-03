'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const insertAdjacentMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((value, index) => {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const movementRowHtml = `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
      <div class="movements__value">${value} €</div>
    </div>`;
    // console.log(movementRowHtml);
    // add inside movement container
    containerMovements.insertAdjacentHTML('afterbegin', movementRowHtml);
  });
};

// insertAdjacentMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.amount = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${acc.amount} EUR`;
};
// calcDisplayBalance(account1.movements);

const calcSummeryIn = function (mov) {
  const summeryIn = mov
    .filter(mov => mov >= 0)
    .reduce((prev, curr) => prev + curr, 0);
  labelSumIn.textContent = `${summeryIn}€`;
};
// calcSummeryIn(account1.movements);

const calcSummeryOut = mov => {
  const summeryOutAmount = mov
    .filter(mov => mov < 0)
    .reduce((prev, next) => prev + next, 0);
  labelSumOut.textContent = `${Math.abs(summeryOutAmount)}€`;
};
// calcSummeryOut(account1.movements);

const calInterest = (mov, intr) => {
  const interest = mov
    .filter(mov => mov >= 0)
    .map(mv => (mv * intr) / 100)
    .filter(interest => interest >= 1)
    .reduce((prev, next) => prev + next, 0);
  console.log(`interest ${interest}`);

  labelSumInterest.textContent = `${Math.abs(interest)}€`;
};
// calInterest(account1.movements);

const createUserName = allAccount => {
  allAccount.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUserName(accounts);
console.log(accounts.at(0));

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  // console.log(
  //   `Btn click...${inputLoginUsername.value} - ${inputLoginPin.value}`
  // );
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = inputLoginPin.value = '';
    //display ui
    insertAdjacentMovements(currentAccount.movements);
    //display balance
    calcDisplayBalance(currentAccount);
    //dispaly summerIn/out
    calcSummeryIn(currentAccount.movements);
    calcSummeryOut(currentAccount.movements);
    //display interest
    calInterest(currentAccount.movements, currentAccount.interestRate);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const tranferAmount = inputTransferAmount.value;
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(tranferAmount, receiverAccount);
  if (
    tranferAmount > 0 &&
    tranferAmount < currentAccount.amount &&
    receiverAccount != inputLoginUsername?.value &&
    receiverAccount.username
  ) {
    account1.movements.push(-tranferAmount);
    receiverAccount.movements.push(Number(tranferAmount));
    //update ui
    insertAdjacentMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount);
    calcSummeryIn(currentAccount.movements);
    calcSummeryOut(currentAccount.movements);
    calInterest(currentAccount.movements, currentAccount.interestRate);
    //clear input field
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
    // for debugging
    // console.log(
    //   currentAccount,
    //   receiverAccount,
    //   tranferAmount,
    //   currentAccount.amount
    // );
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //delete account
    accounts.splice(index, 1);
    //hide ui
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
    //clear input field
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const loanAmount = Math.floor(inputLoanAmount.value);
  if (
    loanAmount > 0 &&
    currentAccount.movements.some(mov => mov >= loanAmount * 0.1)
  ) {
    //add movement
    currentAccount.movements.push(loanAmount);
    //update ui
    insertAdjacentMovements(currentAccount.movements);
    calcDisplayBalance(currentAccount);
    calcSummeryIn(currentAccount.movements);
    calcSummeryOut(currentAccount.movements);
    calInterest(currentAccount.movements, currentAccount.interestRate);
    //clear input field
    inputLoanAmount.value = '';
    inputLoanAmount.blur();
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  insertAdjacentMovements(
    currentAccount.movements.slice().sort((a, b) => (sorted ? a - b : b - a))
  );
  sorted = !sorted;
});
