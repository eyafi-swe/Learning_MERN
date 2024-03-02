//Problem 1
function radianToDegree(radian) {

    if (typeof radian !== 'number') {
        return "Please enter valid number.";

    }
    else {
        let degree = radian * (180 / Math.PI);
        degree = degree.toFixed(2);
        return degree;
    }
}

//Problem 2
function isJavaScriptFile(fileName) {

    if (typeof fileName !== 'string') {
        return "Please enter a valid filename.";
    }
    else {
        const fileExtension = fileName.slice(-3);
        if (fileExtension === '.js') {
            return true;
        }
        else {
            return false;
        }
    }
}

//Problem 3
function oilPrice(diesel, petrol, octen) {
    const dieselPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;

    if (typeof diesel !== 'number' || typeof petrol !== 'number' || typeof octen !== 'number') {
        return "Please enter valid quantity.";
    }
    else {
        const totalCost = (dieselPrice * diesel) + (petrolPrice * petrol) + (octenPrice * octen);
        return totalCost;
    }

}

//Problem 4
function publicBusFare(people) {
    const busCapacity = 50;
    const microBusCapacity = 11;
    const publicBusTicketCost = 250;
    if (typeof people !== 'number') {
        return "Please enter valid number";
    }
    else {
        let rem = people % busCapacity;
        rem %= microBusCapacity;
        const fareOfPublicBus = rem * publicBusTicketCost;
        return fareOfPublicBus;
    }
}

//Problem 5
function isBestFriend(friend1, friend2) {
    if (typeof friend1 !== 'object' || typeof friend2 !== 'object') {
        return "Please enter object.";
    }
    else if (typeof friend1.name !== 'string' || typeof friend1.friend !== 'string' || typeof friend2.name !== 'string' || typeof friend2.friend !== 'string') {
        return "Please enter valid object";
    }
    else {
        if (friend1.name.toLowerCase() === friend2.friend.toLowerCase() && friend1.friend.toLowerCase() === friend2.name.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
}
