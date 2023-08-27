function showComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.json())
    .then((data) => displayComment(data));
}

function displayComment(comments) {
  const commentsContainer = document.getElementById("comments-container");
  for (const comment of comments) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add('comment-style')
    commentDiv.innerHTML = `<h3>name: ${comment.name} </h3>
    <p>email: ${comment.email} </p>
    <p>body: ${comment.body} </p>`;
    commentsContainer.appendChild(commentDiv);
  }
}

showComments();
