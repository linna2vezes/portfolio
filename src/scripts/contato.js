

window.onload = () => {
const form = document.querySelector("#form");
form.addEventListener("submit", event => {
  event.preventDefault();
const formData = new FormData(form)
const name = formData.get("name")
const email = formData.get("email")
const comment = formData.get("comment")
const data = {nome: name , email: email, comentario: comment}
// const students = { nome: "Mari" , age: "21"}
console.log(data)
alert("dados enviados")
event.target.reset()
})

}