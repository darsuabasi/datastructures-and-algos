/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Return the number
 * of apples that "Eve" has.
 * @param {Object} appleCountByName
 * @returns {number} The number of apples Eve has.
 */

const eveAppleCount = (appleCountByName) => {
  return appleCountByName.Eve
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name. Return the number
 * of apples that the person passed in has.
 * If the person does not exist in the object it should return 0.
 * @param {Object} appleCountByName
 * @param {string} name - name of person
 * @returns {number} The number of apples name has.
 *
 * Is there a difference between using string notation vs
 * bracket notation? Try them both.
 */

// COMPUTED PROPERY ---> figure out value first and then use thatt to key into obj

// Dot notation is faster and more readable, but has more limitations. 
// Bracket notation allows access to property names stored in a variable, 
// and must be used if an object’s property contains any sort of special character.

const appleCount = (appleCountByName, name) => {
  return appleCountByName[name] 
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Also takes in a new number of apples for Eve.
 * Reassign her number of apples to the new value and then return
 * the original object.
 *
 * @param {Object} appleCountByName
 * @param {number} appleCount - new number of apples
 * @returns {Object} The updated object.
 */

const eveAppleSet = (appleCountByName, appleCount) => {
  appleCountByName["Eve"] = appleCount
  return appleCountByName
  // return appleCountByName.appleCount
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values. Also takes in the argument of someone's
 * name, and the argument newAppleCount.
 * Update the object to have the name pointing to the newAppleCount
 * @param {Object} appleCountByName - apple object with names and numbers
 * @param {string} name - name of person
 * @param {number} newAppleCount - number of apples
 * @returns {Object} The updated object.
 *
 */

const appleSet = (appleCountByName, name, newAppleCount) => {
  appleCountByName[name] = newAppleCount
  return appleCountByName
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Should return the total number of apples for Adam and Eve.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Sum of Adam and Eve's apples.
 *
 */

const adamAndEveApples = (appleCountByName) => {
  let sum = appleCountByName.Adam + appleCountByName.Eve
  return sum
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Returns the sum of all apples
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {number} Total number of all apples
 *
 */

const appleSum = (appleCountByName) => {
  let sum = 0;
    for(let key in appleCountByName) {
      sum += appleCountByName[key]
    }
  return sum
};

/**
 * Takes in an object with peoples names as the keys and
 * the number of apples they have as values.
 * Reset all the apple values to 0 and return the object.
 * @param {Object} appleCountByName - apple object with names and numbers
 * @returns {Object} Object with values set to zero.
 *
 */

const appleSetToZero = (appleCountByName) => {
  // let reset = 0;
    for(let key in appleCountByName) {
      appleCountByName[key] = 0;
    }
    return appleCountByName
};

/**
 * Takes in an object of countries and their capitals.
 * Return the capital of Russia.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {string} Capital of Russia
 */

const russiaCapital = (capitalByCountry) => {
  return capitalByCountry.Russia
};

/**
 * Takes in an object of countries and their capitals.
 * Takes in a country
 * Return the capital of country given.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @param {string} country
 * @returns {string} Capital of country
 */

const getCapital = (capitalByCountry, country) => {
  return capitalByCountry[country]
};

/**
 * Takes in an object of countries and their capitals
 * and adds the key value pair "Jamaica" and "Kingston"
 * Return the original object.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @returns {Object} countriesAndCapitals now with Jamaica
 */

const addsJamaica = (capitalByCountry) => {
  capitalByCountry.Jamaica = "Kingston" 
  return capitalByCountry
};

/**
 * Takes in an object of countries and their capitals
 * and a country and capital. The country and capital should be
 * added to the object.
 * Return the original object.
 *
 * @param {Object} capitalByCountry - countries and capitals
 * @param {string} country
 * @param {string} capital
 * @returns {Object} countriesAndCapitals
 */

const addsCountry = (capitalByCountry, country, capital) => {
  capitalByCountry[country] = capital
  return capitalByCountry
};

/**
 * Takes an array of arrays. First element of inner array is authorName, second element
 * of inner array is score.
 * Return an object where the keys are the authorNames and
 * the values are the scores.
 * @param {Array[]} authors - array of arrays [["Mark Twain", 8.9], ["Nathaniel Hawthorne", 5.1]]
 * @returns {Object} {"Mark Twain": 8.9, "Nathaniel Hawthorne": 5.1}
 */

// const authorScores = (authors) => {
//   let obj = Object.fromEntries(authors);
//   return obj
// };

// arr of arrs
// loop thru arr // arr[i] ---> will return ["Mark Twain", 8.9]
// newObj = {}

// Author Obj 

// {key: value} 

// adding to objects
// obj.key = value

// obj[key] --- reads value of key
// obj.key = uses "key" literally
const authorScores = (authors) => {
  let newObj = {};

  for(let i = 0; i < authors.length; i++) {

    // first option
    // let el = authors[i];
    // let authorName = el[0];
    // let authorScore = el[1];
    // newObj[authorName] = authorScore

    // second option 
    // let el = authors[i];
    // newObj[el[0]] = el[1]

    // third option
    newObj[authors[i][0]] = authors[i][1]
  } 
  return newObj
};

/**
 * You are given an array of objects.
 * Each object in the array describes a submission with a firstName, lastName, and score.
 * Find the person with the best score and return their full name.
 * @param {Object[]} submissions - array of objects [ { firstName: "Calvin", lastName: "Newton", score: 13} ...]
 * @returns {string} The full name of person with best score.
 */

// const bestScore = (submissions) => {
//   let highestScoringName = ""
//   let largestScore = submissions[0]["score"]

//   for (let i = 0; i < submissions.length; i ++) {
//     if(submissions[i].score > largestScore) {
//         largestScore = submissions[i]["score"]
//         highestScoringName = submissions[i].firstName + " " + submissions[i].lastName
//     }
//   }
//   return highestScoringName
// }



const bestScore = (submissions) => {
  let maxScoringName = "";
  let maxScore = submissions[0]["score"]

  submissions.forEach(submission => {
    if(submission.score > maxScore) {
      maxScore = submission["score"]
      maxScoringName = submission.firstName + " " + submission.lastName
    }
  });
  return maxScoringName
};


/**
 * Returns an object where the keys are numbers 1 through 20,
 * and their respective values is key cubed (num * num * num).
 * @returns {Object} {1: 1, 2: 8, 3: 27...}
 */

const cubeObj = () => {
  let obj = {}

  for (let i = 1; i <= 20; i++) {
    obj[i] = Math.pow(i, 3);
  }
  return obj
};


/**
 * Takes in a string and returns an object with
 * the number of a's and the number of e's contained in the string
 * @param {string} str - "A good snake"
 * @returns {Object} Counts of e and a. {a: 2, e: 1}
 */

 // if(stringReset.includes("e")) {
  //   eBank +1
  // }
  // if(stringReset.includes("a")) {
  //   aBank = +1 
  // }

const countAandE = (str) => {
  let aBank = 0;
  let eBank = 0;
  let eaBank = {};
  let strResetCaps = str.toLowerCase();
  let strResetLetters = strResetCaps.split('');

  for(let i = 0; i < strResetLetters.length; i++) {
    if(strResetLetters[i] === "a") {
      aBank = aBank + 1
    }
    if(strResetLetters[i] === "e") {
      eBank = eBank + 1
    }
  }
  eaBank.a = aBank;
  eaBank.e = eBank;
  return eaBank
}


/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * @param {string} str -  "A good snake"
 * @returns {Object} Counts of all characters: {a: 2, g: 1, o: 2, d:1, " ": 2, s: 1, n:1, k:1, e: 1}
 */

const countOccurance = (str) => {
  let countBank = {};
  for(let i = 0; i < str.length; i++) {
    let resetStr = str.toLowerCase()
    let character = resetStr.charAt(i);

    if(countBank[character]) {
      countBank[character]++;
    } else {
      countBank[character] = 1;
    }
  }
  return countBank;
};

/**
 * Takes in a string and returns an object with
 * the count occurrence of each character.
 * Skips spaces
 * @param {string} str - "A good snake"
 * @returns {Object} Counts all characters except spaces  {a: 2, g: 1, o: 2, d:1, s: 1, n:a, k:1, e: 1}
 */

const countOccuranceNoSpaces = (str) => {
  let setObject = countOccurance(str)
  delete setObject[" "]
  return setObject
};


/**
 * Takes in an array and returns the most common element.
 * @param {Array} array - array of elements
 * @returns {(number|string)} Most common element
 */

const mostCommonElement = (array) => {
  let outputObj = {}; 
  for(let i = 0; i < array.length; i++) {
    if(outputObj[array[i]]) {
      outputObj[array[i]] = outputObj[array[i]] + 1
    } else {
    outputObj[array[i]] = 1
    }
  }
  let maxCommonNum = 0;
  let maxCommonEl = "";

  for(let key in outputObj) {
    if(outputObj[key] > maxCommonNum) {
      maxCommonNum = outputObj[key];
      maxCommonEl = key;
    }
  }
  if (Number(maxCommonEl)) {
    maxCommonEl = Number(maxCommonEl)
  }
  return maxCommonEl
};

/**
 * Takes in an object and an array.
 * Returns a new array.
 * If the element in the array is a key in the object, the new
 * array should have its value in its place. Otherwise it should use the array element.
 *
 * Exp Input:
 * {"Ed Sheeran": "guitar", "Ray Charles": "piano"}
 * ["Ed Sheeran", "John Lennon", "Ray Charles"]
 *
 * Output:
 * ["guitar", "John Lennon", "piano"]
 *
 * @param {Object} pairs
 * @param {string[]} arr
 * @returns {string[]} Elements or their pair values.
 */

const updateList = (pairs, arr) => {

};

/**
 * Takes in an object and a key.
 * It should delete the key value pair from the object and
 * return the changed object.
 * @param {Object}
 * @param {string} key
 * @returns {Object} The Object without the key.
 */

 const deleteKey = (obj, key) => {

  //  key is already a param
  //  for(let key in obj) {
  //    if(obj[key] === null) {
  //     delete obj[key]
  //    }
  //  }
  //  return obj
  delete obj[key]
  return obj
};


 /**
  * Takes in an object and returns the number of
  * properties it has.
  * @param {Object} obj
  * @returns {number} Number of properties.
  */
 const propertyCount = (obj) => {
   let counter = 0;

   for(let key in obj) {
      counter = counter + 1
   }
   return counter
 };

module.exports = {
  eveAppleCount,
  appleCount,
  eveAppleSet,
  appleSet,
  adamAndEveApples,
  appleSum,
  appleSetToZero,
  russiaCapital,
  getCapital,
  addsJamaica,
  addsCountry,
  authorScores,
  bestScore,
  cubeObj,
  countAandE,
  countOccurance,
  countOccuranceNoSpaces,
  mostCommonElement,
  updateList,
  deleteKey,
  propertyCount,
};
