import { Req } from "./requests.js";
import { HomePage } from "./homePage.js";

class Modal {
    static showModal(){

        const editModal = document.querySelectorAll(".editModal");
        const modal = document.querySelector('.modal')

        editModal.forEach( button =>{

            button.addEventListener("click", (event) => {

                localStorage.setItem("@kenzieBlog:item", event.target.id)
                modal.classList.toggle("hidden");                

            });

        });  

    }

    static editPost(){

        const modalEditButton = document.querySelector(".modal-edit-button");        
        modalEditButton.addEventListener("click", (e) => {
            e.preventDefault();
            const modal = document.querySelector('.modal')

            const body = {
                content: document.getElementById("edited-content").value
            }

            await Req.patchPost(body)
            modal.classList.toggle("hidden");
            HomePage.renderPage();

        });        

    }    

}