// Contoh script sederhana untuk animasi saat scroll atau pesan selamat datang
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 10%;';
    } else {
        nav.style.padding = '20px 10%;';
    }
});

console.log("Website Kursus Bahasa Inggris siap digunakan!");