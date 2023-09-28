let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toogle('fa-times')
}

// Fungsi untuk menampilkan pop-up
function openform() {
    document.getElementById("bukaform").style.display = "block";
}

// Fungsi untuk menutup pop-up
function tutupform() {
    document.getElementById("bukaform").style.display = "none";
}


