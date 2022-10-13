
    headTeacher = {
        friendName : "anisul",
        age : 31,
        height : " 6 feet ",
        weight : 70,
        isMarried : true,  
        books : ["english","bengali","finish"]   
};
// use for 'stringify'
const superStrigified = JSON.stringify(headTeacher);
// console.log(superStrigified); 
    // o.p {"friendName":"anisul","age":31,"height":" 6 feet ","weight":70,"isMarried":true,"books":["english","bengali","finish"]}

// use for 'parse'  to converted
const converted = JSON.parse(superStrigified);
console.log(converted);
 /* 
     o.p >>      
    {
    friendName: 'anisul',
    age: 31,
    height: ' 6 feet ',
    weight: 70,
    isMarried: true,
    books: [ 'english', 'bengali', 'finish' ]
  } 
   
  */
 