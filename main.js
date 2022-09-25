const container = document.querySelector(".container")
const generate = document.querySelector(".generate")
const qrInput = document.querySelector(".form input")
const qrImage = document.querySelector(".qrcode img")

generate.addEventListener("click", () => {
    const input = qrInput.value;
    if (!input) return false;

    qrImage.src = ' https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=' + input
    generate.textContent = "Generating QR Code..."

    qrImage.addEventListener("load", () => {
        container.classList.add("active");
        generate.textContent = "Generate QR Code"
    })
})