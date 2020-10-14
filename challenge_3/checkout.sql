DROP DATABASE checkout;

CREATE DATABASE checkout;

USE checkout;

CREATE TABLE purchases (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20),
  email VARCHAR(20),
  password VARCHAR(20),
  address1 VARCHAR(20),
  address2 VARCHAR(20),
  city VARCHAR(20),
  state VARCHAR(2),
  zip VARCHAR(20),
  phone VARCHAR(20),
  card VARCHAR(20),
  expiry VARCHAR(20),
  ccv VARCHAR(20),
  billZip VARCHAR(20),
  PRIMARY KEY (id)
)