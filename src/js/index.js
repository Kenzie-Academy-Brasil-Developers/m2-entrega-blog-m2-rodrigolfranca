import { Req } from "./requests.js"

class indexPage{

    static async renderPage(){

        const token = localStorage.getItem("@kenzieBlog:token") || "";
        if (token) window.location.assign("src/pages/homePage.html");

        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const submit = document.getElementById("loginBtn");

        submit.addEventListener("click", event => {
            event.preventDefault();

            const body = {
                email: email.value,
                password: password.value
            }

            Req.postLogin(body);
            if (token) window.location.assign("src/pages/homePage.html");

        })

    }

}

indexPage.renderPage()