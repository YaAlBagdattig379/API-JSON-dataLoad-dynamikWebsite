// json data load 
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => displayPosts(data))
}
loadPosts();

function  displayPosts(posts){
    const postsContainer = document.getElementById("posts")
    for(const post of posts){
        const div = document.createElement("div");
        // in here added  class style ="posts"
        div.classList.add("posts")
        // set in html tag
        div.innerHTML = `<h2>${post.title}</h2>, <p>${post.id}</p>,
        <small>${post.body}</small>` ;
        // appendChild
        postsContainer.appendChild(div);
        // console.log(post.id)
    }
    // console.log(posts)
}
// console.log("hello this is v-6")