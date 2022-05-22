-- MySQL dump 10.13  Distrib 8.0.20, for macos10.15 (x86_64)
--
-- Host: localhost    Database: localdb
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Laptop','Dell','Latitude 7400 i7, 12Gb RAM, 512Gb SSD, 14\"',1300,350,'455000',1),(2,'Laptop','Dell','Inspiron 3593  9th gen core i5',813,350,'284550',1),(3,'Laptop','Dell','Vostro 3501 8th gen core i3, 8gb Ram, 1Tb HDD',421,350,'147350',5),(4,'Laptop','Dell','XPS 13 i5',750,350,'262500',1),(5,'Laptop','Dell','XPS 13 Touch i5',950,350,'332500',1),(6,'Laptop','Dell','XPS 13 2-in-1 i5',1170,350,'409500',1),(7,'Laptop','Dell','Alienware m15 R6 i7',1380,350,'483000',1),(8,'Laptop','Dell','Alienware x15 i9',2100,350,'735000',1),(9,'Laptop','Dell','Alienware x17 i9',2200,350,'770000',1),(10,'Laptop','HP','Pavilion x360 i7',1050,270,'283500',5),(11,'Laptop','HP','Probook 450 G6 i5',750,270,'202500',5),(12,'Laptop','HP','Envy 15T i7',1350,270,'364500',4),(13,'Laptop','HP','Envy 14 i5',1100,270,'297000',4),(14,'Laptop','HP','Pavilion 15 i7',1350,270,'364500',4),(15,'Laptop','HP','Pavilion Aero 13 Ryzen7',1000,270,'270000',1),(16,'Laptop','HP','Spectre x360',1500,270,'405000',1),(17,'Laptop','Lenovo','Legion 7 Gen6 Ryzen 7',1800,160,'288000',4),(18,'Laptop','Lenovo','Thinkpad X1 Carbon Gen9 i7',1285,160,'205600',1),(19,'Laptop','Gigabyte','G6 GD i5',999,160,'159840',1),(20,'Laptop','Gigabyte','Aorus 15P YD i7',2200,160,'352000',1),(21,'Laptop','Gigabyte','Aero 15 Oled KD i7',1500,160,'240000',1),(22,'Laptop','LG','Gram 16 i7',1550,60,'93000',1),(23,'Desktop','Gigabyte','GA-H270-HD3, 6th gen core i5, 8Gb Ram, 128Gb SSD +2Tb HDD',1500,70,'105000',1),(24,'Desktop','Gigabyte','GA-H370-HD3',2132,65,'138580',1),(25,'Desktop','Gigabyte','GA-Z490-UD, 11th gen core i9, 32Gb Ram, 256Gb SSD',2500,150,'375000',1),(26,'Laptop','Hp','Pavilion Gaming Ryzen 5, 15\" 8Gb Ram, 256Gb SSD, GTX 1050',1800,17,'36000',1);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'Alhassan Osman','+233554374251',23,NULL,1,1500,NULL),(2,'Newton Isaac','+233502090132',8,'Alienware x15 i9',1,2100,'2100');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (1,'Flemton Tech','+233664374251','Changli L23, Tamale'),(3,'Nick','+233502090132','Vittin Central HS, Tamale'),(4,'Fiifi Enterprise','+233546848460','Accra, Ghana'),(5,'Godwin Computers','+233506199056','Opposite West Hospital Tamale, Ghana');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-21 17:20:38
