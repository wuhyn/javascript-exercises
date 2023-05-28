const findTheOldest = function(array) {
    return array.reduce((prevPerson, currPerson) => {
        const prevAge = getAge(prevPerson.yearOfBirth, prevPerson.yearOfDeath);
        const currAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);

        return prevAge > currAge ? prevPerson : currPerson;
    });
};

const getAge = function(yearOfBirth, yearOfDeath){

    let year;

    year = yearOfDeath;

    if(!yearOfDeath){
        year = new Date().getFullYear();
    }

    return year - yearOfBirth;
}

const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
