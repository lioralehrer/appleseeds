class Student{
    constructor(name){
        this.name = name;
    }
}
function startBootcamp(student, startDate){
    student.weekNumber = 1;
    student.startDate = startDate;
}
function incrementWeek(student){
    student.weekNumber++;
}
let liora = new Student("liora");
startBootcamp(liora , new Date());
for (let i = 1 ; i<6 ; i++){
    incrementWeek(liora);

}
console.log(liora);


