let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // add the given friend to the friends array in the given userObj
  // friend array is at user.data.friends
  const friendsArr = userObj.data.friends;
  // push the new friend onto the friendsArr
  friendsArr.push(friend);

  return friendsArr;
  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));