let liked = false;
let saved = false;
let likeCount = 39784;

function toggleLike() {
  const heart = document.getElementById("heart");

  if (!liked) {
    heart.src = "icons/heart-filled.png";
    likeCount++;
  } else {
    heart.src = "icons/heart.png";
    likeCount--;
  }

  liked = !liked;
  document.getElementById("likeCount").innerText =
    likeCount.toLocaleString("pt-BR");
}

function addCommentBox() {
  const commentSection = document.getElementById("commentSection");
  if (!document.getElementById("commentInput")) {
    const div = document.createElement("div");
    div.className = "comment-box";
    div.innerHTML = `
      <input id="commentInput" type="text" placeholder="Adicione um comentário...">
    `;
    commentSection.appendChild(div);
  }
}

function savePost() {
  const saveIcon = document.getElementById("save");
  if (!saved) {
    saveIcon.style.filter = "brightness(0)";
    alert("Post salvo!");
    saved = true;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const profileImg = document.querySelector(".profile-img");
  const profilePreview = document.querySelector(".profile-preview");

  if (window.matchMedia("(hover: none)").matches) {
    profileImg.addEventListener("click", () => {
      profilePreview.style.display =
        profilePreview.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
      if (
        !profileImg.contains(e.target) &&
        !profilePreview.contains(e.target)
      ) {
        profilePreview.style.display = "none";
      }
    });
  }
});
