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

3. **Menyiapkan Database di MongoDB** 
   ```bash
   Pastikan MongoDB berjalan di localhost:27017.
   Ubah konfigurasi MongoDB di seeder.js (atau di file konfigurasi lainnya jika ada) jika Anda menggunakan URL koneksi yang berbeda.
   File seeder.js digunakan untuk mengisi data awal (categories, authors, books, borrowers, dan book stocks) ke dalam database.
   Jalankan file seeder.js dengan perintah node seeder.js

2. **Menjalankan Server** 
   ```bash
   Setelah data berhasil diisi, Anda dapat menjalankan server aplikasi dengan perintah npm start
   Server akan berjalan di http://localhost:3000. Anda dapat mengaksesnya melalui browser atau menggunakan API client seperti Insomnia.
 