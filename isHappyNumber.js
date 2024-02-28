const sumOfSquareDigits = (number) => {
  let result = 0;
  const numAsStr = String(number);
  for (let i = 0; i < numAsStr.length; i += 1) {
    result += Number(numAsStr[i]) ** 2;
  }
  
  return result;
};

const isHappyNumber = (number) => {
  let num = number;
  i = 0;
  while (i < 10) {
    num = sumOfSquareDigits(num);
    if (num === 1) {
      return true;
    } else {
      return false;
    }
    
    i++;
  }
};
