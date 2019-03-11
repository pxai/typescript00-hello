let a : number = 10;
let b = 'Hello';
let i,j,k : number = 0;

i = j = k = 9;

if (a > 9) {
    console.log(b);
}

if (b == '') {
    console.log('It is empty');
} else {
    console.log('No, it is not empty: ' + b);
}

if (i > j) {
    console.log('i is bigger and j');
} else if (i < j) {
    console.log('j is bigger than i');
} else {
    console.log('i and j are equal');
}

const level: number = 4;

switch (level) {
    case 1:
            console.log("Low level");
            break;
    case 2:
    case 3:
            console.log("Medium level");
            break;
    case 4:
            console.log("High level");
            break;
    default:
            console.log("Unknown");
            break;
}