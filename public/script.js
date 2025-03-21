// Ambil elemen yang diperlukan
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const messageElement = document.getElementById("message");

// Fungsi untuk beralih antara Login dan Register
loginTab.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    registerForm.classList.add("hidden");
    loginTab.classList.add("border-blue-500", "text-blue-500");
    registerTab.classList.remove("border-blue-500", "text-blue-500");
    registerTab.classList.add("text-gray-500");
    messageElement.textContent = ""; // Reset pesan
});

registerTab.addEventListener("click", () => {
    registerForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    registerTab.classList.add("border-blue-500", "text-blue-500");
    loginTab.classList.remove("border-blue-500", "text-blue-500");
    loginTab.classList.add("text-gray-500");
    messageElement.textContent = ""; // Reset pesan
});

// Validasi Login
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Contoh validasi sederhana
    if (username === "admin" && password === "12345678") {
        messageElement.textContent = "Login berhasil!";
        messageElement.classList.remove("text-red-500");
        messageElement.classList.add("text-green-500");
    }
    
    else {
        messageElement.textContent = "Username atau password salah!";
        messageElement.classList.remove("text-green-500");
        messageElement.classList.add("text-red-500");
    }
});

// Validasi Register
registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    // Contoh validasi sederhana
    if (username && email && password) {
        messageElement.textContent = "Registrasi berhasil!";
        messageElement.classList.remove("text-red-500");
        messageElement.classList.add("text-green-500");
    } else {
        messageElement.textContent = "Harap isi semua field!";
        messageElement.classList.remove("text-green-500");
        messageElement.classList.add("text-red-500");
    }
});

