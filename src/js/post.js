import { Req } from "./requests.js";
import { HomePage } from "./homePage.js";

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

        const user = await Req.postPosts(data);
        HomePage.renderPage();
      });
    });
  }
}

Post.postText();
