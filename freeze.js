const king = {
    name: 'Mufasa',
    age: 55,
    kingdom: 'Pride Lands'
};

// Object.freeze(king);
Object.seal(king);
delete king.age;
king.queen = 'Sarabi';
console.log(king);