create database bootcamp;
use bootcamp;
create table students(
studentId int,
firstName varchar(30),
lastName varchar(30),
been_dismissed boolean,
cohort int
);
create table grades(
studentId int,
exam_id int,
date_taken date,
grade int
);
insert into students values
(01,"noam","levi",true,1),
(02,"yael","cohen",true,1),
(03,"shachar","avni",false,2);
update students   set firstName="Yonatan" WHERE studentId=01;
delete from students WHERE studentId=02;



