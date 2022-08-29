import { Req } from "./requests.js";
import { HomePage } from "./homePage.js";
import { Modal } from "./editModal.js"

export class dltModal {
    static showdltModal(){

        const delBtn = document.querySelectorAll(".deleteButton");
        const modal = document.querySelector(".section-tog");
        
        delBtn.forEach( e =>
            e.addEventListener("click", (e) => { 
                console.log(modal)
                localStorage.setItem("@kenzieBlog:item", e.target.value)  
                modal.classList.remove("hidden");
            }))
        }

    static dltPost(){
        const modal = document.querySelector(".section-tog");
        const deletePostBtn = document.querySelector(".deleteBtn");        
        deletePostBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            modal.classList.add("hidden");
            console.log(modal)
            await Req.deletePosts()
            await HomePage.renderPage();
            Modal.showModal();
            Modal.editPost();   
            dltModal.showdltModal();
            dltModal.dltPost();
                     

        });        

    }    

}