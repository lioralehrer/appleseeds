var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

// Write a JavaScript function that receives the following library object as an input and displays the books that can be read
// (the reading status is true) .Display book name, author name and reading status 

function displayBooks (library){
    library.forEach(element => {
        element.readingStatus === true ? console.log(`book name: ${element.title}   author: ${element.author} reading status: ${element.readingStatus} `) : null;
    });
}

displayBooks(library);