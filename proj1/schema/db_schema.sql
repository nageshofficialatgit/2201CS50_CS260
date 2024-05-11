CREATE DATABASE  IF NOT EXISTS `kitkat_take_a_break` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `kitkat_take_a_break`;
-- MySQL dump 10.13  Distrib 8.3.0, for Win64 (x86_64)
--
-- Host: localhost    Database: kitkat_take_a_break
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `page_1`
--

DROP TABLE IF EXISTS `page_1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_1` (
  `email` varchar(255) NOT NULL,
  `DOA` date NOT NULL,
  `APP_NO` int NOT NULL AUTO_INCREMENT,
  `post_applied` varchar(45) DEFAULT NULL,
  `personal_details` json DEFAULT NULL,
  `Mobile` varchar(10) NOT NULL,
  `alternate_mobile` varchar(10) DEFAULT NULL,
  `alternate_email` varchar(255) DEFAULT NULL,
  `landline_no` varchar(10) DEFAULT NULL,
  `correspondence_address` json DEFAULT NULL,
  `permanent_address` json DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `APP_NO_UNIQUE` (`APP_NO`),
  CONSTRAINT `email_page1` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_2`
--

DROP TABLE IF EXISTS `page_2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_2` (
  `email` varchar(255) NOT NULL,
  `educational_qualifications` json DEFAULT NULL,
  `acadmic_details_m_tech` json DEFAULT NULL,
  `academic_details_b_tech` json DEFAULT NULL,
  `acadmic_details_school` json DEFAULT NULL,
  `additional_edu` json DEFAULT NULL,
  PRIMARY KEY (`email`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `user_email_idx` (`email`),
  CONSTRAINT `user_email` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_3`
--

DROP TABLE IF EXISTS `page_3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_3` (
  `email` varchar(255) NOT NULL,
  `present_employment` json DEFAULT NULL,
  `employ_history` json DEFAULT NULL,
  `teach_exp` json DEFAULT NULL,
  `research_exp` json DEFAULT NULL,
  `industrial_exp` json DEFAULT NULL,
  `area_spec` longtext,
  `curr_research` longtext,
  PRIMARY KEY (`email`),
  KEY `email_user_idx` (`email`),
  CONSTRAINT `email_user` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_4`
--

DROP TABLE IF EXISTS `page_4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_4` (
  `email` varchar(255) NOT NULL,
  `summary_publication` json DEFAULT NULL,
  `best_publication` json DEFAULT NULL,
  `patent` json DEFAULT NULL,
  `book` json DEFAULT NULL,
  `book_chapter` json DEFAULT NULL,
  `scholar_link` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`email`),
  CONSTRAINT `user_email1` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_5`
--

DROP TABLE IF EXISTS `page_5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_5` (
  `email` varchar(255) NOT NULL,
  `membership` json DEFAULT NULL,
  `training` json DEFAULT NULL,
  `award` json DEFAULT NULL,
  `spon_project` json DEFAULT NULL,
  `cons_project` json DEFAULT NULL,
  PRIMARY KEY (`email`),
  CONSTRAINT `email_page5` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_6`
--

DROP TABLE IF EXISTS `page_6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_6` (
  `email` varchar(255) NOT NULL,
  `thesis` json DEFAULT NULL,
  `mtech` json DEFAULT NULL,
  `btech` json DEFAULT NULL,
  PRIMARY KEY (`email`),
  KEY `email_page6_idx` (`email`),
  CONSTRAINT `email_page6` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_7`
--

DROP TABLE IF EXISTS `page_7`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_7` (
  `email` varchar(255) NOT NULL,
  `research` longtext,
  `course` longtext,
  `other` longtext,
  `edtor` longtext,
  `journal` longtext,
  `conference` longtext,
  PRIMARY KEY (`email`),
  CONSTRAINT `email_page7` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_8`
--

DROP TABLE IF EXISTS `page_8`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_8` (
  `email` varchar(255) NOT NULL,
  `referral` json DEFAULT NULL,
  PRIMARY KEY (`email`),
  CONSTRAINT `email_page8` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `page_9`
--

DROP TABLE IF EXISTS `page_9`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page_9` (
  `email` varchar(255) NOT NULL,
  `consent` tinyint DEFAULT NULL,
  `declared` longtext,
  PRIMARY KEY (`email`),
  CONSTRAINT `email_page9` FOREIGN KEY (`email`) REFERENCES `users` (`Email`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `First_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `Category` enum('UR','OBC','SC','ST','PWD','EWS') DEFAULT NULL,
  PRIMARY KEY (`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-11 13:29:07
