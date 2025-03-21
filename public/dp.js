// Data Produk (Simulasikan data dari database atau API)
const products = [
    {
        id: 1,
        name: "Produk 1",
        description: "Ini adalah deskripsi lengkap untuk Produk 1. Produk ini sangat berkualitas dan direkomendasikan.",
        price: "Rp 100.000",
        image: "https://via.placeholder.com/600"
    },
    {
        id: 2,
        name: "Produk 2",
        description: "Ini adalah deskripsi lengkap untuk Produk 2. Produk ini sangat berkualitas dan direkomendasikan.",
        price: "Rp 200.000",
        image: "https://via.placeholder.com/600"
    },
    {
        id: 3,
        name: "Produk 3",
        description: "Ini adalah deskripsi lengkap untuk Produk 3. Produk ini sangat berkualitas dan direkomendasikan.",
        price: "Rp 300.000",
        image: "https://via.placeholder.com/600"
    }
];

// Ambil ID produk dari URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Temukan produk berdasarkan ID
const product = products.find(p => p.id == productId);

// Tampilkan detail produk
if (product) {
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = product.price;
    document.getElementById("productDescription").textContent = product.description;
    document.getElementById("productImage").src = product.image;
} else {
    // Jika produk tidak ditemukan, tampilkan pesan error
    document.getElementById("productName").textContent = "Produk tidak ditemukan";
    document.getElementById("productPrice").textContent = "";
    document.getElementById("productDescription").textContent = "Maaf, produk yang Anda cari tidak tersedia.";
    document.getElementById("productImage").src = "https://via.placeholder.com/600?text=Produk+Tidak+Ditemukan";
}