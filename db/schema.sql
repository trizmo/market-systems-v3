-- For use during DEVELOPMENT!
DROP DATABASE IF EXISTS market_systems_db;

-- Create Database.
CREATE DATABASE market_systems_db;
USE market_systems_db;

-- This table references all individuals registered to a device or devices.
-- Users should be able to READ/UPDATE their own data and DELETE their account.
CREATE TABLE users (
	UserID INT UNSIGNED AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL DEFAULT "",
  email VARCHAR(100) NOT NULL DEFAULT "",
  password VARCHAR(255) NOT NULL DEFAULT "$2a$10$4OG93bFxzLt.KxTizKzqOeveILGr9fe3/JOB0o3rNDU/xE0yCOxvq",
  createdAt VARCHAR(100) NOT NULL DEFAULT "",
  updatedAt VARCHAR(100) NOT NULL DEFAULT "",
  PRIMARY KEY (id)
);

-- This table references each alert from the user.
-- Users will have full CRUD operations for their alerts
CREATE TABLE alerts (
  AlertID INT UNSIGNED AUTO_INCREMENT,
  symbol VARCHAR(255) NOT NULL DEFAULT "",
  target_price INT NOT NULL DEFAULT "0",
  createdAt VARCHAR(100) NOT NULL DEFAULT "",
  updatedAt VARCHAR(100) NOT NULL DEFAULT "",
  UserID INT,
  PRIMARY KEY (AlertID),
  FOREIGN KEY (UserID) REFERENCES users(UserID)
)

ENGINE = InnoDB;
    
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
    