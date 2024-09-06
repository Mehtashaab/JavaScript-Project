const username = document.getElementById("name")
const button = document.getElementById("button")
const setusername = document.getElementById('user-name')

button.addEventListener("click",()=>{
    const value = username.value
    localStorage.setItem("name",value)
    location.reload();
})

window.addEventListener("load",()=>{
    const value = localStorage.getItem('name')
    setusername.innerText = value;
})