  // Function that gets the decimal parts of numbers
  function getDecimalPart(num) {
    if (Number.isInteger(num)) {
      return 0;
    }
  
    let decimalStr = `${num}`.split('.')[1];
    let maindecimalStr = `decimalStr`.length > 2 ? `${decimalStr[0]}${decimalStr[0]}` : decimalStr

    return Number(maindecimalStr);
  }



  
export { getDecimalPart }