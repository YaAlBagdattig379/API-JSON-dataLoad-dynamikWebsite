// this function is called by file "v-3-index.html"
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json)); 
}

// more data load examples  from resources of "jsplaceholder" website
// example : 1      Users data
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json())
      .then (data => console.log(data));
    // console.log("load users ")
}

// example : 2         users post data

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then (response => response.json())
      .then (data2 => displayUsers(data2));
    // console.log("load users ")
}
// example : 3          by function call in  json data example : 2. 
function displayUsers(data){
    console.log(data)
}