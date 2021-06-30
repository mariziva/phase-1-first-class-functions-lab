// Code your solution in this file!
let drivers = ["Sally", "Bob", "Freddy", "Claudia"]

const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2)
}
returnFirstTwoDrivers(drivers)

const returnLastTwoDrivers = function() {
    return drivers.slice(2)
}
returnLastTwoDrivers(drivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
    return function(fare){
       return num*fare
    }
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}