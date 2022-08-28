export class Render {
    static renderDel(){
        const main = document.querySelector("main");
        main.classList.toggle("main-tog")
        const deleteBox = document.createElement("div");
        deleteBox.classList.add("deleteBox");
        const deleteAns = document.createElement("p");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("deleteBtn")
        
        deleteAns.innerText = "Deseja Deletar esse poster?";
        deleteBtn.innerText = "Deletar";

        deleteBox.appendChild(deleteAns);
        deleteBox.appendChild(deleteBtn)
    }
}