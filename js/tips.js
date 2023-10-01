// script.js
document.addEventListener("DOMContentLoaded", function () {
    const exercisePopup = document.getElementById("exercise-popup");
    const menuPopup = document.getElementById("menu-popup");
    const sleepPopup = document.getElementById("sleep-popup");

    const closeExercisePopup = document.getElementById("close-exercise-popup");
    const closeMenuPopup = document.getElementById("close-menu-popup");
    const closeSleepPopup = document.getElementById("close-sleep-popup");

    const tip1 = document.getElementById("tip1");
    const tip2 = document.getElementById("tip2");
    const tip3 = document.getElementById("tip3");
    const tip4 = document.getElementById("tip4");
    const tip5 = document.getElementById("tip5");
    const tip6 = document.getElementById("tip6");

    tip1.addEventListener("click", function () {
        exercisePopup.style.display = "block";
    });

    tip2.addEventListener("click", function () {
        menuPopup.style.display = "block";
    });

    tip3.addEventListener("click", function () {
        sleepPopup.style.display = "block";
    });
    tip4.addEventListener("click", function () {
        sleepPopup.style.display = "block";
    });

    tip5.addEventListener("click", function () {
        sleepPopup.style.display = "block";
    });
    tip6.addEventListener("click", function () {
        sleepPopup.style.display = "block";
    });

    closeExercisePopup.addEventListener("click", function () {
        exercisePopup.style.display = "none";
    });

    closeMenuPopup.addEventListener("click", function () {
        menuPopup.style.display = "none";
    });

    closeSleepPopup.addEventListener("click", function () {
        sleepPopup.style.display = "none";
    });
    // Fungsi untuk menampilkan gambar berikutnya
    nextButton.addEventListener('click', () => {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    });

    // Fungsi untuk menampilkan gambar sebelumnya
    prevButton.addEventListener('click', () => {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        images[currentImageIndex].style.display = 'block';
    });
});

