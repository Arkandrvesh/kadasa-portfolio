# KADASA Website Update Plan

Berdasarkan permintaan Kakak, saya telah membaca detail presentasi dari link Canva dan merangkum penyesuaian yang akan kita lakukan. Perubahan ini cukup besar karena menambahkan bagian baru (Daftar Harga/Paket) pada website.

## Proposed Changes

### 1. Penyesuaian Foto Founder & Info Kontak
- **Foto Saddam & Azka**: Menyesuaikan `object-position: top` pada komponen `<Image>` di bagian `AboutKadasa.tsx` agar wajah Saddam dan Azka tidak terpotong (tampil *full*).
- **Kontak Update**: Memperbarui file `config/site.ts` dengan email (`kadasatech.ofc@gmail.com`) dan nomor WhatsApp (`081291123534`).

### 2. Penambahan Bagian Paket Penjualan (Pricing Section)
Saya akan membuat sebuah komponen baru bernama `PricingSection.tsx` yang akan menampilkan 4 paket penjualan persis seperti di Canva:

- **BASIC (Mulai Rp 1.000.000)**
  - Domain Web.id, 4 Menu, Hosting 500MB
  - Template WP Premium, SSL, Social Media Integration
- **STARTER (Mulai Rp 2.500.000)**
  - Domain .com, 6 Menu, Hosting 3GB
  - 5ms Server Response, Google Map, Stats
- **GROWTH (Mulai Rp 3.500.000)**
  - Free Custom Domain, 10 Menu, Hosting 3GB
  - Annual Renewal, WA/Phone integration
- **CUSTOM (Mulai Rp 12.000.000)**
  - Free Custom Domain, 15-20 Menu, Hosting 5GB
  - CMS/Blog System, 2 Business Emails, Marketplace Integration, Super Fast Server

Bagian daftar harga ini akan didesain secara premium, responsif, dan menyatu dengan tema gelap (*dark mode*) KADASA.

### 3. Integrasi & Navigasi
- Memperbarui `app/page.tsx` untuk memasukkan `PricingSection.tsx` ke dalam struktur halaman utama.
- Memperbarui menu navigasi di `Navbar.tsx` dan `Footer.tsx` untuk menambahkan link **"Pricing / Paket"**.

## Open Questions

> [!IMPORTANT]
> **Posisi Daftar Harga:** Saya berencana menempatkan bagian Paket Harga ini tepat di bawah bagian "Services" atau "Portfolio". Apakah Kakak setuju dengan posisi ini?

> [!NOTE]
> **Konten Tambahan:** Apakah teks pengantar untuk bagian harga ini cukup menggunakan: *"Pilih paket yang sesuai dengan kebutuhan dan skala bisnis Anda"* atau ada kata-kata khusus yang Kakak inginkan?

Silakan klik **Proceed** jika rencana ini sudah sesuai, atau balas dengan revisi jika ada yang ingin diubah!
