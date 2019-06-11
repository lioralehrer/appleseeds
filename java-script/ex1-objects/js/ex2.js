var book01 = {
    name: "Daniel Deronde",
    author: "George Eliyot",
    year: "1852",
};
var book02 = {
    name: "Mekimi",
    author: "Noa Yaron Dayan",
    year: "2002"
}
var bookUtils = {
    getFirstPublished: (book1, book2) => book1.year < book2.year ? book1 : book2,
    setNewEdition: (book, editionYear) => book.latestEdition = editionYear,
    setLanguage: (book, language) => book.language = language,
    setTranslation: (book, language, translator) => book.translation = { translation: translator, language: language },
    setPublisher: (book, name, location) => book.publisher = { name: name, location: location },
    isSamePublisher: (book1, book2) => book1.location === book2.location ? true : false
};

bookUtils.setNewEdition(book01, 1989);
bookUtils.setLanguage(book01, "Russian");
bookUtils.setTranslation(book01, "chinese", "Han Liu");
bookUtils.setPublisher(book01, "Keter", "Tel Aviv");
var expected1 = {
    name: "foundation",
    author: "Isaac Asimov",
    year: 1951,
    latestEdition: 1989,
    language: "Russian",
    translation: {
        translator: "Han Liu",
        language: "chinese",
    },
    publisher: {
        name: "Keter",
        location: "Tel Aviv"
    }
}

bookUtils.setPublisher(book02, "Keter", "Jerusalem");
bookUtils.setPublisher(book02, "Keter", "Tel Aviv");
