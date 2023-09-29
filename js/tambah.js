document.addEventListener("DOMContentLoaded", function () {
    const dokterForm = document.getElementById("dokterForm");

    dokterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(dokterForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Kirim data ke server Node.js di sini menggunakan fetch atau XMLHttpRequest
        // Anda juga dapat menghubungkan ke database untuk menyimpan data

        // Contoh fetch
        fetch("/simpan-data-dokter", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                alert("Data dokter berhasil disimpan!");
                dokterForm.reset();
            } else {
                alert("Gagal menyimpan data dokter.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});
