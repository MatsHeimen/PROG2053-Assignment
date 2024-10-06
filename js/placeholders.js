let postContainer = document.getElementById("PostContainer");
let startingRows = 4;
let pageNr = 0

//laster inn én rad med 3 posts
function loadRow(i){
        let newRow = document.createElement("div")
        newRow.classList.add("row")
    for(i=1;i<=3;i++){ // looper 3 ganger
        postNumber = (i+(3*pageNr))
        url = "https://jsonplaceholder.typicode.com/posts/"
        url+=postNumber

        //lager elementene og legger til klassene

        let newPost = document.createElement("div")
        newPost.classList.add("post")

        newRow.appendChild(newPost)

        //henter data fra én post
        console.log(postNumber)
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            title = document.createElement("h2")
            body = document.createElement("p")

            title.innerHTML = json.title;
            body.innerHTML = json.body;

            newPost.append(title)
            newPost.append(body)
        })

        //legger raden som child av postContainer
        postContainer.appendChild(newRow)
    }
    pageNr++; 
}

//Eventlistener som venter på at brukeren har scrollet helt nederst på siden og kaller for å laste inn en rad.
window.addEventListener('scroll', ()=>{
    if(window.scrollY + window.innerHeight + 1 >= document.documentElement.scrollHeight){
        loadRow();
    }
})

// laster inn de første radene
for(i=0;i<=startingRows;i++){
    loadRow(pageNr);
}
