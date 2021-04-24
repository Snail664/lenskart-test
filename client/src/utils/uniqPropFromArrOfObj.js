/*
this function takes an array of objs eg: [{..}, {...}, {...}]
and a key name belonging to the objects
the function selects unique values for the key name provided
*/

export default function uniqPropFromArrOfObj(arrayOfObj, objKey) {
  var resultArray = [];
  let i;
  for (i = 0; i < arrayOfObj.length; i++) {
    if (resultArray.includes(arrayOfObj[i][objKey])) {
      continue;
    } else {
      resultArray.push(arrayOfObj[i][objKey]);
    }
  }

  return resultArray;
}
