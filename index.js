const tutorias = document.getElementById("menu__item--tutorias");
const sub_menu_tutorias = document.getElementById("submenu--tutorias")

tutorias.onclick = function() {
    sub_menu_tutorias.classList.toggle("visible")
}

let intViewportWidth = window.innerWidth;
if (intViewportWidth <= 768) {
    const menu_mobile = document.getElementById("menu_mobile")
    const submenu_mobile = document.getElementById("submenu--mobile")
    const tutorias_mobile = document.getElementById("mobile_tutorias")
    const acordion = document.getElementById("acordion")
    const li_tutorias = document.getElementById("li_tutorias")

    menu_mobile.onclick = function() {
        if (submenu_mobile.style.display === "block") {
            submenu_mobile.style.display = "none";
        } else {
            submenu_mobile.style.display = "block"
        }
    }

    li_tutorias.onclick = function() {
        if (acordion.style.display === "block") {
            acordion.style.display = "none";
        } else {
            acordion.style.display = "block"
        }
    }
}