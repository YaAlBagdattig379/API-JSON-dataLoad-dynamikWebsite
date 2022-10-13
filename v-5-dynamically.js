// v-5..to Exple . 
// json data load 
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then (response => response.json())
      .then (data => displayUsers(data));
      //  console.log(data2)
}
function displayUsers(data){
  const ul = document.getElementById("users");
  // 'for of' loop are used to get specific data 
     for(const user of data){
      // console.log(user)
      // console.log(user.address)
      const li = document.createElement("li"); 
      // li.innerText = "ami $";//user.name;
      // dynamically a lot of property name are used to  
      li.innerText = `user name : ${user.name}  , user Id : ${user.id}
       , address : ${user.address} `;
      ul.appendChild(li);
    }
}