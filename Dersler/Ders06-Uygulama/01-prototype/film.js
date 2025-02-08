// Constructor function (yapıcı fonksiyon)
// Film nesneleri oluşturmak için şablon
function Film(title,director,url) { // Parametreler
    this.title = title;
    this.director = director;
    this.url = url;
}
// this burada, oluşturulan yeni Film nesnesini ifade eder.
// Yani new Film() ile bir nesne oluşturduğunda, this o nesneyi gösterir.

// ÖRNEK 

// İnput: const film1 = new Film("Inception", "Christopher Nolan", "inception.jpg");
// console.log(film1);

// Output: Film { title: 'Inception', director: 'Christopher Nolan', url: 'inception.jpg' }