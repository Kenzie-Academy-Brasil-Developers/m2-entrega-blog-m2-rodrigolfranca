import { Req } from "./requests.js";

class HomePage {
    static userId = localStorage.getItem("@kenzieBlog:userId") || "";
    static token = localStorage.getItem("@kenzieBlog:token") || "";

    static async renderPage(){

        if (!this.token) window.location.assign("../../index.html");        

        const user = await Req.getUser(this.userId);
        console.log(user)

        const userPic = document.getElementById("userPic");
        userPic.src = user.avatarUrl;
        const userName = document.getElementById("userName");
        userName.innerText = user.username

        const posts = await Req.getPosts()
        posts.forEach(element => {
            const li = this.makeCard(element)
            document.querySelector("ul").appendChild(li)
        });

    }

    static makeCard(obj) {
        const li = document.createElement("li");
        li.id = obj.user.id

        const div = document.createElement("div");
        const figure = document.createElement("figure");
        const img = document.createElement("img")
        img.src = obj.user.avatarUrl;
        img.alt = `Foto do ${obj.user.username}`;
        const h2Mobile = document.createElement("h2");
        h2Mobile.classList.add("mobile")
        h2Mobile.innerText = obj.user.username;

        const buttonContainerDesktop = document.createElement("div");
        buttonContainerDesktop.classList.add("button-container", "desktop");
        const editButton = document.createElement("button");
        editButton.classList.add("editButton");
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deleteButton");

        figure.appendChild(img);

        div.appendChild(figure)
        div.appendChild(buttonContainerDesktop)

        const postContainer = document.createElement("div");
        postContainer.classList.add("post-container");

        const h2Desktop = document.createElement("h2");
        h2Desktop.classList.add("desktop");
        h2Desktop.innerText = obj.user.username;
        const p = document.createElement("p")
        p.innerText = obj.content;
        const span = document.createElement("span")
        const data = obj.createdAt.split("T")[0].split('-')
        span.innerText = `${data[2]}/${data[1]}/${data[0]}`
        const buttonContainerMobile = document.createElement("div")
        buttonContainerMobile.classList.add("button-container", "mobile");
        const editButtonMobile = document.createElement("button");
        editButton.classList.add("editButton");
        const deleteButtonMobile = document.createElement("button");
        deleteButton.classList.add("deleteButton");

        postContainer.appendChild(h2Desktop);
        postContainer.appendChild(p)
        postContainer.appendChild(span)
        postContainer.appendChild(buttonContainerMobile)

        if (this.userId === li.id) {
            buttonContainerMobile.appendChild(editButtonMobile);
            buttonContainerMobile.appendChild(deleteButtonMobile);
            buttonContainerDesktop.appendChild(editButton)
            buttonContainerDesktop.appendChild(deleteButton)
        }

        li.appendChild(div)
        li.appendChild(postContainer)

        return li;
    }
}

HomePage.renderPage()
