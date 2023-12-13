const menubtn = document.querySelector(".menubtn")
const Ul = document.querySelector("ul")

menubtn.addEventListener("click", () => {
    Ul.classList.toggle("active_menu")
})

function redirectToPhoneNumber() {
    const phoneNumber = "+998937110278";
    window.location.href = `tel:${phoneNumber}`;
}

function sendToTelegram() {
    // Input qiymatlarni olish
    // const firstName = document.getElementById('firstName').value;
    // const lastName = document.getElementById('lastName').value;
    // const phoneNumber = document.getElementById('phoneNumber').value;
    const Input = document.querySelectorAll('input');

    // Telegram Botning API manzilini va chat ID sini o'zgartiring
    const telegramBotAPI = 'https://api.telegram.org/bot6752979823:AAEQq-Eu8mE5p073b12-cfs6Y4WWdldl-iY/sendMessage';
    const chatId = '6462444239';

    // Xabarni tayyorlash
    const message = `Buyurtmachi:
  Ism: ${Input[0].value}
  Familiya: ${Input[1].value}
  Telefon raqami: +998${Input[2].value}`;

    // Telegramga so'rov yuborish uchun XMLHttpRequest obyektini yaratish
    const request = new XMLHttpRequest();

    // POST so'rovi uchun so'rovni tayyorlash
    request.open('POST', telegramBotAPI, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // So'rovni yuborish va javobni tekshirish
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            Input[0].value ="",
            Input[1].value ="",
            Input[2].value ="",
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Siz bilan tez orada bog'lanamiz",
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    // Xabarni so'rovga joylash va yuborish
    const params = `chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    request.send(params);
}