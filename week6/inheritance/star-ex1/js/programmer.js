class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}
class Programmer extends Student {
    constructor(name, courses, os, languages, vcs) {
        super(name, courses);
        this.os = os;
        this.languages = languages;
        this.vcs = vcs;
    }
    isProgramingIn(language) {
        return this.languages.indexOf(language) !== -1;
        // for (let i = 0; i < this.languages.length; i++) {
        //     if (this.languages[i] === language) {
        //         console.log('hello');
        //     }
        // }
    }
}
function checkKnowsJavascript(arrayOfStudents) {
    for (let i=0; i<arrayOfStudents.length;i++){
        if (arrayOfStudents[i] instanceof Programmer ){
            if (arrayOfStudents[i].isProgramingIn("javascript")){
                console.log(arrayOfStudents[i]);
                 return arrayOfStudents[i];
            }
        }
    }
}

let student1 = new Student("yoyo", "history");
let student2 = new Student("bill", "sport");
let student3 = new Student("milla", "blabla");
let prog1 = new Programmer("lolo", "programing", "", "javascript", 1);
let prog2 = new Programmer("glue", "programing", "", "html", 1);
let prog3 = new Programmer("zoom", "programing", "", "javascript", 1);
let arrayOfStudents1 = [student1, student2, student3, prog1, prog2, prog3];
checkKnowsJavascript(arrayOfStudents1);

