SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC;

SELECT SUM(amount) FROM payment
WHERE customer_id = 341;

SELECT staff_id, COUNT(payment_id)
FROM payment
GROUP BY staff_id;

SELECT rating, COUNT(rating)
FROM film
GROUP BY rating
ORDER BY COUNT(rating) DESC;

SELECT rental_duration, COUNT(rental_duration)
FROM film
GROUP BY rental_duration
ORDER BY COUNT(rental_duration) DESC;

SELECT rating, ROUND(AVG(rental_rate), 3)
FROM film
GROUP BY rating;

SELECT staff_id, COUNT(payment_id), SUM(amount)
FROM payment
GROUP BY staff_id;

SELECT rating, ROUND(AVG(replacement_cost), 3)
FROM film
GROUP BY rating
ORDER BY AVG(replacement_cost) DESC;

SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
ORDER BY SUM(amount) DESC
LIMIT 5;

SELECT customer_id, SUM(amount)
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 150;

SELECT store_id, COUNT(customer_id)
FROM customer
GROUP BY store_id
HAVING COUNT(customer_id) > 300;

SELECT rating, AVG(rental_rate)
FROM film
WHERE rating IN ('R', 'G', 'PG')
GROUP BY rating
HAVING AVG(rental_rate) < 3;

SELECT customer_id, COUNT(payment_id)
FROM payment
GROUP BY customer_id
HAVING COUNT(payment_id) > 40;

SELECT rating, AVG(rental_duration)
FROM film
GROUP BY rating
HAVING AVG(rental_duration) > 5;

SELECT customer_id, SUM(amount), COUNT(staff_id)
FROM payment
WHERE staff_id = 2
GROUP BY customer_id
HAVING SUM(amount) > 110;

SELECT COUNT(title)
FROM film
WHERE title LIKE 'J%';

SELECT first_name, last_name, customer_id FROM customer
WHERE first_name LIKE 'E%'
AND address_id <500
ORDER BY customer_id DESC;

SELECT customer_id AS c_id, SUM(amount) AS total_spent
FROM payment
GROUP BY c_id;

SELECT 
customer.customer_id,
customer.first_name,
customer.last_name,
customer.email,
payment.amount,
payment.payment_date
FROM customer
INNER JOIN payment ON customer.customer_id = payment.customer_id
WHERE customer.customer_id = 341;

SELECT 
payment.payment_id,
payment.amount,
staff.first_name,
staff.last_name
FROM payment
INNER JOIN staff ON payment.staff_id = staff.staff_id
WHERE payment.amount > 10;

SELECT title, COUNT(title) AS total_in_store1
FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id
WHERE store_id = 1
GROUP BY title
ORDER BY title;

SELECT 
film.title, 
language.name AS movie_language
FROM film
INNER JOIN language ON language.language_id = film.language_id
WHERE language.name = 'English';

SELECT film.film_id, film.title, inventory.inventory_id
FROM film
LEFT OUTER JOIN inventory ON inventory.film_id = film.film_id
WHERE inventory.film_id IS NULL
ORDER BY film.film_id;

SELECT film.film_id, film.title, inventory.inventory_id
FROM film
LEFT OUTER JOIN inventory ON inventory.film_id = film.film_id
WHERE inventory.inventory_id IS NULL
ORDER BY film.title;

SELECT SUM(amount), EXTRACT(month FROM payment_date) AS month 
FROM payment
GROUP BY month
ORDER BY SUM(amount) DESC;

SELECT rental_id * customer_id AS new_id
FROM payment;

SELECT first_name || ' ' || upper(last_name) AS full_name
FROM customer;

SELECT first_name, char_length(first_name)
FROM customer;

SELECT film_id, title, rental_rate 
FROM film
WHERE
rental_rate > (SELECT AVG(rental_rate) FROM film);

SELECT film_id, title
FROM film
WHERE film_id IN
(SELECT inventory.film_id
FROM rental
INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
WHERE return_date BETWEEN '2005-05-29' AND '2005-05-30');

SELECT a.customer_id, a.first_name, a.last_name, b.customer_id, b.first_name, b.last_name
FROM customer AS a, customer AS b
WHERE a.first_name = b.last_name;

SELECT a.customer_id, a.first_name, a.last_name, b.customer_id, b.first_name, b.last_name
FROM customer AS a
JOIN customer AS b
ON a.first_name = b.last_name
ORDER BY a.first_name;