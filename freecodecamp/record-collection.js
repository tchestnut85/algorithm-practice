// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  // console.log(object);
  // console.log(id, prop, value);

  if (prop !== 'tracks' && value !== '') {
    object[id][prop] = value;
    console.log(id, prop, value);
  } else if (prop === 'tracks' && !object[id].hasOwnProperty('tracks')) {
    object[id][prop] = [value];
  } else if (prop === 'tracks' && value !== '') {
    const tracksArr = object[id][prop];
    tracksArr.push(value);
  } else if (value === '') {
    delete object[id][prop];
  }

  // console.log(object);
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');