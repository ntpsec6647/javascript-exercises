const getAge = function(birth, death) {
    if(!death){
        death = new Date().getFullYear()
    }

    return death - birth;
}

const findTheOldest = function(people) {
    const oldest = people.reduce((old, current) => {
        const oldAge = getAge(old.yearOfBirth, old.yearOfDeath);
        const curAge = getAge(current.yearOfBirth, current.yearOfDeath)

        if(oldAge < curAge){
            old = current;
        }
        return old;
    });
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
