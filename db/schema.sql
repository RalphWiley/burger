CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    date TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);
