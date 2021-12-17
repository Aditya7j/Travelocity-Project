var btn = document.querySelector("button").addEventListener("click",createin)

var userSignArr = JSON.parse(localStorage.getItem("personData")) || [];

function createin(){
console.log("here")
var email = document.querySelector("#apple").value
var name = document.getElementById("name").value
var last = document.getElementById("last").value
var pass = document.getElementById("pass").value

var usercredd = {
    EmailAddress:email,
    Firstname:name,
    Lastname:last,
    password:pass,

}

userSignArr.push(usercredd)
localStorage.setItem("personData",JSON.stringify(userSignArr));

window.location.href = "create2.html"
}