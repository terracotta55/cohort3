--Create table syntax
CREATE TABLE account(
	user_id serial PRIMARY KEY,
	username VARCHAR (50) UNIQUE NOT NULL,
	password VARCHAR (50) NOT NULL,
	email VARCHAR (355) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
	last_login TIMESTAMP
);

CREATE TABLE role(
	role_id serial PRIMARY KEY,
	role_name VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE account_role(
	user_id integer NOT NULL,
	role_id integer NOT NULL,
	grant_date timestamp without time zone,
	PRIMARY KEY (user_id, role_id),
	
CONSTRAINT account_role_role_id_fkey FOREIGN KEY (role_id)
	REFERENCES role (role_id) MATCH SIMPLE
	ON UPDATE NO ACTION 
	ON DELETE NO ACTION,
	
CONSTRAINT account_role_user_id_fkey FOREIGN KEY (user_id)
	REFERENCES account (user_id) MATCH SIMPLE
	ON UPDATE NO ACTION 
	ON DELETE NO ACTION
);

CREATE TABLE leads(
	user_id serial PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(355) UNIQUE NOT NULL,
	minutes_spent NUMERIC(2,2) NOT NULL,
	sign_up_time TIMESTAMP NOT NULL
);

CREATE TABLE links(
	ID serial PRIMARY KEY,
	URL VARCHAR(255) NOT NULL,
	link_name VARCHAR(255) NOT NULL,
	link_desc VARCHAR(255)
);

INSERT INTO links(URL, link_name, link_desc)
VALUES ('www.google.com', 'Google', 'Super-fast search engine'),
('www.yahoo.com', 'Yahoo', 'Older search engine'),
('www.bing.com', 'Bing', 'Microsoft search engine'),
('www.amazon.com', 'Amazon', 'Started as a book store');

--To create copy of a table
CREATE TABLE links_copy (LIKE links);

INSERT INTO links_copy
SELECT * FROM links
WHERE link_name = 'Bing';

--To update table rows
UPDATE links
SET	url = 'www.duckduckgo.com',
	link_name = 'DuckGo',
	link_desc = NULL
WHERE id = 3;

UPDATE links
SET	url = 'www.firefox.com',
	link_name = 'FireFox',
	link_desc = 'I think firefox is quite good'
WHERE id = 4
RETURNING *;

--To delete row from table
DELETE FROM links
WHERE id = 3
RETURNING *;

--To add a column
ALTER TABLE links
ADD COLUMN active BOOLEAN;

--To drop or remove column
ALTER TABLE links
DROP COLUMN active;

--To rename column
ALTER TABLE links
RENAME active TO is_active;

--To rename a table
ALTER TABLE links
RENAME TO url_table;

--Check if changes are reflected
SELECT * FROM url_table
ORDER BY id;

--To delete an entire table (be careful!)
DROP TABLE IF EXISTS links_copy; 
/*IF EXIST is an optional term that prevents sql error if table 
you're trying to delete doesn't exist. will give a notice 
instead run the command and and then skip
optional reading: read up on RESTRICT and CASCADE*/

--Using the CHECK constraint
CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	birth_date DATE CHECK (birth_date < '2001-12-26'),
	join_date DATE CHECK (join_date > birth_date),
	salary NUMERIC(9,2) CHECK (salary > 0)
);

--Test CHECK constraint
INSERT INTO users(first_name, last_name, birth_date, join_date, salary)
VALUES ('Seth', 'Meyers', '1973-12-28','2013-08-31', 97875);
/*sql posts detailed error messages whenever constraints are not met.
you can rename constraints by replacing line 114 with:
join_date DATE CONSTRAINT after_birthdate CHECK (join_date > birth_date),*/

SELECT * FROM users;

--Using the NOT NULL constraint
CREATE TABLE learn_null(
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	sales_amount INTEGER NOT NULL
);
--Test NOT NULL constraint
INSERT INTO learn_null(first_name, sales_amount)
VALUES ('Seth', 12345);
/*will return error if no insert for sales_amount
but no error for null/empty last_name*/

--Using the UNIQUE constraint
CREATE TABLE learn_unique(
	id serial PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(255) UNIQUE
);

--Test UNIQUE constraint
INSERT INTO learn_unique(first_name, last_name, email)
VALUES ('Seth', 'Meyers', 's.meyers@aol.com'),
('Mary', 'Jane', 'm.jane@aol.com');
/*will return error if no Seth's and Mary's
email addresses are the same*/

SELECT * FROM learn_unique;