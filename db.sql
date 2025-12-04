-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.43

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
-- Table structure for table `enum_properties`
--

DROP TABLE IF EXISTS `enum_properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enum_properties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `properties_id` int DEFAULT NULL,
  `enum_value` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `properties_id` (`properties_id`),
  CONSTRAINT `enum_properties_ibfk_1` FOREIGN KEY (`properties_id`) REFERENCES `properties` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=205 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enum_properties`
--

LOCK TABLES `enum_properties` WRITE;
/*!40000 ALTER TABLE `enum_properties` DISABLE KEYS */;
INSERT INTO `enum_properties` VALUES (1,9,'trắng'),(2,9,'tím'),(3,10,'xanh lục'),(4,10,'tím'),(5,11,'vàng sáng'),(6,11,'vàng'),(7,11,'xanh vàng'),(8,11,'xanh lục'),(9,11,'nâu đỏ'),(10,11,'nâu'),(11,11,'đen'),(12,11,'hạt đốm'),(13,12,'không màu'),(14,12,'màu da bò nhạt'),(15,12,'màu da bò'),(16,12,'nâu'),(17,12,'nâu đậm'),(18,12,'xanh'),(19,12,'xám đậm'),(20,12,'đen'),(21,13,'hình cầu'),(22,13,'tựa cầu'),(23,13,'elip'),(24,13,'elip tròn'),(25,13,'elip dài'),(26,14,'màu rám nắng'),(27,14,'màu rám nắng đậm'),(28,14,'nâu'),(29,14,'nâu hơi đậm'),(30,14,'nâu đậm'),(31,14,'xám đậm'),(32,14,'đen'),(33,15,'xám'),(34,15,'nâu nhạt'),(35,15,'nâu'),(36,18,'Xanh nhạt'),(37,18,'Xanh'),(38,18,'Xanh đậm'),(39,18,'Ðỉnh tím'),(40,18,'Mép tím'),(41,18,'Vết tím'),(42,18,'Tím'),(43,19,'Xanh'),(44,19,'Sọc tím'),(45,19,'Tím nhạt'),(46,19,'Tím'),(47,20,'Thẳng'),(48,20,'Ngang'),(49,20,'Rủ'),(50,21,'Thẳng'),(51,21,'Trung bình'),(52,21,'Ngang'),(53,21,'Rũ'),(54,22,'Không có'),(55,22,'5-19 mm: ngắn'),(56,22,'20-34 mm: trung bình'),(57,22,'35-50 mm: dài'),(58,23,'Trắng'),(59,23,'Sọc tím'),(60,23,'Tím'),(61,24,'Nhọn'),(62,24,'Ðỉnh xẻ đôi'),(63,24,'Tròn'),(64,25,'Xanh nhạt'),(65,25,'Xanh'),(66,25,'Tím'),(67,26,'Trắng'),(68,26,'Xanh nhạt'),(69,26,'Tím'),(70,27,'Thẳng (<300)'),(71,27,'Trung bình (30-450)'),(72,27,'Mở (45-600)'),(73,27,'Xòe (>600)'),(74,27,'Ngã'),(75,28,'Xanh'),(76,28,'Vàng nhạt'),(77,28,'Sọc tím'),(78,28,'Tím'),(79,29,'Cứng (không ngã)'),(80,29,'Khá cứng'),(81,29,'Trung bình'),(82,29,'Yếu'),(83,29,'Rất yếu'),(84,30,'Túm'),(85,30,'Trung bình'),(86,30,'Mở'),(87,31,'Không phân nhánh'),(88,31,'Phân nhánh thưa'),(89,31,'Phân nhánh dầy'),(90,31,'Chụm lại'),(91,32,'Thoát (trổ) tốt'),(92,32,'Thoát (trổ) trung bình'),(93,32,'Vừa thoát'),(94,32,'Thoát một phần'),(95,32,'Kín (không thoát)'),(96,33,'Thẳng'),(97,33,'Rũ'),(98,34,'Rất thấp (ít hơn 1%)'),(99,34,'Thấp (1 - 5%)'),(100,34,'Trung bình (6 - 25%)'),(101,34,'Khá (25 - 50%)'),(102,34,'Cao (hơn 50%)'),(103,35,'Khó'),(104,35,'Trung bình'),(105,35,'Dễ'),(106,36,'Không râu'),(107,36,'Râu ngắn và một phần'),(108,36,'Râu ngắn và đầy đủ'),(109,36,'Râu dài và đầy đủ'),(110,37,'Trấu'),(111,37,'Vàng'),(112,37,'Nâu'),(113,37,'Ðỏ'),(114,37,'Tím'),(115,37,'Ðen'),(116,38,'Trắng'),(117,38,'Trấu'),(118,38,'Nâu'),(119,38,'Ðỏ'),(120,38,'Ðỉnh đỏ'),(121,38,'Tím'),(122,38,'Ðỉnh tím'),(123,39,'Trắng'),(124,39,'Xanh nhạt'),(125,39,'Vàng'),(126,39,'Tím nhạt'),(127,39,'Tím'),(128,39,'Tím đậm'),(129,40,'Không lông (nhẵn)'),(130,40,'Lông trên đường nhô của trấu'),(131,40,'Lông cao hơn phần lồi'),(132,40,'Lông ngắn'),(133,40,'Lông dài'),(134,40,'Ðiểm tím trên nền trấu'),(135,40,'Gân tím trên nền trấu'),(136,40,'Tím'),(137,40,'Ðen'),(138,40,'Trắng'),(139,41,'Không lông (nhẵn)'),(140,41,'Lông trên đường nhô của trấu'),(141,41,'Lông cao hơn phần lồi'),(142,41,'Lông ngắn'),(143,41,'Lông dài'),(144,42,'Trắng'),(145,42,'Trấu'),(146,42,'Vàng'),(147,42,'Ðỏ'),(148,42,'Tím'),(149,43,'Ngắn (không dài hơn 1.5 mm)'),(150,43,'Trung bình (1.6 - 2.5 mm)'),(151,43,'Dài (dài hơn 2.5 mm nhưng không dài hơn trấu)'),(152,43,'Rất dài (bằng hoặc dài hơn trấu)'),(153,43,'Không đối xứng'),(154,44,'Rất cao (>90%)'),(155,44,'Thụ phấn tốt (75 - 89%)'),(156,44,'Thụ một phần (50 - 74%)'),(157,44,'Thấp (<50%)'),(158,44,'Hoàn toàn không (0%)'),(159,45,'Muộn và chậm'),(160,45,'Trung bình'),(161,45,'Sớm và nhanh'),(162,46,'Trắng'),(163,46,'Nâu nhạt'),(164,46,'Ðốm nâu'),(165,46,'Nâu'),(166,46,'Ðỏ'),(167,46,'Tím không ổn định'),(168,46,'Tím'),(169,47,'Không dính (gạo)'),(170,47,'Dính (nếp)'),(171,47,'Trộn lẫn'),(172,48,'Không thơm'),(173,48,'Thơm nhẹ'),(174,48,'Thơm'),(175,49,'Không bạc bụng'),(176,49,'Bạc bụng thấp (<10%)'),(177,49,'Bạc bụng trung bình (11 - 20%)'),(178,49,'Rất bạc bụng (>20%)'),(179,50,'Dài (trên 3.0)'),(180,50,'Trung bình (2.1 - 3.0)'),(181,50,'Hơi tròn (1.1 - 2.0)'),(182,50,'Tròn (<1.1)'),(183,53,'Sâu (<1m)'),(184,53,'Nước nổi (>1m)'),(185,53,'Khô hạn'),(186,53,'Cao nguyên'),(187,54,'Kháng'),(188,54,'Hơi kháng'),(189,54,'Hơi nhiễm'),(190,54,'Nhiễm'),(191,54,'Rất nhiễm'),(192,55,'Kháng'),(193,55,'Hơi kháng'),(194,55,'Hơi nhiễm'),(195,55,'Nhiễm'),(196,55,'Rất nhiễm'),(197,59,'Không lông (nhẵn)'),(198,59,'Trung bình'),(199,59,'Lông nhiều'),(200,60,'Indica'),(201,60,'Japonica'),(202,60,'Javanica'),(203,60,'Giống lai'),(204,60,'Loài hoang dại');
/*!40000 ALTER TABLE `enum_properties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'Ngũ cốc'),(2,'Rau và dưa'),(3,'Cây ăn quả, hạt'),(4,'Cây dầu'),(5,'Cây củ/rễ giàu tinh bột'),(6,'Cây đồ uống, gia vị'),(7,'Cây họ đậu'),(8,'Cây lấy đường'),(9,'Cây trồng khác');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(500) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `is_representative` tinyint(1) DEFAULT NULL,
  `species_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `species_id` (`species_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`species_id`) REFERENCES `species` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Iwahime',1,1),(2,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Yoshihime',1,2),(3,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Takihime',1,3),(4,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Wase edamame',1,4),(5,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Kurobeei',1,5),(6,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Wase edamame',1,6),(7,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Fusanari chamame',1,7),(8,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Chuse edamame',1,8),(9,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Yuusuzumi',1,9),(10,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Fuuki',1,10),(11,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Fukunari',1,11),(12,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Nouhime',1,12),(13,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Tanbaguro ootsubudaizu',1,13),(14,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Fukura',1,14),(15,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Yuagari musume',1,15),(16,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Natsunoyosooi',1,16),(17,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Okuharawase',1,17),(18,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Mikawashima',1,18),(19,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Natsunokoe',1,19),(20,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Otsunahime',1,20),(21,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Natsunoshirabe',1,21),(22,'https://www.koppert.eg/content/_processed_/3/0/csm_Soyabean_cdd58813c4.jpg','Shironomai',1,22);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plant_type`
--

DROP TABLE IF EXISTS `plant_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plant_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `group_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `plant_type_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `groups` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plant_type`
--

LOCK TABLES `plant_type` WRITE;
/*!40000 ALTER TABLE `plant_type` DISABLE KEYS */;
INSERT INTO `plant_type` VALUES (1,'Đậu nành',7),(2,'Lúa',1);
/*!40000 ALTER TABLE `plant_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `properties`
--

DROP TABLE IF EXISTS `properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `properties` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `value_type` enum('num','enum') NOT NULL,
  `type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `properties_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `plant_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `properties`
--

LOCK TABLES `properties` WRITE;
/*!40000 ALTER TABLE `properties` DISABLE KEYS */;
INSERT INTO `properties` VALUES (1,'Ngày trổ hoa','num',1),(2,'Ngày thu hoạch','num',1),(3,'Chiều cao cây (cm)','num',1),(4,'Trọng lượng 100 hạt (g)','num',1),(5,'Số hạt/trái','num',1),(6,'Kích thước hạt theo chiều rộng (mm)','num',1),(7,'Kích thước hạt theo chiều dài (mm)','num',1),(8,'Kích thước hạt theo chiều dày (mm)','num',1),(9,'Màu hoa','enum',1),(10,'Trục hạ diệp','enum',1),(11,'Màu vỏ hạt','enum',1),(12,'Màu tể','enum',1),(13,'Dạng hạt','enum',1),(14,'Màu trái','enum',1),(15,'Màu lông trên trái','enum',1),(16,'Ngày trổ','enum',2),(17,'Năm trồng lại (năm gần nhất)','enum',2),(18,'Màu phiến lá','enum',2),(19,'Màu bẹ lá căn bản','enum',2),(20,'Góc lá','enum',2),(21,'Góc lá cờ','enum',2),(22,'Chiều dài thìa lá','enum',2),(23,'Màu thìa lá','enum',2),(24,'Dạng thìa','enum',2),(25,'Màu cổ lá','enum',2),(26,'Màu tai lá','enum',2),(27,'Góc thân','enum',2),(28,'Màu lóng','enum',2),(29,'Ðộ cúng của thân','enum',2),(30,'Kiểu bông','enum',2),(31,'Phân nhánh cấp hai','enum',2),(32,'Ðộ trổ bông','enum',2),(33,'Trục bông','enum',2),(34,'Tính tự rụng hạt','enum',2),(35,'Khả năng suốt bông','enum',2),(36,'Râu','enum',2),(37,'Màu râu','enum',2),(38,'Màu nút đít','enum',2),(39,'Màu nướm','enum',2),(40,'Màu trấu lớn và trấu nhỏ','enum',2),(41,'Lông tơ trên trấu','enum',2),(42,'Màu của dĩnh','enum',2),(43,'Chiều dài của dĩnh','enum',2),(44,'Ðộ thụ phấn','enum',2),(45,'Sự ruội lá','enum',2),(46,'Màu gạo lức','enum',2),(47,'Loại phôi nhủ','enum',2),(48,'Mùi thơm','enum',2),(49,'Bạc bụng','enum',2),(50,'Dạng gạo','enum',2),(51,'Ðộ chua của đất','enum',2),(52,'Nhiễm mặn','enum',2),(53,'Ðộ ngập sâu trong năm','enum',2),(54,'Rầy nâu (năm)','enum',2),(55,'Rầy lưng trắng','enum',2),(56,'Cháy lá','enum',2),(57,'Cháy bìa lá','enum',2),(58,'Ðốm vằn','enum',2),(59,'Lông trên phiến lá','enum',2),(60,'Nhóm giống','enum',2),(61,'Cao độ (m)','num',2),(62,'Chiều cao mạ (cm)','num',2),(63,'Chiều dài lá (cm)','num',2),(64,'Chiều rộng lá (cm)','num',2),(65,'Chiều cao cây(cm):','num',2),(66,'Số chồi','num',2),(67,'Ðường kính của lóng thân cơ bản (mm):','num',2),(68,'Chiều dài bông (cm)','num',2),(69,'Trọng lượng 1000 hạt (g)','num',2),(70,'Chiều dài hạt lúa (mm):','num',2),(71,'Chiều rộng hạt lúa (mm)','num',2),(72,'Chiều dài hạt gạo (mm)','num',2),(73,'Chiều rộng hạt gạo (mm)','num',2),(74,'Chiều dài phôi nhũ (mm):','num',2),(75,'Sự phân hóa kiềm (thử Alkali):','num',2),(76,'Hàm lượng Amylose (%)','num',2),(77,'Hàm lượng Protein (%)','num',2),(78,'Tỉ lệ xay chà (% gạo trắng nguyên)','num',2);
/*!40000 ALTER TABLE `properties` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `properties_value`
--

DROP TABLE IF EXISTS `properties_value`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `properties_value` (
  `species_id` int DEFAULT NULL,
  `properties_id` int DEFAULT NULL,
  `number_value` float DEFAULT NULL,
  `enum_properties_id` int DEFAULT NULL,
  KEY `species_id` (`species_id`),
  KEY `properties_id` (`properties_id`),
  KEY `enum_properties_id` (`enum_properties_id`),
  CONSTRAINT `properties_value_ibfk_1` FOREIGN KEY (`species_id`) REFERENCES `species` (`id`),
  CONSTRAINT `properties_value_ibfk_2` FOREIGN KEY (`properties_id`) REFERENCES `properties` (`id`),
  CONSTRAINT `properties_value_ibfk_3` FOREIGN KEY (`enum_properties_id`) REFERENCES `enum_properties` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `properties_value`
--

LOCK TABLES `properties_value` WRITE;
/*!40000 ALTER TABLE `properties_value` DISABLE KEYS */;
INSERT INTO `properties_value` VALUES (1,1,24,NULL),(1,2,72,NULL),(1,3,22.3,NULL),(1,4,34.4,NULL),(1,5,2.9,NULL),(1,6,8.7,NULL),(1,7,9.35,NULL),(1,8,7.4,NULL),(1,9,NULL,1),(1,10,NULL,3),(1,11,NULL,7),(1,12,NULL,14),(1,13,NULL,21),(1,14,NULL,27),(1,15,NULL,34),(2,1,24,NULL),(2,2,72,NULL),(2,3,23.2,NULL),(2,4,26.5,NULL),(2,5,2.8,NULL),(2,6,7.52,NULL),(2,7,9,NULL),(2,8,7.5,NULL),(2,9,NULL,1),(2,10,NULL,3),(2,11,NULL,11),(2,12,NULL,20),(2,13,NULL,23),(2,14,NULL,27),(2,15,NULL,34),(3,1,22,NULL),(3,2,70,NULL),(3,3,24.5,NULL),(3,4,29,NULL),(3,5,2.9,NULL),(3,6,8.45,NULL),(3,7,9.25,NULL),(3,8,5.95,NULL),(3,9,NULL,1),(3,10,NULL,3),(3,11,NULL,10),(3,12,NULL,16),(3,13,NULL,22),(3,14,NULL,28),(3,15,NULL,35),(4,1,21,NULL),(4,2,72,NULL),(4,3,21.4,NULL),(4,4,35.6,NULL),(4,5,2.8,NULL),(4,6,8.6,NULL),(4,7,9.15,NULL),(4,8,6.95,NULL),(4,9,NULL,1),(4,10,NULL,3),(4,11,NULL,7),(4,12,NULL,14),(4,13,NULL,22),(4,14,NULL,27),(4,15,NULL,34),(5,1,23,NULL),(5,2,72,NULL),(5,3,22.1,NULL),(5,4,32.5,NULL),(5,5,2.7,NULL),(5,6,8.65,NULL),(5,7,9.3,NULL),(5,8,6.75,NULL),(5,9,NULL,1),(5,10,NULL,3),(5,11,NULL,11),(5,12,NULL,20),(5,13,NULL,22),(5,14,NULL,27),(5,15,NULL,34),(6,1,20,NULL),(6,2,68,NULL),(6,3,23.1,NULL),(6,4,33,NULL),(6,5,2.6,NULL),(6,6,8.1,NULL),(6,7,8.65,NULL),(6,8,5.8,NULL),(6,9,NULL,1),(6,10,NULL,3),(6,11,NULL,9),(6,12,NULL,17),(6,13,NULL,22),(6,14,NULL,27),(6,15,NULL,34),(7,1,20,NULL),(7,2,68,NULL),(7,3,24,NULL),(7,4,27.1,NULL),(7,5,2.6,NULL),(7,6,8.2,NULL),(7,7,9.2,NULL),(7,8,6.95,NULL),(7,9,NULL,2),(7,10,NULL,4),(7,11,NULL,5),(7,12,NULL,13),(7,13,NULL,23),(7,14,NULL,28),(7,15,NULL,34),(8,1,27,NULL),(8,2,78,NULL),(8,3,22.5,NULL),(8,4,34,NULL),(8,5,2.5,NULL),(8,6,8.5,NULL),(8,7,9,NULL),(8,8,7.35,NULL),(8,9,NULL,1),(8,10,NULL,3),(8,11,NULL,7),(8,12,NULL,17),(8,13,NULL,21),(8,14,NULL,27),(8,15,NULL,35),(9,1,23,NULL),(9,2,72,NULL),(9,3,23.6,NULL),(9,4,33.5,NULL),(9,5,2.6,NULL),(9,6,8.9,NULL),(9,7,9.35,NULL),(9,8,7.25,NULL),(9,9,NULL,1),(9,10,NULL,3),(9,11,NULL,7),(9,12,NULL,13),(9,13,NULL,22),(9,14,NULL,27),(9,15,NULL,35),(10,1,22,NULL),(10,2,72,NULL),(10,3,24.4,NULL),(10,4,35.5,NULL),(10,5,2.7,NULL),(10,6,8.95,NULL),(10,7,9.55,NULL),(10,8,7.4,NULL),(10,9,NULL,1),(10,10,NULL,3),(10,11,NULL,6),(10,12,NULL,16),(10,13,NULL,22),(10,14,NULL,28),(10,15,NULL,35),(11,1,21,NULL),(11,2,70,NULL),(11,3,28.2,NULL),(11,4,26.9,NULL),(11,5,2.7,NULL),(11,6,8.6,NULL),(11,7,9.45,NULL),(11,8,6.1,NULL),(11,9,NULL,1),(11,10,NULL,3),(11,11,NULL,9),(11,12,NULL,17),(11,13,NULL,22),(11,14,NULL,27),(11,15,NULL,34),(12,1,25,NULL),(12,2,72,NULL),(12,3,26.7,NULL),(12,4,30.8,NULL),(12,5,2.8,NULL),(12,6,8.8,NULL),(12,7,9.5,NULL),(12,8,7.3,NULL),(12,9,NULL,1),(12,10,NULL,3),(12,11,NULL,11),(12,12,NULL,20),(12,13,NULL,22),(12,14,NULL,27),(12,15,NULL,34),(13,1,28,NULL),(13,2,78,NULL),(13,3,29,NULL),(13,4,35.2,NULL),(13,5,2.5,NULL),(13,6,10.1,NULL),(13,7,11,NULL),(13,8,9.15,NULL),(13,9,NULL,2),(13,10,NULL,4),(13,11,NULL,11),(13,12,NULL,20),(13,13,NULL,21),(13,14,NULL,27),(13,15,NULL,34),(14,1,24,NULL),(14,2,72,NULL),(14,3,27.1,NULL),(14,4,29.8,NULL),(14,5,2.6,NULL),(14,6,8.4,NULL),(14,7,8.95,NULL),(14,8,7.4,NULL),(14,9,NULL,1),(14,10,NULL,3),(14,11,NULL,7),(14,12,NULL,14),(14,13,NULL,21),(14,14,NULL,27),(14,15,NULL,34),(15,1,21,NULL),(15,2,70,NULL),(15,3,26.5,NULL),(15,4,31.6,NULL),(15,5,2.5,NULL),(15,6,8.25,NULL),(15,7,8.65,NULL),(15,8,6.65,NULL),(15,9,NULL,2),(15,10,NULL,4),(15,11,NULL,6),(15,12,NULL,14),(15,13,NULL,22),(15,14,NULL,27),(15,15,NULL,34),(16,1,24,NULL),(16,2,72,NULL),(16,3,24.5,NULL),(16,4,32,NULL),(16,5,2.6,NULL),(16,6,8.25,NULL),(16,7,8.8,NULL),(16,8,6.75,NULL),(16,9,NULL,1),(16,10,NULL,3),(16,11,NULL,11),(16,12,NULL,20),(16,13,NULL,22),(16,14,NULL,27),(16,15,NULL,34),(17,1,22,NULL),(17,2,72,NULL),(17,3,22.6,NULL),(17,4,30.5,NULL),(17,5,2.5,NULL),(17,6,9.05,NULL),(17,7,9.4,NULL),(17,8,7.8,NULL),(17,9,NULL,2),(17,10,NULL,4),(17,11,NULL,6),(17,12,NULL,16),(17,13,NULL,21),(17,14,NULL,27),(17,15,NULL,34),(18,1,23,NULL),(18,2,72,NULL),(18,3,20,NULL),(18,4,28.4,NULL),(18,5,2.3,NULL),(18,6,8.75,NULL),(18,7,9.75,NULL),(18,8,6.95,NULL),(18,9,NULL,1),(18,10,NULL,3),(18,11,NULL,6),(18,12,NULL,13),(18,13,NULL,22),(18,14,NULL,28),(18,15,NULL,35),(19,1,22,NULL),(19,2,72,NULL),(19,3,23.4,NULL),(19,4,26,NULL),(19,5,2.5,NULL),(19,6,8.2,NULL),(19,7,8.65,NULL),(19,8,6.5,NULL),(19,9,NULL,1),(19,10,NULL,3),(19,11,NULL,9),(19,12,NULL,17),(19,13,NULL,22),(19,14,NULL,27),(19,15,NULL,34),(20,1,24,NULL),(20,2,76,NULL),(20,3,26.3,NULL),(20,4,31.3,NULL),(20,5,2.7,NULL),(20,6,8,NULL),(20,7,8,NULL),(20,8,6.85,NULL),(20,9,NULL,1),(20,10,NULL,3),(20,11,NULL,7),(20,12,NULL,16),(20,13,NULL,21),(20,14,NULL,28),(20,15,NULL,35),(21,1,24,NULL),(21,2,72,NULL),(21,3,25.8,NULL),(21,4,29.9,NULL),(21,5,2.6,NULL),(21,6,8.45,NULL),(21,7,9,NULL),(21,8,7.05,NULL),(21,9,NULL,2),(21,10,NULL,4),(21,11,NULL,10),(21,12,NULL,17),(21,13,NULL,22),(21,14,NULL,27),(21,15,NULL,34),(22,1,28,NULL),(22,2,78,NULL),(22,3,33.5,NULL),(22,4,35,NULL),(22,5,2.6,NULL),(22,6,8.65,NULL),(22,7,8.9,NULL),(22,8,7.8,NULL),(22,9,NULL,2),(22,10,NULL,4),(22,11,NULL,6),(22,12,NULL,13),(22,13,NULL,21),(22,14,NULL,27),(22,15,NULL,34);
/*!40000 ALTER TABLE `properties_value` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `species`
--

DROP TABLE IF EXISTS `species`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `species` (
  `id` int NOT NULL AUTO_INCREMENT,
  `origin` varchar(100) DEFAULT NULL,
  `state` smallint DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `species_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `plant_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `species`
--

LOCK TABLES `species` WRITE;
/*!40000 ALTER TABLE `species` DISABLE KEYS */;
INSERT INTO `species` VALUES (1,'Nhật Bản',1,1),(2,'Nhật Bản',1,1),(3,'Nhật Bản',1,1),(4,'Nhật Bản',1,1),(5,'Nhật Bản',1,1),(6,'Nhật Bản',1,1),(7,'Nhật Bản',1,1),(8,'Nhật Bản',1,1),(9,'Nhật Bản',1,1),(10,'Nhật Bản',1,1),(11,'Nhật Bản',1,1),(12,'Nhật Bản',1,1),(13,'Nhật Bản',1,1),(14,'Nhật Bản',1,1),(15,'Nhật Bản',1,1),(16,'Nhật Bản',1,1),(17,'Nhật Bản',1,1),(18,'Nhật Bản',1,1),(19,'Nhật Bản',1,1),(20,'Nhật Bản',1,1),(21,'Nhật Bản',1,1),(22,'Nhật Bản',1,1);
/*!40000 ALTER TABLE `species` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `species_names`
--

DROP TABLE IF EXISTS `species_names`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `species_names` (
  `id` int NOT NULL AUTO_INCREMENT,
  `species_id` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `is_primary` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `species_id` (`species_id`),
  CONSTRAINT `species_names_ibfk_1` FOREIGN KEY (`species_id`) REFERENCES `species` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `species_names`
--

LOCK TABLES `species_names` WRITE;
/*!40000 ALTER TABLE `species_names` DISABLE KEYS */;
INSERT INTO `species_names` VALUES (1,1,'Iwahime',1),(2,2,'Yoshihime',1),(3,3,'Takihime',1),(4,4,'Wase edamame',1),(5,5,'Kurobeei',1),(6,6,'Wase edamame',1),(7,7,'Fusanari chamame',1),(8,8,'Chuse edamame',1),(9,9,'Yuusuzumi',1),(10,10,'Fuuki',1),(11,11,'Fukunari',1),(12,12,'Nouhime',1),(13,13,'Tanbaguro ootsubudaizu',1),(14,14,'Fukura',1),(15,15,'Yuagari musume',1),(16,16,'Natsunoyosooi',1),(17,17,'Okuharawase',1),(18,18,'Mikawashima',1),(19,19,'Natsunokoe',1),(20,20,'Otsunahime',1),(21,21,'Natsunoshirabe',1),(22,22,'Shironomai',1);
/*!40000 ALTER TABLE `species_names` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(32) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('admin','customer') DEFAULT 'customer',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin@temp.com','$2b$10$04.qlr6HXJ/ioR4ZpeibsesEcO1j9Lfns7PT1NASC7zIrqEXcMXLe','admin'),(2,'user1','1@gmail.com','$2b$10$GEnDfhor6pVTYuvUZMHvweGifHiItTCsHTjp4f5/S10kBF/JgoudO','customer'),(3,'user2','2@gmail.com','$2b$10$eB2ZaCNMYSORaOz.5fwQi.MhY1YHhcFC697Hmnklx.rtW7N/9jJdO','customer'),(4,'user3','3@gmail.com','$2b$10$t6TVAXghNJYtspXLbtNNYei5RZqk3tM0vXBUVIu.d1Bzb0AZMTov6','customer'),(5,'user4','4@gmail.com','$2b$10$/caXYDI3J4WTtGBbZMFXnuMGl.M8WcH31HqGc19enEtFc62HZrZci','customer');
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

-- Dump completed on 2025-12-03  9:22:47
