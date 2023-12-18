const menubtn = document.querySelector(".menubtn")
const Menu_bar = document.querySelector(".menu_bar")

menubtn.addEventListener("click", () => {
    Menu_bar.classList.toggle("active_menu")
})

function redirectToPhoneNumber() {
    const phoneNumber = "+998937110278";
    window.location.href = `tel:${phoneNumber}`;
}