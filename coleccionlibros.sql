-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 19-11-2023 a las 09:21:20
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `coleccionlibros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autor`
--

DROP TABLE IF EXISTS `autor`;
CREATE TABLE IF NOT EXISTS `autor` (
  `codigo` char(10) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `foto` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `correo` varchar(75) NOT NULL,
  `biografia` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nacionalidad` varchar(50) NOT NULL,
  `sexo` varchar(20) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `autor`
--

INSERT INTO `autor` (`codigo`, `nombres`, `apellidos`, `foto`, `correo`, `biografia`, `nacionalidad`, `sexo`) VALUES
('AM01181123', 'Rosa Idalia', 'Aguirre Machado', 'https://example.com/rosa_aguirre.jpg', 'rosa.aguirre@gmail.com', 'Nacio 1975', 'Venezuela', 'Femenino'),
('AS01301023', 'Anna', 'Smith', 'https://example.com/anna_smith.jpg', 'anna.smith@example.com', 'Anna Smith is a fictional author.', 'Reino Unido', 'Femenino'),
('EM02301023', 'Elena', 'Moreno', 'https://example.com/elena_moreno.jpg', 'elena.moreno@example.com', 'Elena Moreno is a fictional author.', 'México', 'Femenino'),
('JH03301023', 'John', 'Harrison', 'https://example.com/john_harrison.jpg', 'john.harrison@example.com', 'John Harrison is a fictional author.', 'Estados Unidos', 'Masculino'),
('LM04301023', 'Luis', 'Martínez', 'https://example.com/luis_martinez.jpg', 'luis.martinez@example.com', 'Luis Martínez is a fictional author.', 'España', 'Masculino'),
('RG05301023', 'Roberto', 'Gómez', 'https://example.com/roberto_gomez.jpg', 'roberto.gomez@example.com', 'Roberto Gómez is a fictional author.', 'Argentina', 'Masculino');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

DROP TABLE IF EXISTS `categoria`;
CREATE TABLE IF NOT EXISTS `categoria` (
  `codigo` char(6) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`codigo`, `nombre`, `descripcion`) VALUES
('CAT001', 'Romance', 'Historias de amor apasionadas y emocionales.'),
('CAT002', 'Ciencia Ficción', 'Exploración de mundos futuristas y tecnología avanzada.'),
('CAT003', 'Misterio', 'Resolución de enigmas y casos intrigantes.'),
('CAT004', 'Fantasía', 'Mundos mágicos y criaturas extraordinarias.'),
('CAT005', 'Aventura', 'Emocionantes viajes y situaciones peligrosas.'),
('CAT006', 'Historia', 'Exploración de eventos y personajes históricos.'),
('CAT007', 'Humor', 'Narrativas divertidas y situaciones cómicas.'),
('CAT008', 'Terror', 'Historias aterradoras y eventos sobrenaturales.'),
('CAT009', 'Biografía', 'Relatos detallados de la vida de personas reales.'),
('CAT010', 'Poesía', 'Expresión artística a través de la palabra y la métrica.'),
('CAT011', 'Autoayuda', 'Desarrollo personal y superación personal.'),
('CAT012', 'Negocios', 'Principios y estrategias para el éxito empresarial.'),
('CAT013', 'Cocina', 'Recetas y técnicas culinarias.'),
('CAT014', 'Viajes', 'Relatos de aventuras y experiencias en diferentes lugares del mundo.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `editorial`
--

DROP TABLE IF EXISTS `editorial`;
CREATE TABLE IF NOT EXISTS `editorial` (
  `codigo` char(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  `contacto` varchar(120) NOT NULL,
  `correo` varchar(70) NOT NULL,
  `pais` varchar(50) NOT NULL,
  `telefono` varchar(25) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `editorial`
--

INSERT INTO `editorial` (`codigo`, `nombre`, `descripcion`, `contacto`, `correo`, `pais`, `telefono`) VALUES
('EDI0011023', 'Libros Felices', 'Editorial de libros para niños', 'Laura Pérez', 'laura@librosfelices.com', 'España', '+34 123 456 789'),
('EDI0021023', 'Letras Sabias', 'Editorial de libros de no ficción', 'David Smith', 'david@letrassabias.com', 'Estados Unidos', '+1 987 654 321'),
('EDI0031023', 'Novelas Románticas', 'Especializada en novelas románticas', 'María García', 'maria@romanticas.com', 'México', '+52 555 123 456'),
('EDI0041023', 'Ciencia Ficción', 'Publica libros de ciencia ficción', 'John Johnson', 'john@scifi-books.com', 'Reino Unido', '+44 20 1234 5678'),
('EDI0051023', 'Historia Viva', 'Libros de historia y biografías', 'Ana Martínez', 'ana@historiaviva.com', 'Argentina', '+54 11 5555 5555');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formato`
--

DROP TABLE IF EXISTS `formato`;
CREATE TABLE IF NOT EXISTS `formato` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `formato`
--

INSERT INTO `formato` (`codigo`, `nombre`, `descripcion`) VALUES
(1, 'Físico', 'Formato en papel, como libros impresos.'),
(2, 'Digital', 'Formato digital, como libros electrónicos (e-books).'),
(3, 'Físico y Digital', 'Disponible en formato físico y digital.'),
(4, 'Audiolibro', 'Formato de audio para escuchar libros.'),
(5, 'Todos', 'Disponible en todos los formatos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idioma`
--

DROP TABLE IF EXISTS `idioma`;
CREATE TABLE IF NOT EXISTS `idioma` (
  `codigo` char(7) NOT NULL,
  `idioma` varchar(25) NOT NULL,
  `pais` varchar(50) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `idioma`
--

INSERT INTO `idioma` (`codigo`, `idioma`, `pais`) VALUES
('ARSA010', 'Árabe', 'Arabia Saudita'),
('DADA016', 'Danés', 'Dinamarca'),
('DEDE004', 'Alemán', 'Alemania'),
('ENUS002', 'Inglés', 'Estados Unidos'),
('ESES001', 'Español', 'España'),
('FIFI018', 'Finlandés', 'Finlandia'),
('FRFR003', 'Francés', 'Francia'),
('GRGR019', 'Griego', 'Grecia'),
('HUIU020', 'Húngaro', 'Hungría'),
('ITIT005', 'Italiano', 'Italia'),
('JAJP008', 'Japonés', 'Japón'),
('KOKR011', 'Coreano', 'Corea del Sur'),
('NLNL014', 'Holandés', 'Países Bajos'),
('NONO017', 'Noruego', 'Noruega'),
('PLPL013', 'Polaco', 'Polonia'),
('PTPT006', 'Portugués', 'Portugal'),
('RURU007', 'Ruso', 'Rusia'),
('SVSE015', 'Sueco', 'Suecia'),
('TRTR012', 'Turco', 'Turquía'),
('ZHCN009', 'Chino', 'China');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

DROP TABLE IF EXISTS `libros`;
CREATE TABLE IF NOT EXISTS `libros` (
  `codigo` char(20) NOT NULL,
  `titulo` varchar(120) NOT NULL,
  `existencias` int NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `isbn` varchar(13) NOT NULL,
  `sinopsis` text NOT NULL,
  `portada` longtext NOT NULL,
  `numpags` int NOT NULL,
  `anio` date NOT NULL,
  `codigo_autor` char(10) NOT NULL,
  `codigo_editorial` char(10) NOT NULL,
  `categorias` json NOT NULL,
  `formato` json NOT NULL,
  `idioma` json NOT NULL,
  `codigo_punt` char(22) NOT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_libro_autor` (`codigo_autor`),
  KEY `fk_libro_editorial` (`codigo_editorial`),
  KEY `fk_libro_puntuacion` (`codigo_punt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`codigo`, `titulo`, `existencias`, `precio`, `isbn`, `sinopsis`, `portada`, `numpags`, `anio`, `codigo_autor`, `codigo_editorial`, `categorias`, `formato`, `idioma`, `codigo_punt`) VALUES
('L0136425556821051123', 'Recetas del Mundo', 90, '19.99', '5036122456332', 'Sabores de diferentes culturas', 'https://example.com/recetas.jpg', 180, '2017-08-15', 'LM04301023', 'EDI0031023', '{\"categoria\": [\"CAT007\", \"CAT008\", \"CAT009\"]}', '{\"formato\": [\"Físico\"]}', '{\"idioma\": [\"ESES001\", \"FRFR003\", \"RURU007\"]}', 'L013642555682105112303'),
('L0150361224563321123', 'La Aventura Perdida', 75, '24.99', '5036122456332', 'Descubre un mundo desconocido', 'https://example.com/aventura.jpg', 250, '2019-05-22', 'JH03301023', 'EDI0031023', '{\"categoria\": [\"CAT005\", \"CAT001\", \"CAT002\"]}', '{\"formato\": [\"Físico\"]}', '{\"idioma\": [\"ESES001\", \"ENUS002\"]}', 'L015036122456332112301'),
('L0163243220125621123', 'Secretos del Universo', 120, '34.99', '5036122456332', 'Explora el cosmos y sus misterios', 'https://example.com/universo.jpg', 400, '2020-11-30', 'EM02301023', 'EDI0031023', '{\"categoria\": [\"CAT002\", \"CAT004\", \"CAT006\"]}', '{\"formato\": [\"Digital\", \"Físico\"]}', '{\"idioma\": [\"ENUS002\", \"FRFR003\"]}', 'L016324322012562112302'),
('L0197812345678901023', 'El Gran Libro', 100, '29.99', '9781234567890', 'Una emocionante historia', 'https://example.com/portada.jpg', 300, '2018-10-11', 'JH03301023', 'EDI0011023', '{\"categoria\": [\"CAT001\", \"CAT003\", \"CAT004\"]}', '{\"formato\": [\"Digital\", \"Físico\"]}', '{\"idioma\": [\"ESES001\", \"ENUS002\", \"FRFR003\", \"RURU007\"]}', 'L019781234567890102301');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntuacion`
--

DROP TABLE IF EXISTS `puntuacion`;
CREATE TABLE IF NOT EXISTS `puntuacion` (
  `codigo` char(22) NOT NULL,
  `usuarios` int NOT NULL,
  `puntuacion` int NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `puntuacion`
--

INSERT INTO `puntuacion` (`codigo`, `usuarios`, `puntuacion`) VALUES
('L013642555682105112303', 0, 0),
('L015036122456332112301', 0, 0),
('L016324322012562112302', 0, 0),
('L019781234567890102301', 1, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
CREATE TABLE IF NOT EXISTS `tipousuario` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(13) NOT NULL,
  `descripcion` varchar(75) NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`codigo`, `tipo`, `descripcion`) VALUES
(1, 'administrador', 'Personal administrativo de la tienda.'),
(2, 'cliente', 'Usuario común de la tienda.'),
(3, 'autor', 'Usuario propietario de los libros, puede publicar sus obras.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `codigo` char(10) NOT NULL,
  `correo` varchar(70) NOT NULL,
  `contra` varchar(20) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `edad` int NOT NULL,
  `fechanac` date NOT NULL,
  `sexo` varchar(20) NOT NULL,
  `tipo_codigo` int NOT NULL,
  `carrito` json DEFAULT NULL,
  `deseos` json DEFAULT NULL,
  PRIMARY KEY (`codigo`),
  KEY `fk_user_tipo` (`tipo_codigo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`codigo`, `correo`, `contra`, `nombres`, `apellidos`, `edad`, `fechanac`, `sexo`, `tipo_codigo`, `carrito`, `deseos`) VALUES
('JM01181123', 'juan.martinez@yahoo.com', 'contra456', 'Juan Carlos', 'Juárez Martínez', 30, '1993-03-01', 'Masculino', 1, NULL, NULL),
('LG01011123', 'marcos.gal2004@gmail.com', 'contra321', 'Marcos Asensio', 'López Corsio', 41, '2004-12-12', 'Masculino', 2, NULL, NULL),
('MT02011123', 'leslimata42@gmail.com', 'contra123', 'Lesli Gabriela', 'Mata Cardoza', 25, '1998-08-24', 'Femenino', 2, NULL, NULL);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `fk_libro_autor` FOREIGN KEY (`codigo_autor`) REFERENCES `autor` (`codigo`),
  ADD CONSTRAINT `fk_libro_editorial` FOREIGN KEY (`codigo_editorial`) REFERENCES `editorial` (`codigo`),
  ADD CONSTRAINT `fk_libro_puntuacion` FOREIGN KEY (`codigo_punt`) REFERENCES `puntuacion` (`codigo`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_user_tipo` FOREIGN KEY (`tipo_codigo`) REFERENCES `tipousuario` (`codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
