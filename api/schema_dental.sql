-- Manav Dental Clinic - Database Schema
-- Run this after creating the database.

CREATE DATABASE IF NOT EXISTS manav_dental_db
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_unicode_ci;

USE manav_dental_db;

CREATE TABLE IF NOT EXISTS appointments (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  phone      VARCHAR(50)  NOT NULL,
  email      VARCHAR(255) NOT NULL,
  date       DATE         NOT NULL,
  time_slot  VARCHAR(50)  NOT NULL,
  service   VARCHAR(255) NOT NULL,
  message    TEXT,
  status     VARCHAR(20)  NOT NULL DEFAULT 'pending',
  created_at DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contacts (
  id         INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name       VARCHAR(255) NOT NULL,
  email      VARCHAR(255) NOT NULL,
  subject    VARCHAR(255),
  message    TEXT         NOT NULL,
  created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS services (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(255) NOT NULL,
  description TEXT,
  icon        VARCHAR(100),
  status      VARCHAR(20)  NOT NULL DEFAULT 'active',
  sort_order  INT          NOT NULL DEFAULT 0,
  created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Optional: seed services
INSERT INTO services (title, description, icon, status, sort_order) VALUES
('General Dentistry', 'Routine check-ups, cleanings, and basic dental care.', 'dental', 'active', 1),
('Cosmetic Dentistry', 'Smile makeovers, veneers, and aesthetic treatments.', 'cosmetic', 'active', 2),
('Teeth Whitening', 'Professional whitening for a brighter smile.', 'whitening', 'active', 3),
('Root Canal Treatment', 'Pain-free root canal therapy to save your tooth.', 'rootcanal', 'active', 4),
('Dental Implants', 'Permanent tooth replacement solutions.', 'implant', 'active', 5),
('Orthodontics/Braces', 'Braces and aligners for straight teeth.', 'braces', 'active', 6),
('Tooth Extraction', 'Safe and comfortable extractions when needed.', 'extraction', 'active', 7),
('Dental Cleaning', 'Deep cleaning and scaling for healthy gums.', 'cleaning', 'active', 8),
('Pediatric Dentistry', 'Gentle dental care for children.', 'pediatric', 'active', 9)
ON DUPLICATE KEY UPDATE title = VALUES(title);
