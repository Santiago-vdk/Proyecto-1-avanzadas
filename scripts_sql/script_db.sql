--CREATE DATABASE amanzadatesta;

--SET SCHEMA 'amanzadatesta';

-- Falta codear los views para las consultas especificas


CREATE TABLE cliente (
	id_cliente serial primary key,
	nombre varchar(50) NOT NULL,
	apellidos varchar(69) NOT NULL,
	eliminado bool NOT NULL
);

CREATE TABLE sucursal (
	id_sucursal serial primary key,
	nombre varchar(25) NOT NULL,
	eliminado bool NOT NULL
);

CREATE TABLE tienda (
	id_tienda serial primary key,
    id_sucursal smallint NOT NULL references sucursal(id_sucursal) ON DELETE CASCADE,
	nombre varchar(40) NOT NULL,
	eliminado bool NOT NULL
);

CREATE TABLE puesto_empleado (
	id_puesto serial primary key,
	nombre varchar(40) NOT NULL,
	eliminado bool NOT NULL	
);

CREATE TABLE empleado (
	id_empleado serial primary key,
	id_tienda smallint NOT NULL references tienda(id_tienda) ON DELETE CASCADE,
	id_puesto smallint NOT NULL references puesto_empleado(id_puesto) ON DELETE CASCADE,
	nombre varchar(90) NOT NULL,
	eliminado bool NOT NULL
);

CREATE TABLE tipo_articulo (
	id_tipo serial primary key,
	nombre varchar (45) NOT NULL,
	eliminado bool NOT NULL
);

CREATE TABLE articulo (
	id_articulo serial primary key,
	id_tipo smallint NOT NULL references tipo_articulo(id_tipo) ON DELETE CASCADE,
	nombre varchar(45) NOT NULL,
	precio int NOT NULL,
	eliminado bool NOT NULL
);


CREATE TABLE venta (
    id_venta serial primary key ,
    id_cliente int NOT NULL references cliente(id_cliente) ON DELETE CASCADE,
    id_tienda smallint NOT NULL references tienda(id_tienda) ON DELETE CASCADE,
	id_empleado int NOT NULL references empleado(id_empleado) ON DELETE CASCADE,
    id_articulo smallint NOT NULL references articulo(id_articulo) ON DELETE CASCADE,
	fecha date NOT NULL,
	monto integer NOT NULL,
	eliminado bool NOT NULL
);

CREATE TABLE tabla (
	id_tabla serial primary key,
	nombre varchar(35)
);

CREATE TABLE log (
	id_log serial primary key,
	id_tabla int NOT NULL references tabla(id_tabla) ON DELETE CASCADE,
	fila int NOT NULL,
	replicado boolean NOT NULL
);

ALTER DATABASE "amanzadatesta" SET datestyle TO "ISO, DMY";

CREATE TYPE data_cliente AS (
id_cliente integer, 
nombre varchar(50),
apellidos varchar(69)
);

CREATE TYPE data_sucursal AS (
id_sucursal integer, 
nombre varchar(25)
);

CREATE TYPE data_tienda AS (
id_tienda integer, 
id_sucursal smallint,
nombre varchar(40)
);

CREATE TYPE data_puesto_empleado AS (
id_puesto integer,
nombre varchar(40)
);

CREATE TYPE data_empleado AS (
id_empleado integer,
id_tienda smallint,
id_puesto smallint,
nombre varchar(90)
);

CREATE TYPE data_tipo_articulo AS (
id_tipo integer,
nombre varchar(45)
);

CREATE TYPE data_articulo AS (
id_articulo integer, 
id_tipo smallint,
nombre varchar(45),
precio integer
);

CREATE TYPE data_venta AS (
id_venta integer,
id_cliente integer, 
id_tienda smallint,
id_empleado integer,
id_articulo smallint,
fecha date,
monto integer
);

CREATE TYPE data_tabla AS (
id_tabla integer,
nombre varchar(35)
);

CREATE TYPE data_log AS (
id_log integer,
id_tabla int,
fila int,
replicado boolean
);


--select insert_articulo(9, 2::smallint,'Sombrero'::character varying);
--select update_articulo(9, 2::smallint,'Cara'::character varying);
--select disable_articulo(1);

--Cliente

CREATE OR REPLACE FUNCTION get_cliente(_id integer)
  RETURNS data_cliente AS $$
SELECT id_cliente,nombre,apellidos 
 			 from "cliente" 
 			 where "id_cliente"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_cliente()
  RETURNS SETOF data_cliente AS $$
SELECT id_cliente,nombre,apellidos 
 			 from "cliente" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_cliente(_id_cliente integer,
	_nombre  text, _apellidos text)
  RETURNS void AS $$
INSERT INTO cliente
	VALUES ($1, $2, $3, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_cliente(_id integer,
	_nombre  text, _apellidos text)
  RETURNS void AS $$
UPDATE cliente
	SET "nombre"=$2, "apellidos"=$3
	WHERE "id_cliente"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_cliente(_id integer)
  RETURNS void AS $$
UPDATE cliente
	SET "eliminado"='true'
	WHERE "id_cliente"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_cliente(_id integer)
  RETURNS void AS $$
UPDATE cliente
	SET "eliminado"='false'
	WHERE "id_cliente"=$1 ;
$$ LANGUAGE sql;

--Sucursal

CREATE OR REPLACE FUNCTION get_sucursal(_id integer)
  RETURNS data_sucursal AS $$
SELECT id_sucursal,nombre 
 			 from "sucursal" 
 			 where "id_sucursal"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_sucursal()
  RETURNS SETOF data_sucursal AS $$
SELECT id_sucursal,nombre 
 			 from "sucursal" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_sucursal(_id_sucursal integer,
	_nombre  text)
  RETURNS void AS $$
INSERT INTO sucursal
	VALUES ($1, $2, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_sucursal(_id integer,
	_nombre  text)
  RETURNS void AS $$
UPDATE sucursal
	SET "nombre"=$2
	WHERE "id_sucursal"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_sucursal(_id integer)
  RETURNS void AS $$
UPDATE sucursal
	SET "eliminado"='true'
	WHERE "id_sucursal"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_sucursal(_id integer)
  RETURNS void AS $$
UPDATE sucursal
	SET "eliminado"='false'
	WHERE "id_sucursal"=$1 ;
$$ LANGUAGE sql;

--Tienda

CREATE OR REPLACE FUNCTION get_tienda(_id integer)
  RETURNS data_tienda AS $$
SELECT id_tienda,id_sucursal,nombre
 			 from "tienda" 
 			 where "id_tienda"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_tienda()
  RETURNS SETOF data_tienda AS $$
SELECT id_tienda,id_sucursal,nombre 
 			 from "tienda" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_tienda(_id_tienda integer,
	_id_sucursal smallint,_nombre  text)
  RETURNS void AS $$
INSERT INTO tienda
	VALUES ($1, $2, $3, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_tienda(_id integer,
	_id_sucursal smallint, _nombre  text)
  RETURNS void AS $$
UPDATE tienda
	SET "id_sucursal"=$2,"nombre"=$3
	WHERE "id_tienda"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_tienda(_id integer)
  RETURNS void AS $$
UPDATE tienda
	SET "eliminado"='true'
	WHERE "id_tienda"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_tienda(_id integer)
  RETURNS void AS $$
UPDATE tienda
	SET "eliminado"='false'
	WHERE "id_tienda"=$1 ;
$$ LANGUAGE sql;

--puesto

CREATE OR REPLACE FUNCTION get_puesto_empleado(_id integer)
  RETURNS data_puesto_empleado AS $$
SELECT id_puesto,nombre
 			 from "puesto_empleado" 
 			 where "id_puesto"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_puesto_empleado()
  RETURNS SETOF data_puesto_empleado AS $$
SELECT id_puesto,nombre 
 			 from "puesto_empleado" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_puesto_empleado(_id_puesto integer,
	_nombre  text)
  RETURNS void AS $$
INSERT INTO puesto_empleado
	VALUES ($1, $2, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_puesto_empleado(_id integer,
	_nombre  text)
  RETURNS void AS $$
UPDATE puesto_empleado
	SET "nombre"=$2
	WHERE "id_puesto"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_puesto_empleado(_id integer)
  RETURNS void AS $$
UPDATE puesto_empleado
	SET "eliminado"='true'
	WHERE "id_puesto"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_puesto_empleado(_id integer)
  RETURNS void AS $$
UPDATE puesto_empleado
	SET "eliminado"='false'
	WHERE "id_puesto"=$1 ;
$$ LANGUAGE sql;


-- Empleado

CREATE OR REPLACE FUNCTION get_empleado(_id integer)
  RETURNS data_empleado AS $$
SELECT id_empleado,id_tienda,id_puesto,nombre
 			 from "empleado" 
 			 where "id_empleado"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_empleado()
  RETURNS SETOF data_empleado AS $$
SELECT id_empleado,id_tienda,id_puesto,nombre
 			 from "empleado" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_empleado(_id_empleado integer,
	id_tienda smallint, id_puesto smallint, _nombre  text)
  RETURNS void AS $$
INSERT INTO empleado
	VALUES ($1, $2, $3, $4, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_empleado(_id integer,
	id_tienda smallint, id_puesto smallint, _nombre  text)
  RETURNS void AS $$
UPDATE empleado
	SET "id_tienda"=$2, "id_puesto"=$3, "nombre"=$4
	WHERE "id_empleado"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_empleado(_id integer)
  RETURNS void AS $$
UPDATE empleado
	SET "eliminado"='true'
	WHERE "id_empleado"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_empleado(_id integer)
  RETURNS void AS $$
UPDATE empleado
	SET "eliminado"='false'
	WHERE "id_empleado"=$1 ;
$$ LANGUAGE sql;

-- tipo Articulo

CREATE OR REPLACE FUNCTION get_tipo_articulo(_id integer)
  RETURNS data_tipo_articulo AS $$
SELECT id_tipo,nombre
 			 from "tipo_articulo" 
 			 where "id_tipo"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_tipo_articulo()
  RETURNS SETOF data_tipo_articulo AS $$
SELECT id_tipo,nombre
 			 from "tipo_articulo" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_tipo_articulo(_id_tipo_articulo integer,
	_nombre  text)
  RETURNS void AS $$
INSERT INTO tipo_articulo
	VALUES ($1, $2, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_tipo_articulo(_id integer,
	_nombre  text)
  RETURNS void AS $$
UPDATE tipo_articulo
	SET "nombre"=$2
	WHERE "id_tipo"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_tipo_articulo(_id integer)
  RETURNS void AS $$
UPDATE tipo_articulo
	SET "eliminado"='true'
	WHERE "id_tipo"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_tipo_articulo(_id integer)
  RETURNS void AS $$
UPDATE tipo_articulo
	SET "eliminado"='false'
	WHERE "id_tipo"=$1 ;
$$ LANGUAGE sql;

--Articulo

CREATE OR REPLACE FUNCTION get_articulo(_id integer)
  RETURNS data_articulo AS $$
SELECT id_articulo,id_tipo,nombre, precio 
 			 from "articulo" 
 			 where "id_articulo"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_articulo()
  RETURNS SETOF data_articulo AS $$
SELECT id_articulo,id_tipo,nombre, precio 
 			 from "articulo" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_articulo(_id_articulo integer,
	_id_tipo smallint, _nombre  text, _precio integer)
  RETURNS void AS $$
INSERT INTO articulo
	VALUES ($1, $2, $3,$4, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_articulo(_id integer,
	_id_tipo smallint, nombre_v  text, _precio integer)
  RETURNS void AS $$
UPDATE articulo
	SET "id_tipo"=$2, "nombre"=$3, "precio"=$4
	WHERE "id_articulo"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_articulo(_id integer)
  RETURNS void AS $$
UPDATE articulo
	SET "eliminado"='true'
	WHERE "id_articulo"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_articulo(_id integer)
  RETURNS void AS $$
UPDATE articulo
	SET "eliminado"='false'
	WHERE "id_articulo"=$1 ;
$$ LANGUAGE sql; 

--Venta

CREATE OR REPLACE FUNCTION get_venta(_id integer)
  RETURNS data_venta AS $$
SELECT id_venta,id_cliente,id_tienda,id_empleado,id_articulo,
		fecha,monto 
 			 from "venta" 
 			 where "id_venta"=$1 and "eliminado"=false; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_venta()
  RETURNS SETOF data_venta AS $$
SELECT id_venta,id_cliente,id_tienda,id_empleado,id_articulo,
		fecha,monto 
 			 from "venta" 
 			 where "eliminado"=false; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_venta(_id_venta integer,
	_id_cliente smallint,_id_tienda smallint, _id_empleado smallint,
	_id_articulo smallint, _fecha date, _monto integer)
  RETURNS void AS $$
INSERT INTO venta
	VALUES ($1, $2, $3, $4, $5, $6, $7, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_venta(_id integer,
	_id_cliente smallint,_id_tienda smallint, _id_empleado smallint,
	_id_articulo smallint, _fecha date, _monto integer)
  RETURNS void AS $$
UPDATE venta
	SET "id_cliente"=$2, "id_tienda"=$3, "id_empleado"=$4,
	 "id_articulo"=$5, "fecha"=$6, "monto" = $7
	WHERE "id_venta"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION disable_venta(_id integer)
  RETURNS void AS $$
UPDATE venta
	SET "eliminado"='true'
	WHERE "id_venta"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION enable_venta(_id integer)
  RETURNS void AS $$
UPDATE venta
	SET "eliminado"='false'
	WHERE "id_venta"=$1 ;
$$ LANGUAGE sql; 

-- tabla

CREATE OR REPLACE FUNCTION get_tabla(_id integer)
  RETURNS data_tabla AS $$
SELECT id_tabla,nombre
 			 from "tabla" 
 			 where "id_tabla"=$1; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_tabla()
  RETURNS SETOF data_tabla AS $$
SELECT id_tabla,nombre
 			 from "tabla"; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_tabla(_id_tabla integer,
	nombre text)
  RETURNS void AS $$
INSERT INTO tabla
	VALUES ($1, $2);
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_tabla(_id integer,
	nombre text)
  RETURNS void AS $$
UPDATE tabla
	SET "nombre"= $2
	WHERE "id_tabla"=$1 ;
$$ LANGUAGE sql; 

--log

CREATE OR REPLACE FUNCTION get_log(_id integer)
  RETURNS data_log AS $$
SELECT id_log,id_tabla,fila,replicado
 			 from "log" 
 			 where "id_log"=$1; 
$$ LANGUAGE sql;  

CREATE OR REPLACE FUNCTION list_log()
  RETURNS SETOF data_log AS $$
SELECT id_log,id_tabla,fila,replicado 
 			 from "log"; 
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION insert_log(_id_log integer,
	_id_tabla integer, _fila integer)
  RETURNS void AS $$
INSERT INTO log
	VALUES ($1, $2, $3, 'false');
$$ LANGUAGE sql;

CREATE OR REPLACE FUNCTION update_log(_id integer,
	_id_tabla integer, _fila integer)
  RETURNS void AS $$
UPDATE log
	SET "id_tabla"=$2, "fila"=$3
	WHERE "id_log"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION set_replicado_log(_id integer)
  RETURNS void AS $$
UPDATE log
	SET "replicado"='true'
	WHERE "id_log"=$1 ;
$$ LANGUAGE sql; 

CREATE OR REPLACE FUNCTION unset_replicado_log(_id integer)
  RETURNS void AS $$
UPDATE log
	SET "replicado"='false'
	WHERE "id_log"=$1 ;
$$ LANGUAGE sql;
