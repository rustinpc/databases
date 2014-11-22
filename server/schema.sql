CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  ID int(11) NOT NULL, user_id VARCHAR(49), time TIMESTAMP(6), message VARCHAR(255), room_id VARCHAR(49), PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  /* Describe your table here.*/
  user_id VARCHAR(49), room_id VARCHAR(49), PRIMARY KEY (user_id)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  room_id VARCHAR(49), PRIMARY KEY (room_id)
);

CREATE TABLE friends (
  /* Describe your table here.*/
  user_id VARCHAR(49), friend_id VARCHAR(49), PRIMARY KEY (user_id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

