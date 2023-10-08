document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const jenis_kelamin = document.getElementById("jenis_kelamin").value;
        const no_hp = document.getElementById("no_hp").value;
        const email = document.getElementById("email").value;
        const tgl_kons= document.getElementById("tgl_kons").value;
        const pil_wkt= document.getElementById("pil_wkt").value;
      
        
        

        // Kirim data ke server Node.js di sini menggunakan fetch atau XMLHttpRequest
        // Anda juga dapat menghubungkan ke database untuk menyimpan data

        // Contoh fetch
        fetch("http://localhost:3000/bookings", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              nama: nama,
              jenis_kelamin: jenis_kelamin,
              no_hp: no_hp,
              email: email,
              tgl_kons: tgl_kons,
              pil_wkt: pil_wkt,
            }),
          })
            .then((response) => {
              if (response.ok) {
                alert("Registrasi berhasil");
              } else {
                alert("Registrasi gagal");
              }
            })
            .catch((error) => {
              alert(`Terdapat error: ${error.message}`);
            });
        })});
