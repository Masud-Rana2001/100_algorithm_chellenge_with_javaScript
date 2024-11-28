
//For inputArray = [1, 2, 1], elementToReplace = 1 and subtractionElem = 3, 
//the output should be arrayReplace(inputArray, elementToReplace, substrationElem) = [3, 2, 3].


const replaceFunction = function replaceFunction(inputArray, elementToReplace, subtractionElem) {
  inputArray.forEach((value,index) => {
    if (value === elementToReplace) {
     inputArray[index] = subtractionElem
   }
  })
  console.log(inputArray);
  
}

replaceFunction([1, 2, 1], 1, 3)
replaceFunction([1,5,9,4,2,1,5,8,8,8,8,8,8,8,8,],8,509)
