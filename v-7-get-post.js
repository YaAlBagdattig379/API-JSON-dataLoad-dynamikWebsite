// console.log("hello get and post two things is more required for both of us.")

// json data 'post'............this is example of 'post' how to   write post?

function addAPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method : "post",
      body : JSON.stringify({
        title : "my new pow",
        body : "this is my posts body !",
        id : 4
      }),
      headers : {
        "content-type" : 'application/json; charset = UTF'
      },

    })
    .then( res => res.json())
    .then( data => console.log(data))
   
}
