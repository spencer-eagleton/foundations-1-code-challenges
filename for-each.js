// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

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

export function makeArrayOfNames(arr) {
    const petName = [];
    arr.forEach(pets => {
        petName.push(pets.name);
    });
    return petName;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const typesReversed = [];
    arr.forEach(pets => {
        typesReversed.unshift(pets.type);

    });
    return (typesReversed);
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishArray = [];
    arr.forEach(element => {
        spanishArray.push({ nombre: `${element.name}`, tipo: `${element.type}` });

    });
    return spanishArray;
}

