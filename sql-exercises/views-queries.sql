--Create customer_info view
CREATE VIEW customer_info AS (
	SELECT first_name, last_name, email, address, phone
	FROM customer
	INNER JOIN address
	ON customer.address_id = address.address_id
);

SELECT * FROM customer_info;

--Alter view and rename
ALTER VIEW customer_info
RENAME TO customer_master_list;

SELECT * FROM customer_master_list;

--Delete view
DROP VIEW customer_master_list;
DROP VIEW IF EXISTS customer_master_list; --just like with tables!