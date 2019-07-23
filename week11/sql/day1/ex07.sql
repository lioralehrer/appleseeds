create database mydb;
 use mydb;
create table foods (id int not null default 0,
name varchar(55), cost float, do_i_like_it boolean 
);
insert into foods values
(01,"pizza",35,True),
(02,"broccoli",29, True),
(03,"ice-cream",10,true);
select id from foods where do_i_like_it=true;
update  foods set do_i_like_it=false where name="pizza";
delete from foods where do_i_like_it = false;
select * from foods;
