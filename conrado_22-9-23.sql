-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table eztrack.vehiculos: ~7 rows (approximately)
REPLACE INTO `vehiculos` (`id`, `modelo`, `marca`, `año`, `peso`, `potencia`, `disponibilidad`, `createdAt`, `deletedAt`, `updatedAt`, `img`, `descripcion`, `traccion`, `precio_vuelta`, `nivel`) VALUES
	(1, 'P3', 'Tesla', 2022, 1500, 200, 0, '2023-09-03 23:52:45', NULL, '2023-09-03 23:52:45', NULL, NULL, 200, 15, NULL),
	(2, 'J10', 'Renault', 2023, 1600, 1000, 0, '2023-09-03 23:57:39', NULL, '2023-09-03 23:57:39', NULL, NULL, 150, 12, NULL),
	(3, 'P5', 'Tesla', 2023, 1500, 2000, 0, '2023-09-05 00:41:38', NULL, '2023-09-05 00:41:38', NULL, 'MANITOU SPRINGS, Colorado – Racing uphill on roads with little to no guardrails at speeds exceeding 100 miles per hour may not sound like everyone\'s cup of tea, but for the competitors of the annual P', 100, 15, NULL),
	(7, 'J1', 'Renault', 2022, 2100, 200, 0, '2023-09-13 02:47:55', NULL, '2023-09-13 02:47:55', NULL, 'En diciembre de 2015, Renault anunció la adquisición del equipo Lotus y su regreso a la Fórmula 1 en calidad de constructor. Renault adquirió la empresa por el precio simbólico de una libra. Hizo fren', 430, 16, NULL),
	(12, 'K19', 'tesla', 2023, 3000, 1000, 0, '2023-09-19 18:17:12', NULL, '2023-09-19 18:17:12', NULL, 'qwe ', 0, 8, NULL),
	(39, 'k192', 'tesla', 2022, 4030, 1301, 0, '2023-09-19 19:10:15', NULL, '2023-09-19 19:10:15', '1695150615348--img2.png', 'asd asd asd ', 1000, 8, NULL),
	(40, 'p16', 'Tesla', 2016, 1600, 200, 0, '2023-09-22 04:59:22', NULL, '2023-09-22 04:59:22', '1695358762026--img1.png', 'lorem lorem lorem', 200, 16, 16);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
