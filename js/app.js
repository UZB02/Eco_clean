const menubtn = document.querySelector(".menubtn")
const Ul = document.querySelector("ul")

menubtn.addEventListener("click", () => {
    Ul.classList.toggle("active_menu")
})

function redirectToPhoneNumber() {
    const phoneNumber = "+998937110278";
    window.location.href = `tel:${phoneNumber}`;
}