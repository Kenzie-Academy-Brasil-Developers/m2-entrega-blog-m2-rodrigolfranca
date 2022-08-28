import { Req } from "./requests.js";
import { HomePage } from "./homePage.js";
import { Modal } from "./editModal.js";

class Post {
  static postText() {
    const newPost = document.getElementById("newPost");
    const PostBtn = document.querySelectorAll(".postButton");

    PostBtn.forEach(PostBtn => {
      PostBtn.addEventListener("click", async (event) => {
        event.preventDefault();

        const data = {
          content: newPost.value,
        };

        newPost.value = "";

        const user = await Req.postPosts(data);
        await HomePage.renderPage();
        Modal.showModal();
        Modal.editPost();        
      });
    });
  }
}

Post.postText();
