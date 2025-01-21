# Angular Ecommerce Web App

I done these App  using Angular13 and MySQL. 

## Getting Started



```
git clone  folder-name
```

First use npm install for both frontend and backend

Then cd into both directories and run using  npm Start 



```

cd backend
npm  install
node app.js

cd frontend
npm  install
npm Start
```

<br/>

After the entire installation you need to see the project run on http://localhost:4200/


** MySQL setup**

```
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'user_management',
```


sql_query



-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for user_management
CREATE DATABASE IF NOT EXISTS `user_management` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `user_management`;

-- Dumping structure for table user_management.courses
CREATE TABLE IF NOT EXISTS `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class` varchar(50) DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `board` varchar(50) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table user_management.courses: ~3 rows (approximately)
INSERT INTO `courses` (`id`, `class`, `subject`, `board`, `latitude`, `longitude`, `created_by`) VALUES
	(1, 'd', 'wd', 'sd', 1, 2, '2025-01-10 12:29:49'),
	(2, '12 th', 'Maths', 'state board', 3, 3, '2025-01-10 12:29:53'),
	(7, 'sd', 'surya', 'asd', 2, 2, '2025-01-21 16:24:38');

-- Dumping structure for table user_management.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table user_management.users: ~3 rows (approximately)
INSERT INTO `users` (`id`, `name`, `email`, `password`, `profile_image`, `latitude`, `longitude`, `token`) VALUES
	(17, 'LinkTask', 'senthamilansurya@gmail.com', '$2b$10$JVG95K2NgqGh98xqySQcbeFBpl4.PAmVrR0d/YrRfWvdpS6/5frpu', NULL, 0, 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE3Mzc0MzUyOTQsImV4cCI6MTczNzQzODg5NH0.xfcGfzF1BzgOFH7niMchEVUtX5Wrhp_VAqJCr4_LkVk'),
	(18, 'LinkTask', 'senthamilansurya@gmail.com', '$2b$10$jR0FHNc3ZxxHfXVtWJV.keanooBkoOng/WOBVlZgwU0uqv2L9SyoC', NULL, 1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbnRoYW1pbGFuc3VyeWFAZ21haWwuY29tIiwiaWF0IjoxNzM3NDM3MjE4LCJleHAiOjE3Mzc0NDA4MTh9.fhUVsSYo2vL9i5Vs2RtswU7nXwfSHFBJGc9YE5fIL6w'),
	(19, 'LinkTasksadsc', 'senthamilansurya@gmail.com', '$2b$10$Ld9EkZacSIsUz79mHjMFkONuZnzKm96r8RUBFuWfT26pBzHlIdo0i', 'footer_image.png', 2, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE5LCJpYXQiOjE3Mzc0NTU3MTcsImV4cCI6MTczNzQ1OTMxN30.jlrv3-HmXQH1v3h-XeO0qHwNo4wqLeA5Yyu6gK30lu0');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

