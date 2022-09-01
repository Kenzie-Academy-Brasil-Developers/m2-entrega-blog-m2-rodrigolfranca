export class Req {

    static baseUrl = "https://blog-m2.herokuapp.com"
    static token = localStorage.getItem("@kenzieBlog:token") || ""
    static userId = localStorage.getItem("@kenzieBlog:userId") || ""
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
        
        if (response.token) localStorage.setItem("@kenzieBlog:token", response.token)
        if (response.token) localStorage.setItem("@kenzieBlog:userId", response.userId)

        return response

    }

    static async createUser(data){

        const options = {
            method: "POST",            
            headers: this.headers,
            body: JSON.stringify(data)
        }

        const newUser = await fetch(`${this.baseUrl}/users/register`, options)
        .then(res => {
            return (res.status === 200)? res.json() : {message: "Create user failed"}
        })
        .then(res => res)
        .catch(err => console.log(err))
        
        return newUser
    }

    static async getUser() {

        const options = {
            method : "GET",
            headers : this.headers
        }        

        const user = await fetch(`${this.baseUrl}/users/${this.userId}`, options)
        .then(res => res.json())
        .then(res => res)

        return user

    }

    static async getPosts(){

        const options = {
            method: "GET",
            headers: this.headers
        }

        const posts = await fetch(`${this.baseUrl}/posts?page=1`, options)
        .then(res => res.json())
        .then(res => res.data)
        .catch(error => console.log(error))

        return posts

    }
    
    static async patchPost(body){

        const options = {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        }

        const id = localStorage.getItem("@kenzieBlog:item")

        const patched = await fetch(`${this.baseUrl}/posts/${id}`, options)
        .then(res => res.json())
        .then(res => res)
        .catch(error => console.log(error))

        return patched

    }
    
    static async postPosts(data){

        const options = {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(data)
        }
        const posts = await fetch(`${this.baseUrl}/posts`, options)
        .then(res => res.json())
        .then(res => res.data)
        .catch(error => console.log(error))

        return posts
}
    static async deletePosts(){
        const options = {
            method: "DELETE",
            headers: this.headers,
            
        }
        const id = localStorage.getItem("@kenzieBlog:item")
        const post = await fetch(`${this.baseUrl}/posts/${id}`, options)
        .then(res => res.json())
        .then(res => res.data)
        .catch(error => console.log(error))

        return post
    }
}
