// Buat objek XMLHttpRequest atau gunakan Axios sesuai contoh sebelumnya
const xhr = new XMLHttpRequest();

const url = 'http://localhost:3000/dokter';

xhr.open('GET', url, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    // Dapatkan elemen tbody tabel di dalam file HTML
    const tbody = document.getElementById('data-dok');

    // Buat string HTML untuk semua baris data
    let html = '';

    html += '<tr>';
    html += '<th>Nama</th>';
    html += '<th>Jenis kelamin</th>';
    html += '<th>Spesialis</th>';
    html += '</tr>';

    data.forEach((item) => {
      html += `
    
        <tr>
          <td>${item.nama}</td>
          <td>${item.jenis_kelamin}</td>
          <td>${item.spesialis}</td>
        </tr>
      `;
    });

    // Set innerHTML dari tbody untuk mengisi tabel
    tbody.innerHTML = html;
  } else {
    console.error('Gagal mengambil data');
  }
};

xhr.onerror = function () {
  console.error('Terdapat error saat melakukan permintaan.');
};

xhr.send();
