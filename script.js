function createInputBox() {
  const elem = document.createElement("div");
  elem.setAttribute("class", "comment-reply-container");
  elem.innerHTML = `<input type="text" placeholder="Write your reply" class="input" />
          <button class="btn">Submit</button>`;
  return elem;
}

function createAddReply(text) {
  const elem = document.createElement("div");
  elem.setAttribute("class", "all-comments");
  elem.innerHTML = `<div class="card">
          <div class="text">${text}</div>
          <div class="reply">Add Reply</div>
        </div>`;
  return elem;
}

const commentContainer = document.querySelector(".comment-container");
commentContainer.addEventListener("click", (e) => {
  const closestCard = e.target.closest(".all-comments");
  if (e.target.classList.contains("reply")) {
    const inputEle = createInputBox();
    // commentContainer.appendChild(inputEle);
    closestCard.appendChild(inputEle);
  }
  if (e.target.classList.contains("btn")) {
    const text = document.querySelector(".input").value;

    // console.log(text);
    const elem = createAddReply(text);
    closestCard.appendChild(elem);
    const inputContainer = document.querySelector(".comment-reply-container");
    inputContainer.remove();
    // text.value = "";
  }
});
