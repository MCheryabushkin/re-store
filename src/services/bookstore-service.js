export default class BookStoreService {
  books = [
    {
      id: 1,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K.Rowling",
      price: 30,
      coverImage: "https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg"
    },
    {
      id: 2,
      title: "C Programming Language,",
      author: " Brian W. Kernighan, Dennis M. Ritchie",
      price: 47,
      coverImage: "https://www.amazon.com/images/I/41h+7zx+hFL._SX258_BO1,204,203,200_.jpg"
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.books)
        // return reject(new Error("Somthing bad happend"))
      }, 700)
    })
  }
}
