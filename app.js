const changebtn = document.querySelectorAll(".changebtn");
const body = document.querySelector("body");

changebtn.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
            const btnid = btn.getAttribute('id');
            if(btnid === "Red"){
                body.style.backgroundColor = "#e5383b";
            }else if(btnid === "Yellow"){
                body.style.backgroundColor = "#ffd60a";
            } else if(btnid === "Green"){
                body.style.backgroundColor = "#a7c957";
            } else if(btnid === "Blue"){
                body.style.backgroundColor = "#90e0ef";
            } else{
                body.style.backgroundColor = "#fb8b24";
            };
    });
})