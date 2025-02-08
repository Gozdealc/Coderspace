
// Bu kod localStorage kullanarak filmleri tarayıcıda saklamak ve yönetmek için oluşturulmuş bir Storage (Depolama) yapısıdır.

function Storage() {}

// Yeni filmi localStorage'e ekler.
Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    // localStorage sadece string sakladığı için JSON.stringify() ile diziyi stringe çeviriyoruz.
    localStorage.setItem("films", JSON.stringify(films));
  };


// Bu metod localStorage'de kayıtlı filmleri alır:

// Eğer localStorage boşsa → boş bir dizi döndürür films = [];
// Eğer filmler varsa → JSON.parse() ile dizi olarak geri döndürür.
Storage.prototype.getFilmsFromStorage = function () {
    let films;
    if (localStorage.getItem("films") === null) {
    films = [];
    } else {
    films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
};

// Bu metod, belirtilen isme sahip filmi bulup siliyor:
Storage.prototype.deleteFilmsFromStorage = function (filmTitle) {
    let films = this.getFilmsFromStorage();
    films.forEach(function (film, index) {
    if (film.title === filmTitle) {
        films.splice(index, 1);
    }
    });
    localStorage.setItem("films", JSON.stringify(films));
};

// Tüm filmleri bir anda siler.
Storage.prototype.clearAllFilmsFromStorage = function () {
    localStorage.removeItem("films");
};
