// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(){
    return (['Antonia', 'Nuru'])
}
function returnLastTwoDrivers(){
    return (['Amari', 'Mo'])
}

const selectingDrivers = [returnFirstTwoDrivers ,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}
const fareDoubler = createFareMultiplier(2) 

const fareTripler = createFareMultiplier(3) 

function selectDifferentDrivers(ArrayOfDrivers, returnDriversFunction) {
    if (returnDriversFunction === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(ArrayOfDrivers);
    } else if (returnDriversFunction === returnLastTwoDrivers) {
        return returnLastTwoDrivers(ArrayOfDrivers);
    }
}