// Create a book object, where each object describes a book and has properties for the title, the author and
// whether or not you have already read this book
class Book{
    constructor(title , author , beenRead){
        this.title = title;
        this.author = author;
        this.beenRead = beenRead;
    }
}
//Create a few instances of this object
let alice = new Book ("alice", "karl Luise", true);
let paul = new Book ("paul street", "nemechek", true);
let makeIt = new Book ("make it rain", "dont know", false);
let hobit = new Book ("the hobit", "J.R.R. Tolkin", false);
// Create a global method that logs the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
function logTitleAndAuthor(book){
   console.log(`${book.title} by ${book.author}`);
}
//Write a function that logs all the books that have not been read yet, and call it.
let books =[alice,paul,makeIt,hobit];
function logWhoWasntRead(books){
    var arrBook = [];
    counter =0;
    books.forEach(book => {
        if (!book.beenRead){
            console.log(book);
            arrBook[counter]= book;
            counter++;
        }
        
    });
    return arrBook;
}
logWhoWasntRead(books);


