const navBar = document.querySelector(".navbar");
const navDesktop = document.querySelector(".nav_desktop");

navBar.addEventListener("click", () => {
    navDesktop.classList.toggle("nav_visible")
})

navDesktop.addEventListener("click",()=>{
    navDesktop.classList.remove("nav_visible")
})