🎯 Ana Kavramlar
1- HTML (İskelet)
2- DOM (Veriyi Ekrana Basma)
3- Events (Tıklamalar, Form Gönderme)
4- Storage (Verileri Kaydetme)
5- Fonksiyonlar (Kodun Mantığı)

📌 Film Ekleme Uygulaması
│
├── 🏗️ **HTML (Görsel Kısım)**
│   ├── Form (Film İsmi, Yönetmen, Afiş URL)
│   ├── Film Listesi (Tablo)
│   ├── Silme Butonları
│   ├── Mesajlar (Başarı & Hata)
│
├── 🎨 **UI (Arayüzü Güncelleme)**
│   ├── `addFilmToUI(film)`  → Filme UI içinde tabloya ekler
│   ├── `loadAllFilms(films)` → Sayfa açılınca filmleri yükler
│   ├── `deleteFilmFromUI(element)` → Film satırını siler
│   ├── `clearAllFilmsFromUI()` → Tüm filmleri temizler
│   ├── `displayMessage(message, type)` → Mesajları gösterir
│
├── ⚙️ **Events (Kullanıcı Etkileşimi)**
│   ├── Form Submit → `addFilm()`
│   ├── Sayfa Yüklenince → `loadAllFilms()`
│   ├── Film Silme → `deleteFilm()`
│   ├── Tüm Filmleri Temizleme → `clearAllFilms()`
│
├── 💾 **Storage (Verileri Kaydetme)**
│   ├── `addFilmToStorage(film)` → Filme LocalStorage ekler
│   ├── `getFilmsFromStorage()` → Filmleri LocalStorage'dan alır
│   ├── `deleteFilmsFromStorage(title)` → Belirli bir filmi siler
│   ├── `clearAllFilmsFromStorage()` → Tüm filmleri temizler
│
└── 🔄 **Proje Akışı**
    ├── Kullanıcı formu doldurur ve gönderir → `addFilm()`
    ├── Film UI'ye eklenir → `addFilmToUI()`
    ├── Film LocalStorage'e eklenir → `addFilmToStorage()`
    ├── Sayfa yenilenirse → `loadAllFilms()` filmleri tekrar yükler
    ├── Kullanıcı filmi silerse → `deleteFilm()`
    ├── Kullanıcı tüm filmleri temizlerse → `clearAllFilms()`
