// we genreally write data in array then object(for multiple data)

// In array: [3,3,4,3,2]
// for object: {name:"Hello",username:"@taussy10"}

// normal way of storing data
const data1 = [
  // if you want only one data
  {
    postion: "1",
    name: "saleh",
    time: 345,
    html: 3,
    css: 4,
    js: 43,
    markdown: 43,
  },
  {
    postion: "2",
    name: "taussy10",
    time: 345,
    html: 3,
    css: 4,
    js: 43,
    markdown: 43,
  },
];
data1[0].css;

const data2 = [
  {
    user1: {
      postion: "1",
      name: "saleh",
      time: 345,
      html: 3,
      css: 4,
      js: 43,
      markdown: 43,
    },
    user2: {
      postion: "2",
      name: "taussy10",
      time: 345,
      html: 3,
      css: 4,
      js: 43,
      markdown: 43,
    },
  },
];
data2[0].user1.html
// an array containg  objects
