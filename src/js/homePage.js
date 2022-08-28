{/* <li>
    <div>
        <figure>
            <img src="../assets/user-demo.png" alt="Nome do Usuário">
        </figure>
        <h2 class="mobile">Usuário</h2>
        <div class="button-container desktop">
            <button class="editButton"></button>
            <button class="deleteButton"></button>
        </div>
    </div>
    <div class="post-container">
        <h2 class=desktop>Usuário</h2>
        <p>Post Text - Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.</p>
        <span>22/08/2022</span>
        <div class="button-container mobile">
            <button class="editButton"></button>
            <button class="deleteButton"></button>
        </div>
    </div>
</li> */}

class HomePage {
    static userId = localStorage.getItem("@kenzieBlog:userId") || "";
    static token = localStorage.getItem("@kenzieBlog:token") || "";

    static renderPage(){

        if (!this.token) window.location.assign("../../index.html");

        const user = Req.getUser(this.userId);

        const userPic = document.getElementById("userPic");
        userPic.src = user.avatarUrl;

        



    }
}
