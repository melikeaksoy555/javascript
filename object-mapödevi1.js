const filmKutuphanesi = new Map();

document.getElementById('filmForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const filmAd = document.getElementById('filmAd').value;
    const yonetmen = document.getElementById('yonetmen').value;
    const yayinYili = parseInt(document.getElementById('yayinYili').value, 10);

    const film = {
        ad: filmAd,
        yonetmen: yonetmen,
        yayinYili: yayinYili
};

filmKutuphanesi.set(filmAd, film);
    guncelleFilmListesi();
    guncelleToplamFilmSayisi();

    // Formu sıfırla
    document.getElementById('filmForm').reset();
});

function guncelleFilmListesi() {
    const filmListesi = document.getElementById('filmListesi');
    filmListesi.innerHTML = '';

    filmKutuphanesi.forEach(film => {
        const li = document.createElement('li');
        li.textContent = `${film.ad} - ${film.yonetmen} (${film.yayinYili})`;
        filmListesi.appendChild(li);
    });
}

// Toplam film sayısını güncelle
function guncelleToplamFilmSayisi() {
    const toplamFilmSayisi = document.getElementById('toplamFilmSayisi');
    toplamFilmSayisi.textContent = filmKutuphanesi.size;
}

// Tüm filmleri listele butonu
document.getElementById('listeleBtn').addEventListener('click', function () {
    guncelleFilmListesi();
    guncelleToplamFilmSayisi();
});

// Film arama işlevi
document.getElementById('aramaBtn').addEventListener('click', function () {
    const aramaTerimi = document.getElementById('arama').value.toLowerCase();
    const filmListesi = document.getElementById('filmListesi');
    filmListesi.innerHTML = ''; // Önceki listeyi temizle

    filmKutuphanesi.forEach(film => {
        if (film.ad.toLowerCase().includes(aramaTerimi) || film.yonetmen.toLowerCase().includes(aramaTerimi)) {
            const li = document.createElement('li');
            li.textContent = `${film.ad} - ${film.yonetmen} (${film.yayinYili})`;
            filmListesi.appendChild(li);
        }
    });

    if (filmListesi.children.length === 0) {
        filmListesi.innerHTML = '<li>Hiç film bulunamadı.</li>';
    }
});

// Film güncelleme işlevi
document.getElementById('guncelleBtn').addEventListener('click', function () {
    const guncelleFilmAd = document.getElementById('guncelleFilmAd').value;
    const yeniYonetmen = document.getElementById('yeniYonetmen').value;
    const yeniYayinYili = parseInt(document.getElementById('yeniYayinYili').value, 10);

    if (filmKutuphanesi.has(guncelleFilmAd)) {
        const film = filmKutuphanesi.get(guncelleFilmAd);
        film.yonetmen = yeniYonetmen;
        film.yayinYili = yeniYayinYili;

        // Güncellenmiş filmi tekrar Map'e ekle
        filmKutuphanesi.set(guncelleFilmAd, film);
        alert('Film başarıyla güncellendi!');

        guncelleFilmListesi();
        guncelleToplamFilmSayisi();
        
        // Formu sıfırla
        document.getElementById('guncelleFilmAd').value = '';
        document.getElementById('yeniYonetmen').value = '';
        document.getElementById('yeniYayinYili').value = '';
    } else {
        alert('Film bulunamadı. Lütfen doğru bir film adı girin.');
    }
});
// Film silme işlevi
document.getElementById('silBtn').addEventListener('click', function () {
    const silinecekFilmAd = document.getElementById('silinecekFilmAd').value;

    if (filmKutuphanesi.has(silinecekFilmAd)) {
        filmKutuphanesi.delete(silinecekFilmAd);
        alert('Film başarıyla silindi!');
        guncelleFilmListesi();
        guncelleToplamFilmSayisi();
        
        // Formu sıfırla
        document.getElementById('silinecekFilmAd').value = '';
    } else {
        alert('Film bulunamadı. Lütfen doğru bir film adı girin.');
    }
});


