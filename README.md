# 🎓 Mühendislik öğrencileri için İnteraktif Akademik Planlayıcı & GPA Hesaplayıcı

## 🚀 Canlı Demo

Projeyi hemen dene: [İnteraktif Akademik Planlayıcı](https://fen1kks.github.io/Interaktif-Akademik-Planlayici/)

## 📝 Kısa Özet

Mühendislik öğrencileri için özel olarak geliştirilmiş; ders ön koşullarını görselleştiren, akademik rotanızı planlamanızı sağlayan ve gelecekteki not ortalamanızı simüle eden interaktif bir web aracı.

## 📥 Kurulum ve Çalıştırma

Proje **Vite + TypeScript** altyapısını kullanmaktadır. Geliştirme ortamını kurmak için:

1.  **Bağımlılıkları Yükle:**
    ```bash
    npm install
    ```

2.  **Geliştirme Sunucusunu Başlat:**
    ```bash
    npm run dev
    ```
    Tarayıcınızda (genellikle `http://localhost:5173`) projeyi görüntüleyebilirsiniz.

3.  **Production Build Al:**
    ```bash
    npm run build
    ```

## 🤝 Katkıda Bulunma

Yeni bir bölüm eklemek veya mevcut bölümleri geliştirmek ister misiniz? **[CONTRIBUTING.md](CONTRIBUTING.md)** dosyasında detaylı rehber bulabilirsiniz.

## ❓ Neden Bu Proje?

Ders seçim dönemlerinde hangi dersin hangisine bağlı olduğunu (prerequisite) takip etmek karmaşık olabiliyor. Excel tabloları arasında kaybolmak yerine, tüm müfredatı birbirine bağlı canlı bir ağaç yapısında görmek, öğrencilerin akademik yollarını çizmelerini kolaylaştırır.

## ✨ Öne Çıkan Özellikler

### 🎯 Temel Özellikler

- **🔗 İnteraktif Ön Koşul Ağacı:** Bir dersin üzerine geldiğinizde, o derse bağlı olan veya o dersin açtığı tüm dersleri dinamik oklarla görselleştirir. Bağlantılı dersler zincirleme olarak vurgulanır, ilgisiz dersler otomatik olarak soluklaştırılır.
- **🧮 Akıllı GPA Simülasyonu:** Geçmiş derslerinizi ve almayı planladığınız derslerin notlarını girerek kümülatif ortalamanızı (CGPA) anlık olarak hesaplayın. Simülasyon modunda hedef GPA belirleyin veya notları manuel girin.
- **🔒 Kilit Sistemi (Logic Lock):** Henüz ön koşulunu vermediğiniz bir dersi seçmenizi engelleyerek hatalı program yapma riskini ortadan kaldırır.
- **💾 LocalStorage Teknolojisi:** Üyelik gerektirmez! Tüm verileriniz sadece kendi tarayıcınızda saklanır ve sayfayı yenilediğinizde kaybolmaz.
- **🎨 Gelişmiş Tema Sistemi:** Göz yormayan "Karanlık Mod", ferah "Aydınlık Mod" ve özel "Rose" teması seçenekleriyle kişiselleştirilebilir deneyim.
- **🌍 Çoklu Dil Desteği:** Türkçe ve İngilizce dilleri arasında anında geçiş yapabilme imkanı. Tüm ders adları, arayüz metinleri ve uyarılar seçilen dile göre dinamik olarak güncellenir.
- **📱 PWA Desteği:** iOS ve Android cihazlarda uygulamayı ana ekrana ekleyerek tam ekran deneyimi yaşayabilirsiniz.
- **🔔 Gelişmiş Bildirimler:** Tarayıcı uyarıları yerine modern, engelleyici olmayan "Toast" bildirimleri.

### 🎓 Ön Koşul Sistemi

- **⚡ Eş Koşul (Co-requisite) Desteği:** Laboratuvar ve teorik dersler gibi birlikte alınması gereken dersleri otomatik olarak tanır ve uyarır.
- **⚠️ Zayıf Ön Koşul (Weak Prerequisite):** Dersi geçmiş olmanız gerekmez; sadece almış olmanız (FF olsa bile) yeterlidir.
- **🔢 Sayısal Ön Koşul (Count Pattern):** "En az 5 adet ME3XX dersi" gibi esnek ön koşul kurallarını destekler.
- **📌 Seçmeli Ön Koşulları:** Seçmeli havuzundaki bireysel ders seçenekleri kendi ön koşullarına sahip olabilir; havuzdan seçim yapılırken ön koşul uyumu dinamik olarak kontrol edilir.

### 📄 PDF Transkript Yükleme

- **📂 Tek Tıkla İçe Aktarma:** Okul portalından (OBS) veya e-Devlet'ten indirdiğiniz PDF transkriptinizi sisteme yükleyerek tüm derslerinizi saniyeler içinde işleyin.
- **🔒 Gizlilik Odaklı:** Transkriptiniz **asla** bir sunucuya yüklenmez. Tüm işlem tarayıcınızda (Client-Side) gerçekleşir.
- **✨ Akıllı Eşleştirme:** Sistem, ders kodlarını ve notlarını otomatik olarak tanır, seçmeli dersleri ilgili havuzlardan bulup doğru slotlara yerleştirir.

### 📚 Seçmeli Ders Sistemi

- **🌐 500+ Serbest Seçmeli:** Üniversite genelinde sunulan tüm serbest seçmeli dersler tek havuzda.
- **🔧 Teknik Seçmeliler:** Bölümler arası ortak teknik seçmeli havuzu (ES310, MTH424, CSE480, vb.).
- **💡 Dinamik Kredi Sistemi:** Dersin kredisini (0, 2, 3, 4 vb.) kullanıcı seçebilir.
- **🎯 Akıllı Filtreleme:** Her bölüm kendi özel seçmeli havuzlarını kullanır, tekrar eden dersler otomatik filtrelenir.

### 🏛️ Desteklenen Bölümler

- **Makine Mühendisliği (ME)** - Tam destek
- **Bilgisayar Mühendisliği (CSE)** - Tam destek
- **Elektrik-Elektronik Mühendisliği (EE)** - Tam destek
- **Kimya Mühendisliği (CHBE)** - Tam destek
- **Biyomedikal Mühendisliği (BME)** - Tam destek
- **Genetik ve Biyomühendislik (GBE)** - Tam destek
- **Endüstri Mühendisliği (ISE)** - Tam destek
- **Malzeme Bilimi ve Nanoteknoloji (MSN)** - Tam destek

## 🛠️ Kullanılan Teknolojiler

- **Vite** - Ultra hızlı frontend geliştirme aracı
- **TypeScript** - Tip güvenliği ve ölçeklenebilirlik
- **HTML5 & CSS3** - Modern HSL Renk Paleti, Flexbox/Grid Layout
- **SVG** - Dinamik Bezier Eğrileri ile Ok Çizimi
- **PDF.js** - Client-Side PDF işleme (Transkript İçe Aktarma)
- **Modüler Mimari** - Ayrıştırılmış veri, logic ve feature katmanları

## 🏗️ Proje Mimarisi

Proje, `src/` altında katmanlı bir modüler yapı kullanır:

```
src/
├── main.ts                         # Uygulama giriş noktası ve başlatma
├── types.ts                        # Ortak tip tanımları (Course, Department vb.)
│
├── core/                           # Çekirdek modüller
│   ├── state.ts                    # Uygulama durum yönetimi (localStorage, dil, tema)
│   ├── render.ts                   # DOM oluşturma ve ders kartı renderlama
│   └── department.ts               # Bölüm yükleme ve değiştirme mantığı
│
├── features/                       # Özellik modülleri
│   ├── card.ts                     # Ders kartı etkileşimleri (tıklama, seçme, not)
│   ├── highlights.ts               # Ön koşul vurgulama ve soluklaştırma motoru
│   ├── simulation.ts               # GPA simülasyon modu mantığı
│   ├── transcript-import.ts        # PDF transkript içe aktarma arayüzü
│   ├── reset.ts                    # Veri sıfırlama
│   └── zoom.ts                     # Yakınlaştırma/Uzaklaştırma kontrolü
│
├── utils/                          # Yardımcı fonksiyonlar
│   ├── logic.ts                    # Hesaplama ve kilit mantığı (Saf fonksiyonlar)
│   ├── visuals.ts                  # Görselleştirme motoru (ok çizimi, highlight)
│   ├── theme.ts                    # Tema yöneticisi
│   └── transcript-parser.ts        # PDF işleme motoru
│
├── data/                           # Veri katmanı
│   ├── departments/*.ts            # Her bölümün özel müfredatı (ME, CSE vb.)
│   ├── common.ts                   # Ortak havuzlar (İngilizce, Programlama, Teknik Seçmeliler)
│   ├── free-electives.ts           # Serbest seçmeli havuzu (500+ ders)
│   └── registry.ts                 # Bölüm kayıt sistemi
│
├── i18n/                           # Çoklu dil desteği
│   ├── index.ts                    # Dil yöneticisi ve çeviri fonksiyonları
│   ├── ui.ts                       # Arayüz metinleri ve bölüm isimleri
│   └── courses/                    # Ders ismi çevirileri
│       ├── common.ts               # Ortak ders çevirileri
│       ├── departments.ts          # Bölüme özel ders çevirileri
│       └── free.ts                 # Serbest seçmeli çevirileri
│
└── assets/                         # Statik kaynaklar
    └── styles/
        ├── style.css               # Ana stil dosyası
        └── theme.css               # Tema değişkenleri
```

## 🗺️ Gelecek Planları (Roadmap)

- **🔄 Çift Anadal (ÇAP) Sistemi:** İki farklı bölümün ders programını aynı anda görüntüleme ve çakışma kontrolü.

---

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın!**
