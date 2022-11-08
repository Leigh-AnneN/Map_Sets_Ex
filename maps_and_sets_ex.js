// Maps and Sets Exercise

// Quick Question #1
{1,2,3,4}

// Quick Question #2
ref

// Quick Questions #3
0: {Array(3) => true}
1: {Array(3) => false}


// hasDuplicate
const hasDuplicate(arr) = arr => new Set(arr) !== arr.length

// vowelCount
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }