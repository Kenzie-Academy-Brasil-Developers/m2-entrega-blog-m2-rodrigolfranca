import { Req } from "./requests.js"

class Register{

    static registerUser(){

        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const avatarUrl = document.getElementById("avatar");
        const password = document.getElementById("password");
        const submit = document.getElementById("registerBtn");

        submit.addEventListener("click", (event) => {
            event.preventDefault();

            const data = {
                username: username.value,
                email: email.value,
                avatarUrl: avatarUrl.value,
                password: password.value
            }

            Req.createUser(data)
        })

    }

}

Register.registerUser()