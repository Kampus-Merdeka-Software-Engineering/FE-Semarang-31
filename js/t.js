const apiUrl = 'http://localhost:3000/dokter';

// Temukan elemen HTML dengan ID 'dokter'
const dokterSelect = document.getElementById('dokter');

// Buat elemen option baru dengan nilai kosong


// Kirim permintaan GET menggunakan fetch
fetch(apiUrl)
  .then(response => {
    // Periksa status respons HTTP
    if (!response.ok) {
      throw new Error('Gagal mengambil data dari API');
    }
    // Menguraikan respons JSON
    return response.json();
  })
  .then(data => {
    // Pastikan data yang diterima adalah array
    if (Array.isArray(data)) {
      // Loop melalui data dan tambahkan setiap elemen sebagai option baru
      data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id; // Ganti 'id' dengan properti yang ingin Anda gunakan sebagai nilai option
        option.textContent = item.nama; // Ganti 'nama' dengan properti yang ingin Anda gunakan sebagai teks option
        dokterSelect.appendChild(option);
      });
    } else {
      console.error('Data yang diterima bukanlah sebuah array.');
    }
  })
  .catch(error => {
    console.error(error);
  });
