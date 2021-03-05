// My solution for the lookUpProfile problem on freeCodeCamp

const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const currentName = contacts[i].firstName;

        if (name === currentName) {
            if (contact.hasOwnProperty(prop)) {
                return contact[prop];
            } else {
                return 'No such property';
            }
        }
    }
    return 'No such contact';
    // Only change code above this line
}

lookUpProfile("Akira", "likes");