DROP DATABASE if exists most;

CREATE DATABASE most;

USE most;

CREATE TABLE results (
  id       INT NOT NULL AUTO_INCREMENT,
  topic    VARCHAR(100) NOT NULL,
  1_name   VARCHAR(50),
  1_score  INT,
  2_name   VARCHAR(50),
  2_score  INT,
  3_name   VARCHAR(50),
  3_score  INT,
  4_name   VARCHAR(50),
  4_score  INT,
  5_name   VARCHAR(50),
  5_score  INT,
  6_name   VARCHAR(50),
  6_score  INT,
  7_name   VARCHAR(50),
  7_score  INT,
  PRIMARY KEY (id)
);

INSERT INTO results (id, topic, 1_name, 1_score, 2_name, 2_score, 3_name, 3_score) VALUES
 (1, 'choosing a job', 'salary', 2, 'company values', 3, 'day to day work', 1);

 LOAD DATA LOCAL INFILE '/home/ubuntu/what-matters-most-app/most.csv'
 INTO TABLE results
 FIELDS TERMINATED BY ','
 ENCLOSED BY '"'
 LINES TERMINATED BY '\n'
 IGNORE 1 ROWS;