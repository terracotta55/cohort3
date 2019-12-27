/*
Develop a data model for a small application that has at least 3 related tables. You can pick 
your own but if you can’t think of one consider a customer, invoice, invoice detail, and 
product tables.
Build sample data and load the tables with a small amount of data. The equivalent of 10 
customers, each having about 10 invoices and with each invoice having at least 3 items.
*/
CREATE TABLE customer(
	customer_id serial PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL, 
	email VARCHAR(100) UNIQUE);

CREATE SEQUENCE invoice_id_seq;
ALTER SEQUENCE invoice_id_seq RESTART WITH 1000 INCREMENT BY 5;
--above lines help create custom sequneces for the serial data type
CREATE TABLE invoice_detail(
	invoice_id INT NOT NULL DEFAULT NEXTVAL('invoice_id_seq') PRIMARY KEY,
	customer_id INTEGER NOT NULL,
	amount NUMERIC(9,2) NOT NULL, 
	date_sold DATE);

CREATE SEQUENCE product_id_seq;
ALTER SEQUENCE product_id_seq RESTART WITH 20002 INCREMENT BY 10;
CREATE TABLE product_detail(
	product_id INT NOT NULL DEFAULT NEXTVAL('product_id_seq') PRIMARY KEY,
	product_name VARCHAR(50) NOT NULL,
	product_desc VARCHAR(355));
	
INSERT INTO customer(first_name, last_name, email)
VALUES ('Leanne', 'Graham', 'sincere@april.biz'),
('Ervin', 'Howell', 'shanna@melissa.tv'),
('Clementine', 'Bauch', 'nathan@yesenia.net'),
('Patricia', 'Lebsack', 'julianne.OConner@kory.org'),
('Chelsey', 'Dietrich', 'lucio_Hettinger@annie.ca'),
('Dennis', 'Schulist', 'karley_Dach@jasper.info'),
('Kurtis', 'Weissnat', 'telly.Hoeger@billy.biz'),
('Nicholas', 'Runolfsdottir', 'sherwood@rosamond.me'),
('Glenna', 'Reichert', 'chaim_McDermott@dana.io'),
('Clementina', 'DuBuque', 'rey.Padberg@karina.biz');

INSERT INTO invoice_detail(customer_id, amount, date_sold)
VALUES (1,4567,'2019-12-23'),
(2, 1234, '2019-10-15'),
(2, 1234, '2019-10-15'),
(3, 6798, '2019-10-15'),
(4, 5900, '2019-10-15'),
(1, 890, '2019-10-15'),
(5, 12, '2019-10-15'),
(6, 12893, '2019-10-15'),
(2, 134, '2019-10-15');

INSERT INTO product_detail(product_name, product_desc)
VALUES ('soap', 'cleanses very well'),
('cereal', 'nice and crunchy'),
('bacon', 'real canadian bacon bits'),
('soda', 'refreshing drink'),
('cookies', 'homemade fresh');

SELECT * FROM customer;
SELECT * FROM invoice_detail;
SELECT * FROM product_detail;