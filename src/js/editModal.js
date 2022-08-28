import { Req } from "./requests.js";
import { HomePage } from "./homePage.js";

export class Modal {
    static showModal(){

        const editModal = document.querySelectorAll(".editModal");
        const modal = document.getElementById('modal');

        editModal.forEach( button => {

            button.addEventListener("click", (event) => {

                localStorage.setItem("@kenzieBlog:item", event.target.value)
                modal.classList.remove("hidden");

            });

        });  

    }

    static editPost(){

        const modalEditButton = document.querySelector(".modal-edit-button");        
        modalEditButton.addEventListener("click", async (e) => {
            e.preventDefault();
            const modal = document.querySelector('.modal')
            const textarea = document.getElementById("edited-content")

            const content = textarea.value

            const body = {
                content: content
            }

            textarea.value = ""
            
            await Req.patchPost(body)
            modal.classList.add("hidden");
            await HomePage.renderPage();
            Modal.showModal();
            Modal.editPost();

        });        

    }    

}