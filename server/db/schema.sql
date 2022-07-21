-- Work off a diagramed  
drop database if exists ultimatemovies;

create database ultimatemovies;

use ultimatemovies;

create table movies (
  id int primary key auto_increment,
  title varchar(40),
  trailer varchar(300),
  hasWatched int,
  watchCount int
);