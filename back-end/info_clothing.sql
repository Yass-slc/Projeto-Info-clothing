-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 10/04/2026 às 21:09
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `info_clothing`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cartão_loja`
--

CREATE TABLE `cartão_loja` (
  `id_cartão` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `CPF` varchar(20) NOT NULL,
  `score` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `endereço` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `cartão_loja`
--

INSERT INTO `cartão_loja` (`id_cartão`, `nome`, `CPF`, `score`, `email`, `telefone`, `endereço`) VALUES
(1, 'Maria Joaquina', '999.235.876-35', 902, 'Joaquinama@gmail.com', '(11) 967893-6783', 'Rua Albuquerque, 23'),
(2, 'Dereck Lima', '123.456.789-99', 500, 'dreckklima@gmail.com', '(11) 998987-9023', 'Rua Arrocha Cart, 14');

-- --------------------------------------------------------

--
-- Estrutura para tabela `roupas`
--

CREATE TABLE `roupas` (
  `id_roupas` int(11) NOT NULL,
  `descrição_roupa` varchar(150) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `tamanho` varchar(5) NOT NULL,
  `preço` decimal(10,2) DEFAULT NULL,
  `estoque` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `roupas`
--

INSERT INTO `roupas` (`id_roupas`, `descrição_roupa`, `categoria`, `tamanho`, `preço`, `estoque`) VALUES
(1, 'Vestido Amarelo com bolinhas brancas', 'Vestidos', 'M', 139.90, 30),
(2, 'Calça Jeans preta', 'Calça', '48', 82.99, 20);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cartão_loja`
--
ALTER TABLE `cartão_loja`
  ADD PRIMARY KEY (`id_cartão`),
  ADD UNIQUE KEY `nome` (`nome`),
  ADD UNIQUE KEY `CPF` (`CPF`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `telefone` (`telefone`),
  ADD UNIQUE KEY `endereço` (`endereço`);

--
-- Índices de tabela `roupas`
--
ALTER TABLE `roupas`
  ADD PRIMARY KEY (`id_roupas`),
  ADD UNIQUE KEY `descrição_roupa` (`descrição_roupa`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cartão_loja`
--
ALTER TABLE `cartão_loja`
  MODIFY `id_cartão` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `roupas`
--
ALTER TABLE `roupas`
  MODIFY `id_roupas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
