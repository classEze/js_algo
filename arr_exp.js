var myArray = [
    {
        name:"Eze",
        age:50
    },
    {
        name:"Wike",
        age:343
    },
    {
        name:"Johnson",
        age:180
    }
]

const keyEze = myArray.find(elem => elem.name === 'Eze');

keyEze.age = 10000;

console.log(myArray);
