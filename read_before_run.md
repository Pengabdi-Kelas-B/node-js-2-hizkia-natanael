# Library Management System

Project ini adalah sistem manajemen perpustakaan sederhana yang memungkinkan pengguna untuk menambahkan, memperbarui, dan menghapus data buku, penulis, kategori, peminjam, dan stok buku menggunakan Node.js dan MongoDB.

## Persyaratan

Pastikan Anda sudah menginstal perangkat lunak berikut:
- [Node.js](https://nodejs.org/) (versi terbaru direkomendasikan)
- [MongoDB](https://www.mongodb.com/) (pastikan MongoDB berjalan di komputer Anda)

## Instalasi

1. **Clone repositori ini** ke dalam direktori lokal Anda:
   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name

2. **Instal semua dependencies yang diperlukan** 
   ```bash
   npm install

## Menyiapkan Database di MongoDB

1. Pastikan **MongoDB** berjalan di `localhost:27017`.
   
2. **Konfigurasi MongoDB**:
   - Jika menggunakan URL koneksi yang berbeda, ubah konfigurasi MongoDB di file `seeder.js` atau di file konfigurasi lain yang relevan.
   
3. **Mengisi Data Awal (Seeding)**:
   - File `seeder.js` digunakan untuk mengisi data awal (categories, authors, books, borrowers, dan book stocks) ke dalam database.
   - Jalankan `seeder.js` dengan perintah berikut:
     ```bash
     node seeder.js
     ```
     
   - Jika berhasil, Anda akan melihat pesan konfirmasi seperti "Database seeded successfully!" di terminal.


## Menjalankan Server

Setelah data berhasil diisi, Anda dapat menjalankan server aplikasi dengan langkah berikut:

1. **Menjalankan Server**:
   - Gunakan perintah berikut untuk menjalankan server:
     ```bash
     npm start
     ```

2. **Akses Server**:
   - Server akan berjalan di `http://localhost:3000`.
   - Anda dapat mengakses server melalui browser atau menggunakan API client seperti **Insomnia** atau **Postman** untuk menguji endpoint API.
   
3. **Verifikasi**:
   - Pastikan server berjalan dengan baik dan siap menerima permintaan dari client.

Anda sekarang siap untuk mengakses aplikasi!

 