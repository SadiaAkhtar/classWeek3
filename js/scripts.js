// I will make an array with a list of different months of the year
var monthsArray = ['June', 'Februrary','January','April', 'May'];

//This variable will find the first item in my monthsArray
var firstMonth = monthsArray[0];

// I will make an if... else... conditional that will test to see if the first item in my monthsArray is January
// We will also test whether the third month of the year is March
if (firstMonth == 'January') {
  console.log('The first month of the year is January');
} else if (monthsArray[2] == 'January'){
  console.log('The third month of the year is March.')
} else {
  console.log('The first month of the year is not January');
  console.log('Actually,the first month is '+firstMonth);
}
