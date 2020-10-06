DROP TABLE IF EXISTS patients;

DROP TABLE IF EXISTS hospitals;

CREATE TABLE hospitals(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(20) NOT NULL
);

CREATE TABLE patients(
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
  admission_date DATETIME NOT NULL,
  CONSTRAINT FK_hospital_id FOREIGN KEY (hospital_id) REFERENCES hospitals(id)
);

INSERT INTO
  hospitals(name)
VALUES
  ("Belgaum");
INSERT INTO
  hospitals(name)
VALUES
  ("City Hospital");

INSERT INTO
  patients( hospital_id, firstname, lastname, phone, emergency_contact, age, gender, bloodtype, weight, height, details, admission_date)
  VALUES (1, "Alexis", "Cooper", "424351", "654311", 22, "female", "A+", 50.5, 5.8, "cold, fever", "2020-10-07 00:47:00");

INSERT INTO
  patients( hospital_id, firstname, lastname, phone, emergency_contact, age, gender, bloodtype, weight, height, details, admission_date)
  VALUES (2, "David", "Murphy", "490303", "728932", 30, "male", "AB-", 67, 6.2, "fever", "2020-10-06 10:00:20");

