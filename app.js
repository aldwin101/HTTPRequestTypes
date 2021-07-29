                        // POST Request
let button = document.getElementById('submitPost');

function postInput(){
    axios.request({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        data: {
            title: titleInput.value,
            body: bodyInput.value
        }
    }) .then(postingSuccess).catch(postingFailed);
}

function postingSuccess(success){
    console.log(success);
    document.getElementById('message').innerText = "Successfully uploaded"
}

function postingFailed(){
    console.log();
    document.getElementById('message').innerText = "Post was not uploaded. Please try again!"
}

button.addEventListener('click', postInput)


                        // PATCH Request
axios.request({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    data: {
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
}).then(patchingSuccess).catch(patchingFailed);

function patchingSuccess(success){
console.log(success);
}

function patchingFailed(error){
console.log(error);
}


                        // DELETE Request
axios.request({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
    data: {
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
}).then(successfullyDeleted).catch(failedToDelete);


function successfullyDeleted(success){
console.log(success);
}

function failedToDelete(error){
console.log(error);
}


                        // GET Request
axios.get("https://jsonplaceholder.typicode.com/posts").then(getSuccess).catch(getFailed);

let postContainer = document.getElementById('postContainer');
let postList = [];

function getSuccess(response){
        console.log(response);
        postList = response.data;
        let posts = Object.keys(postList);
        for (let i=0; i < posts.length; i++){
        let postuserID = document.createElement('p');
            postuserID.innerText = postList[i].userId;
            postContainer.appendChild(postuserID);
        
            let postTitle = document.createElement('p');
            postTitle.innerText = postList[i].title;
            postContainer.appendChild(postTitle);
        
            let postBody = document.createElement('p');
            postBody.innerText = postList[i].body;
            postContainer.appendChild(postBody);
        }
    }

function getFailed(error){
console.log(error);
}