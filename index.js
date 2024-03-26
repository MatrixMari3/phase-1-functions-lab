// calculating distanceFromHqInBlocks
function distanceFromHqInBlocks(pickUpLocation) {
    const block = 42;
    if (block > pickUpLocation) {
    return block - pickUpLocation;
    }
    else if (pickUpLocation > block ) {
    return pickUpLocation - block;
    }
    }
    
    // calculating distanceFromHqInFeet
    
    function distanceFromHqInFeet(pickUpLocation) {
    const block = 42;
    const BlockPerFeet = 264;
    if (block > pickUpLocation) {
    return (block - pickUpLocation) * BlockPerFeet;
    }
    if (pickUpLocation > block) {
    return (pickUpLocation - block) * BlockPerFeet;
    }
    } 
    
    
    // calculating distanceTravelledInFeet
    
    function distanceTravelledInFeet(pickUpLocation,destination) {
    const BlockPerFeet = 264;
    const travelledDistance = Math.abs (destination - pickUpLocation)
    return travelledDistance * BlockPerFeet;
    }
    
    //calculating FarePrice
    
    function calculatesFarePrice(pickUpLocation, destination) {
    const distanceInFeet = distanceTravelledInFeet(pickUpLocation, destination);
    
    if (distanceInFeet <= 400) {
    return 0; 
    // Gives customers a free sample
    } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; 
    // charges 2 cents per foot when total feet travelled is between 400 and 2000
    } else if (distanceInFeet <= 2500) {
    return 25;
    // charges 25 dollars for a distance over 2000 feet
    } else {
    return 'cannot travel that far'; 
    // does not allow rides over 2500 feet
    }
}