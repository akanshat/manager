DROP TABLE IF EXISTS user;

DROP TABLE IF EXISTS patient;

DROP TABLE IF EXISTS hospital;

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  hash VARCHAR(255) NOT NULL
);

CREATE TABLE hospital(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  patient_count INT DEFAULT 0
);

CREATE TABLE patient(
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  hospital_id int NOT NULL,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  phone VARCHAR(10) NOT NULL,
  emergency_contact VARCHAR(10) NOT NULL,
  age INT NOT NULL,
  gender ENUM ('male', 'female'),
  bloodtype VARCHAR(3) NOT NULL,
  weight DOUBLE NOT NULL,
  height DOUBLE NOT NULL,
  details TINYTEXT NOT NULL,
  admission_date DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT FK_hospital_id FOREIGN KEY (hospital_id) REFERENCES hospital(id)
);

INSERT INTO
  user(name, email, password)
VALUES
  ("admin", "admin@manager.com", "12345");

INSERT INTO
  hospital(name)
VALUES
  ("Belgaum");

INSERT INTO
  hospital(name)
VALUES
  ("City Hospital");

INSERT INTO
  patient(
    hospital_id,
    firstname,
    lastname,
    phone,
    emergency_contact,
    age,
    gender,
    bloodtype,
    weight,
    height,
    details
  )
VALUES
  (
    1,
    "Alexis",
    "Cooper",
    "424351",
    "654311",
    22,
    "female",
    "A+",
    50.5,
    5.8,
    "cold, fever"
  );

INSERT INTO
  patient(
    hospital_id,
    firstname,
    lastname,
    phone,
    emergency_contact,
    age,
    gender,
    bloodtype,
    weight,
    height,
    details
  )
VALUES
  (
    2,
    "David",
    "Murphy",
    "490303",
    "728932",
    30,
    "male",
    "AB-",
    67,
    6.2,
    "fever"
  );