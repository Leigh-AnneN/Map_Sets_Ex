const add = (x,y) => x + y;
const mult = (x,y) => x * y;

const funcCalls = new Map (); 
funcCalls.set(add,0); //key is add and initialize it to zero
funcCalls.set(mult,0);

//how many times are the funcitons called
funcCalls.get(add);
//howm any times has it been called

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

[key,"value"];

//nested array
const bandData = [
    [3, '3 Doors Down'],
    ['three', 'Three dog night'],
    [41, 'sum 41']
];

const bandMap = new Map(bandData);

//can chain sets and add to bandMap
bandMap.set(182, 'Blink-182').set('twenty','Matchbox Twenty');

//bandMap.has() = does it contain something
//delete a pair based on the key
//clear
//values - get all the values from a given map
//keys - get all of the keys form a given map

//for each, ITERATING over maps
//maps have a set order and have a size, not length, how many elelments are in there
 
bandMap.forEach(val,key) => { //not key, value **
console.log(key + '=>' + val);
};

for(let[key,value] of bandMap){
    console.log(key, '=', value);
}

//NEW SET
const bannedHashTags = new Set (['nofilter', 'winning', 'yolo' ]); 
//add a value to a set
bannedHashTags.add('bestlife').add('selfie');
//check if a value is in a set
bannedHashTags.has('yolo') //boolean method
//clear 
//delete  

//Why use a set? fast and removes all duplicates

function filterHashTags(tags) {
const bannedHashTags = new Set (['nofilter', 'winning', 'yolo' ]); 
return tags.filter((tag) => !bannedHashTags.has(tag));
}

const susanTags = ['happymonday','yolo','winning'];

// 
const ages = [45, 42, 23, 2, 5,5];
//will remove all duplicates and turn it into an array
[...new Set (ages)];

