
if (JSON.parse(localStorage.getItem("users"))===null) {
    localStorage.setItem('users',JSON.stringify([]))
}


let regLog =document.getElementById("reg-log")
let logReg =document.getElementById("log-reg")



logReg.addEventListener("click", () => {

    login.style.display = 'none';
    register.style.display = 'flex';
})

regLog.addEventListener('click',()=>{
    register.style.display = 'none';
    login.style.display = 'flex';
})