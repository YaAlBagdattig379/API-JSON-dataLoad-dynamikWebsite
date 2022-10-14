// // json data load 
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => displayPosts(data))
}
loadPosts()
function displayPosts(posts){
    const divContainer = document.getElementById("posts");
    for(const post of posts){
        const div = document.createElement("div");
        div.classList = ('posts');
        div.innerHTML = `id : ${post.id}, body : ${post.body}`
        divContainer.appendChild(div);
        // console.log(post.id)
    }
    // console.log(posts)
}
// console.log("hello b pracitce")