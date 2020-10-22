function returnFirstTwoDrivers(drivers) {
  const firstTwo = function() {
    return drivers.slice(0, 2)
  }
  return firstTwo()
}

function returnLastTwoDrivers(drivers) {
  const lastTwo = function() {
    return drivers.slice(drivers.length - 2)
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

function selectDifferentDrivers(driverOne, driverTwo) {
  return driverTwo(driverOne)
}