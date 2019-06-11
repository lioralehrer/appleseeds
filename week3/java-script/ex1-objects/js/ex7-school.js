/*Create a school object.
Your school has teachers (at least 2) that can teach certain subjects and are limited as per how many kids they can teach.
The teacher’s students need to be tracked.
The school also has students (at least 4) that need to learn a certain subject (just 1).
Create a function called "assignStudent" that will check if there is a teacher is available to teach this student, and if yes
assign that student to the teacher (that student will be added to the list of students of that teacher).
Assign as many students as possible.*/
var school = {
    teachers: [{
        subject: ["Math", "Grammer"],
        numOfPotentialKids: 2,
        numOfKids: 1,
        tracked: true
    },
    {
        subject: ["blabla", "English"],
        numOfPotentialKids: 4,
        numOfKids: 1,
        tracked: true
    }],
    students: [
        { subject: "Math" },
        { subject: "Grammer" },
        { subject: "English" },
        { subject: "English" }
    ]
}
function assignStudent(student) {
    let subject = student.subject;
    school.teachers.forEach(teacher => {
        teacher.subject.forEach(element => {
            element === subject && teacher.numOfKids < teacher.numOfPotentialKids ? teacher.numOfKids += 1 && school.students.push(student)  : console.log("The class is full");
        });
    });

}

assignStudent({ subject: "Math" });
assignStudent({ subject: "Math" });
assignStudent({ subject: "Math" });
assignStudent({ subject: "Math" });


