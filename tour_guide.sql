-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 27, 2020 at 08:08 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tour_guide`
--

-- --------------------------------------------------------

--
-- Table structure for table `image_details`
--

CREATE TABLE `image_details` (
  `id` int(11) NOT NULL,
  `image_url` varchar(200) NOT NULL,
  `location` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `image_details`
--

INSERT INTO `image_details` (`id`, `image_url`, `location`) VALUES
(1, 'http://192.168.43.51/TourGuide/uploads/699248682_1587539921.jpeg', ''),
(2, 'http://192.168.43.51/TourGuide/uploads/2038623319_1587543781.jpeg', ''),
(3, 'http://192.168.43.51/TourGuide/uploads/1522182949_1587633478.jpeg', ''),
(4, 'http://192.168.43.51/TourGuide/uploads/1818648414_1587633481.jpeg', ''),
(5, 'http://192.168.43.51/TourGuide/uploads/1209213722_1587633540.jpeg', ''),
(6, 'http://192.168.43.51/TourGuide/uploads/198045259_1587633543.jpeg', ''),
(7, 'http://192.168.43.51/TourGuide/uploads/615826477_1587636233.jpeg', ''),
(8, 'http://192.168.43.51/TourGuide/uploads/844721520_1587899267.jpeg', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `image_details`
--
ALTER TABLE `image_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `image_details`
--
ALTER TABLE `image_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
