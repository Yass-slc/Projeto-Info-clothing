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

-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `Nome` varchar(50) DEFAULT NULL,
  `Telefone` varchar(20) DEFAULT NULL,
  `CPF_OU_CNPJ` varchar(30) NOT NULL,
  `Endereço` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`Nome`, `Telefone`, `CPF_OU_CNPJ`, `Endereço`) VALUES
('José Silva Santos', '11 99897-9999', '99.888.879/0001-98', 'Rua Cereal Matinal, 222');

-- --------------------------------------------------------

--
>>>>>>> 6996411a067f04e04d696643c22374a59dfaeb2a
-- Estrutura para tabela `vestidos`
--

CREATE TABLE `vestidos` (

  `Sereia` text DEFAULT NULL,
  `Evasê` text DEFAULT NULL,
  `Princesa` text DEFAULT NULL,
  `Império` text DEFAULT NULL,
  `Reto` text DEFAULT NULL
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
