const names = ['I have no name', 'The best book', 'Made up book', 'Romeo and Juliet', 'Rich dad poor dad', 'The Philosophy', 'East of Eden', 'Something Gained', 'Hard of Desire', 'Prison of winter', 'Atomic clock', 'Southern belle'];

function makeTitle() {
    var idx = getRandomIntInclusive(0, names.length - 1);
    var title = names.splice(idx, 1);
    return title;
}

function makeId(length = 5) {
    const possible = '123456789';
    var number = '';
    for (var i = 0; i < length; i++) {
        number += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return +number;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}