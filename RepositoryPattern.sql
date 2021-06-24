--create database AllInOne

/*repository pattern*/
create table Customer
(
	Id int primary key identity,
	Name nvarchar(20),
	CreatedOn date default getdate()
)
create table Orders
(
	OrderId int primary key identity,
	OrderName nvarchar(50),
	CustomerId int foreign key references Customer(id)
)
select * from Customer
select * from Orders

insert into customer(Name) values('vishal'),('Rahul'),('Mohit'),('Rishabh')
insert into Orders values('Apple',1),('Pen',1),('Pencil',4)



create table Request
(
Id int primary key identity,
RequestData nvarchar(max) not null,
ResponseData nvarchar(max)
)
select * from Request
delete request
alter table Request
add [URI] varchar(200)