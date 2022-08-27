export class Req {

    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static headers = {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${this.token}`
    }

    static async postLogin(body){

        const options = {
            method: "POST",            
            headers: this.headers,
            body: JSON.stringify(body)
        }

        const response = await fetch(`${this.baseUrl}/users/login`, options)
        .then(data => data.json())
        .then(res => res)
        .catch(err => console.log(err))
        
        localStorage.setItem("@kenzieBlog:token", response.token)
        localStorage.setItem("@kenzieBlog:userId", response.userId)

        return response

    }

}