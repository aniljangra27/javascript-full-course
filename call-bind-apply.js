const bio = {
  firstName: 'Anil',
  lastName: 'Kumar',
  printFullName: function (town = 'UK') {
    console.log(`Name: ${this.firstName} ${this.lastName} form ${town}`);
  },
};

const bio2 = {
  firstName: 'Sunil',
  lastName: 'Kumar',
};

// Call the function printFullName and update the name -- in that scenario we have to pass another object this referece
bio.printFullName.call(bio, 'Haryana');

// Bind return the function -- call return void
let bindFnc = bio.printFullName.bind(bio2, 'Haryana');
bindFnc();

// apply - apply is used to pass param as an array
bio.printFullName.apply(bio, ['UP']);
