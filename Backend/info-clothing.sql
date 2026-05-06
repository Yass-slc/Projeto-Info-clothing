-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 06/05/2026 às 17:00
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `info-clothing`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `vestidos`
--

CREATE TABLE `vestidos` (
  `Sereia` varchar(500) DEFAULT NULL,
  `Evasê` varchar(100) DEFAULT NULL,
  `Império` varchar(100) DEFAULT NULL,
  `Reto` varchar(100) DEFAULT NULL,
  `Princesa` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `vestidos`
--

INSERT INTO `vestidos` (`Sereia`, `Evasê`, `Império`, `Reto`, `Princesa`) VALUES
('Este vestido passará para quem for utilizado o ar de delicadeza e empoderamento. Em uma data especia', NULL, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
