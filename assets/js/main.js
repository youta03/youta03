// Mendapatkan elemen container dan tombol Sign-in & Sign-up
const container = document.querySelector('.container');
const btnSignIn = document.querySelector('.btnSign-in');
const btnSignUp = document.querySelector('.btnSign-up');

// Event listener untuk tombol Sign-in, menambahkan kelas 'active' pada container
btnSignIn.addEventListener('click', () => {
    container.classList.add('active');
});

// Event listener untuk tombol Sign-up, menghapus kelas 'active' pada container
btnSignUp.addEventListener('click', () => {
    container.classList.remove('active');
});

// Fungsi untuk menangani proses login
function handleLogin(event) {
    event.preventDefault(); // Mencegah form dari pengiriman secara default (reload page)

    // Ambil nilai email dan password dari input form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lakukan validasi login di sini jika diperlukan
    // Misalnya, memeriksa apakah email dan password kosong atau sesuai format

    // Setelah login berhasil, arahkan ke halaman dashboard
    window.location.href = '/dashboard/index.html'; // Mengarahkan user ke halaman dashboard
}
