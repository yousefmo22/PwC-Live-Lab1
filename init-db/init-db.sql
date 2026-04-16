
CREATE TABLE students (
        studentid SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        major TEXT NOT NULL,
        email TEXT NOT NULL
);

INSERT INTO students (name, major, email)
VALUES( 'Salma Zidane', 'CSEN', 'salma@salma.com');
