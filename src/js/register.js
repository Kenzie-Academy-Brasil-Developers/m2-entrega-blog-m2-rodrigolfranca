import { Req } from "./requests.js"

class Register{

    static registerUser(){

        const username = document.getElementById("username");
        const email = document.getElementById("emailRegister");
        const avatarUrl = document.getElementById("avatar");
        const password = document.getElementById("passwordRegister");
        const submit = document.getElementById("registerBtn");

        submit.addEventListener("click", async event => {
            event.preventDefault();

            const data = {
                username: username.value,
                email: email.value,
                avatarUrl: avatarUrl.value,
                password: password.value
            }

            const user = await Req.createUser(data);
        })

    }

}

Register.registerUser()