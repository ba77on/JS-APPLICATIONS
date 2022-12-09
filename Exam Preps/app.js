import { html, render } from "./node_modules/lit-html/lit-html.js"
import page from "./node_modules/page/page.mjs"
import { welcomeView } from "./views/welcomeView.js"
import { loginVie } from "./views/loginView.js"
import { registerView } from "./views/registerView.js"
import { logoutFunc } from "./views/logoutFunc.js"
import { catalogView } from "./views/catalogView.js"
import { detailsView } from "./views/detailsView.js"
import { createView } from "./views/createPet.js"

page('/', welcomeView)
page('/home', welcomeView)
page('/login', loginVie)
page("/register", registerView)
page("/catalog", catalogView)
page("/details/:detailsId", detailsView)
page("/create", createView)
// page("details/:detailsId/delete", deleteView)
document.getElementById("usersLogout").addEventListener("click", logoutFunc)




export function updateFunc() {

    let guestsLogin = document.getElementById("guestsLogin")
    let guestsRegister = document.getElementById("guestsRegister")

    let usersCreate = document.getElementById("usersCreate")
    let usersLogout = document.getElementById("usersLogout")

    if (localStorage.length == 0) {
        guestsLogin.style.display = "inline"
        guestsRegister.style.display = "inline"
        usersCreate.style.display = "none"
        usersLogout.style.display = "none"

    } else {
        guestsLogin.style.display = "none"
        guestsRegister.style.display = "none"
        usersCreate.style.display = "inline"
        usersLogout.style.display = "inline"
    }
}
updateFunc()

page.start(welcomeView)