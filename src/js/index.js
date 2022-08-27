import { Req } from "./requests.js"

class indexPage{

    static async renderPage(){

        const token = localStorage.getItem("@kenzieBlog:token");
        if (token) window.location.assign("src/pages/homePage");

        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const submit = document.querySelector("button");

        submit.addEventListener("click", event => {
            event.preventDefault();

            const body = {
                email: email.value,
                password: password.value
            }

            Req.postLogin(body);
            if (token) window.location.assign("src/pages/homePage");

        })

    }

}

indexPage.renderPage()