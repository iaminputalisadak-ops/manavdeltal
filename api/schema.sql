-- Database: manavdeltal
-- Run this in MySQL to create the database and table.

CREATE DATABASE IF NOT EXISTS manavdeltal
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE manavdeltal;

CREATE TABLE IF NOT EXISTS items (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
);
