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
