function returnFirstTwoDrivers(drivers) {
  const firstTwo = function() {
    return drivers.slice(0, 2)
  }
  return firstTwo()
}

function returnLastTwoDrivers(drivers) {
  const lastTwo = function() {
<<<<<<< HEAD
    return drivers.slice(drivers.length - 2)
=======
    return drivers.slice(Math.max(drivers.length - 2))
>>>>>>> 323becf6c6edd8b25124f1b198403bfebbaa59a5
  }
  return lastTwo()
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(value) {
    return value * integer
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

<<<<<<< HEAD
function selectDifferentDrivers(driverOne, driverTwo) {
  return driverTwo(driverOne)
}
=======
const selectDifferentDrivers = function(array, fn) {
    return fn(array);
>>>>>>> 323becf6c6edd8b25124f1b198403bfebbaa59a5
