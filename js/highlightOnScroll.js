const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("header nav div ul li a");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        let current = "";
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute("id");
        }
    })
    console.log(current);
})

navLi.forEach(a => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
        a.classList.add("active")
    }
})