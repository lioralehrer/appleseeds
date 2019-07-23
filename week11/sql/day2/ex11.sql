create database;
use programs;
create table participant(
participant_id int unique not null auto_increment primary key,
first_name varchar(30) not null,
last_name varchar(30) not null,
country varchar(30) not null,
level_of_english int,
does_have_israeli_citizenship boolean
);
create  table payment(
payment_id int unique not null auto_increment primary key,
participant_id int not null ,
Sum int not null,
datte timestamp not null,
payment_method enum('cach','paypal') not null default 'paypal',
authorization_code varchar(20),
foreign key (participant_id)
REFERENCES participant (participant_id)
	on update cascade
    on delete restrict
);
insert into participant values
(null,"ori","melamed","israel",3,true ),
(null,"Amit","cohen","israel",3,true ),
(null,"sem","kidman","belgin",1,False ),
(null,"osker","wild","britin",1,False );
insert into payment values
(null,2,500,now(),default,"www3"),
(null,4,400,now(),default,"www3"),
(null,1,500,now(),1,"www3"),
(null,1,350,now(),2,"www3"),
-- this will not work because the foreign key is off the range
(null,21,350,now(),2,"www3");
