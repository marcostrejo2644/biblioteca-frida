-- MariaDB dump 10.19  Distrib 10.5.9-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: libreria_frida
-- ------------------------------------------------------
-- Server version	10.5.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores`
--

DROP TABLE IF EXISTS `autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `autores` (
  `id_autor` int(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `nacionalidad` varchar(20) DEFAULT NULL,
  `preferencia` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id_autor`),
  UNIQUE KEY `id_autor_UNIQUE` (`id_autor`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores`
--

LOCK TABLES `autores` WRITE;
/*!40000 ALTER TABLE `autores` DISABLE KEYS */;
INSERT INTO `autores` VALUES (1,'Julio','Cortazar','Argentino','novela'),(2,'David','Baldadcci','italiano','policial'),(3,'Agatha','Cristie','Inglesa','policial'),(4,'Artur','Conan Doyle','Ingles','policial'),(5,'George','Orwell','Ingles',NULL),(6,'Stephen','King','Estado Unidense','ficcion'),(7,'Joanne','Rowling','Inglesa','ficcion'),(8,'Garcia','Marquez','Colombiano',NULL),(9,'Fernando','Pessoa','portuguez','romantico'),(10,'Juan ','Alonzo','Uruguayo','poesia');
/*!40000 ALTER TABLE `autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lectores`
--

DROP TABLE IF EXISTS `lectores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lectores` (
  `id_lector` int(20) NOT NULL,
  `nombre` varchar(60) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `dni` int(10) DEFAULT NULL,
  `mail` varchar(45) NOT NULL,
  `telefono` int(20) DEFAULT NULL,
  PRIMARY KEY (`id_lector`),
  UNIQUE KEY `id_lector_UNIQUE` (`id_lector`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lectores`
--

LOCK TABLES `lectores` WRITE;
/*!40000 ALTER TABLE `lectores` DISABLE KEYS */;
INSERT INTO `lectores` VALUES (1,'Juan','Perez',43211234,'jperez@gmail.com',1125430304),(2,'María Jose','Ramirez',44442222,'mari_garcia@yahoo.com.ar',1125430343),(3,'Marcelo Oscar','Johnosonn',44444555,'marcelito@hotmail.com',1125430305),(4,'Sara','Gomez',NULL,'sara_88@gmail.com',1125434353),(5,'Susana','Mosca',NULL,'susanita@gmail.com',1125430233);
/*!40000 ALTER TABLE `lectores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros`
--

DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `libros` (
  `id_libro` int(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `idioma` varchar(25) NOT NULL,
  `pagina` int(7) NOT NULL,
  `editorial` varchar(100) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `fecha_lanzamiento` year(4) NOT NULL,
  `reservado` tinyint(4) NOT NULL DEFAULT 0,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_libro`),
  UNIQUE KEY `id_libro_UNIQUE` (`id_libro`),
  UNIQUE KEY `img_UNIQUE` (`img`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros`
--

LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */;
INSERT INTO `libros` VALUES (1,'reyuela','español',800,'pantheon','novela',1963,0,NULL),(2,'Rebelion en la granja','español',200,'aron','novela satirica',1945,0,NULL),(3,'Harry potter y el principe mestizo','español',1000,'santillana','ficcion',1998,0,NULL),(4,'La muerte de superman','ingles',100,'craken','ficcion',2010,0,NULL),(5,'Los heladeros del tiempo','español',400,'santillana','romantica',2000,0,NULL),(6,'Una fraccion de segundo','ingles',500,'negra zeta','policial',2003,0,NULL),(7,'Historias de detective','español',210,'serie negra','policial',2013,0,NULL),(8,'Logica para informaticos','español',208,'marcombo','informatica',2012,0,NULL),(9,'Perdido en otoño','frances',800,'aron','romantica',1994,0,NULL),(10,'Crimenes en la calle Pue Morgue','español',700,'negra zeta','policial',1998,0,NULL);
/*!40000 ALTER TABLE `libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `libros_escritos_autores`
--

DROP TABLE IF EXISTS `libros_escritos_autores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `libros_escritos_autores` (
  `id_libro` int(20) NOT NULL,
  `id_autor` int(20) NOT NULL,
  KEY `fk_libros_escritos_autores_idx` (`id_libro`),
  KEY `fk_autores_escritos_libros_1_idx` (`id_autor`),
  CONSTRAINT `fk_autores_escritos_libros_1` FOREIGN KEY (`id_autor`) REFERENCES `autores` (`id_autor`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_libros_escritos_autores` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `libros_escritos_autores`
--

LOCK TABLES `libros_escritos_autores` WRITE;
/*!40000 ALTER TABLE `libros_escritos_autores` DISABLE KEYS */;
INSERT INTO `libros_escritos_autores` VALUES (1,1),(2,1),(3,4),(5,5),(5,10),(6,6),(7,9),(8,2),(9,9),(10,3);
/*!40000 ALTER TABLE `libros_escritos_autores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservas` (
  `id_reserva` int(20) NOT NULL,
  `id_libro` int(20) NOT NULL,
  `id_lector` int(20) NOT NULL,
  `fecha_salida` date NOT NULL,
  `fecha_ingreso` date DEFAULT NULL,
  PRIMARY KEY (`id_reserva`),
  UNIQUE KEY `id_reservas_UNIQUE` (`id_reserva`),
  KEY `fk_lectores_reservas_idx` (`id_lector`),
  KEY `fk_libros_reservas_idx` (`id_libro`),
  CONSTRAINT `fk_lectores_reservas` FOREIGN KEY (`id_lector`) REFERENCES `lectores` (`id_lector`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_libros_reservas` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
INSERT INTO `reservas` VALUES (1,1,4,'2018-04-01','2018-04-07'),(2,2,5,'2018-04-09','2018-04-16'),(3,3,2,'2018-04-23','2018-04-30'),(4,4,4,'2018-04-08','2018-04-20'),(5,5,5,'2018-04-12','2018-04-19'),(6,6,2,'2018-04-05','2018-04-12'),(7,7,1,'2018-04-03','2018-04-12'),(8,8,3,'2018-04-03','2018-04-30'),(9,9,3,'2018-04-22',NULL),(10,10,5,'2018-04-10','2018-04-19');
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-23 16:01:36
