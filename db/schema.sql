-- For use during DEVELOPMENT!
DROP DATABASE IF EXISTS market_systems_db;

-- Create Database.
CREATE DATABASE market_systems_db;
USE market_systems_db;

-- This table references all individuals registered to a device or devices.
-- Users should be able to READ/UPDATE their own data and DELETE their account.
CREATE TABLE users (
	id INT UNSIGNED AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL DEFAULT "",
  user_pass VARCHAR(255) NOT NULL DEFAULT "$2a$10$4OG93bFxzLt.KxTizKzqOeveILGr9fe3/JOB0o3rNDU/xE0yCOxvq",
  PRIMARY KEY (userID)
);

-- This table references each alert from the user.
-- Users will have full CRUD operations for their alerts
CREATE TABLE users_alerts (
	aid INT UNSIGNED AUTO_INCREMENT,
  symbol VARCHAR(255) NOT NULL DEFAULT "",
  target_price INT NOT NULL DEFAULT "",
  deviceID VARCHAR(45) NOT NULL DEFAULT "",
  switch VARCHAR(2) DEFAULT "0", -- This is the value that will be referenced to allow multiple users to open doors or turn on our test/dev LED.
  PRIMARY KEY (gateID)
);
    
-- This table references individual details related to a specific user.
-- This is where we will store the user data for facial recognition.
-- Currently stores a profile image url for us to reference to display a user's image after authentication.
-- CREATE TABLE user_details (
-- 	userID INT UNSIGNED NOT NULL,
--     img_url VARCHAR(255) NOT NULL DEFAULT "",
--     PRIMARY KEY (userID),
--     FOREIGN KEY (userID) REFERENCES users(userID)
--     );
    
-- This is a junction table to establish our many-to-many relationship between our 'gates' table and our 'users' table.
-- CREATE TABLE gates_users (
-- 	userID INT UNSIGNED,
--     gateID INT UNSIGNED,
--     PRIMARY KEY (userID, gateID),
--     FOREIGN KEY (userID) REFERENCES users(userID),
--     FOREIGN KEY (gateID) REFERENCES gates(gateID)
--     );
    