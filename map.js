// Use the map method to solve these problems!

/*
Input:

[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]

*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNamesWithMap(arr) {
    const namesWithMap = arr.map(pets => pets.name);

    return namesWithMap;
}

/*
Output:

[
    { name: 'spot', isHungry: true, type: 'dog' },
    { name: 'rover', isHungry: true, type: 'dog' },
    { name: 'jumpy', isHungry: true, type: 'frog' },
    { name: 'einstein', isHungry: true, type: 'cat' },
]*/

export function makeArrayWithIsHungry(arr) {
    const withIsHungry = [];
    arr.map(pets => {
        withIsHungry.push({ name: `${pets.name}`, isHungry: true, type: `${pets.type}` });

    
    });
    return withIsHungry;
}

/*
Output:

[
    { name: 'SPOT', type: 'dog' },
    { name: 'ROVER', type: 'dog' },
    { name: 'JUMPY', type: 'frog' },
    { name: 'EINSTEIN', type: 'cat' },
]*/

export function makeShoutingArray(arr) {
    const shouting = [];
    arr.map(pets => {
        shouting.push({ name: `${pets.name.toUpperCase()}`, type: `${pets.type}` });
    
    
    });
    return shouting;
}


/*

Output:
['spotdog', 'roverdog', 'jumpyfrog', einsteincat']
*/

export function makeStringArray(arr) {
    const stringArray = [];
    arr.map(pets => 
        stringArray.push(`${pets.name}${pets.type}`));

    
    return stringArray;
}

/*
Output:

[
    [
        ['name', 'spot'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'rover'], 
        ['type', 'dog']
    ], 
    [
        ['name', 'jumpy'], 
        ['type', 'frog']
    ],
    [ 
        ['name', 'einstein'], 
        ['type', 'cat']
    ]
*/

export function makeArrayOfArraysOfArrays(arr) {
    
    return arr.map(pets => 
        ([['name', pets.name], ['type', pets.type]]));

   
        
}