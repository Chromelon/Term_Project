CREATE TABLE `allTasks` (
  `jobid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `jobdesc` varchar(500) NOT NULL,
  `priority` int(1) UNSIGNED NOT NULL DEFAULT '1',
  `time` int(4) UNSIGNED NOT NULL,
  `status` varchar(10),
  PRIMARY KEY (`jobid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `myTasks` (
  `jobid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `jobdesc` varchar(500) NOT NULL,
  `priority` int(1) UNSIGNED NOT NULL DEFAULT '1',
  `time` int(4) UNSIGNED NOT NULL,
  `status` varchar(10),
  PRIMARY KEY (`jobid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `teamMembers` (
  `memberid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(60) NOT NULL,
  `lastName` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`memberid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `trades` (
  `tradeid` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `traderid` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `tradeeid` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `jobdesc` varchar(500) NOT NULL,
  `priority` int(1) UNSIGNED NOT NULL DEFAULT '1',
  `time` int(4) UNSIGNED NOT NULL,
  PRIMARY KEY (`tradeid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
