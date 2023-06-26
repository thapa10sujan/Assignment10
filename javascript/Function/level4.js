//Q1. write a js function that  can  calculates the final price
// formula is distance multiply unitKmPrice
//expected output is 600 

const rideDetails= {
    pickup: 'balaju',
    destination: 'thamel',
    distance: '20km',
    unitKmPrice: 30
}


const distance = rideDetails.distance;
const unitPrice = rideDetails.unitKmPrice;
const finalPrice = distance*unitPrice;
console.log(finalPrice); 



