// Buat objek XMLHttpRequest atau gunakan Axios sesuai contoh sebelumnya
const xhr = new XMLHttpRequest();

const url = 'http://localhost:3000/booking';

xhr.open('GET', url, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);

    // Dapatkan elemen tbody tabel di dalam file HTML
    const tbody = document.getElementById('data-body');

    // Buat string HTML untuk semua baris data
    let html = '';

    html += '<tr>';
    html += '<th>Nama</th>';
    html += '<th>Jenis kelamin</th>';
    html += '<th>No Handphone</th>';
    html += '<th>E-mail</th>';
    html += '<th>Dokter</th>';
    html += '<th>Tanggal konsul</th>';
    html += '<th>Waktu Konsul</th>';
    html += '</tr>';

    data.forEach((item) => {
      html += `
    
        <tr>
          <td>${item.nama}</td>
          <td>${item.jenis_kelamin}</td>
          <td>${item.no_hp}</td>
          <td>${item.email}</td>
          <td>${item.dokter}</td>
          <td>${item.tgl_kons}</td>
          <td>${item.pil_wkt}</td>
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
