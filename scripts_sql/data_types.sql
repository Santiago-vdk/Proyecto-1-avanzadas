CREATE TYPE data_cliente AS (
ID integer, 
nombre varchar(50),
apellidos varchar(69),
activo boolean
);

CREATE TYPE data_sucursal AS (
ID smallint, 
nombre varchar(25),
activo boolean
);

CREATE TYPE data_tienda AS (
ID smallint, 
id_sucursal smallint,
nombre varchar(40),
activo boolean
);

CREATE TYPE data_puesto_empleado AS (
ID smallint,
nombre varchar(40),
activo boolean
);

CREATE TYPE data_empleado AS (
ID smallint,
id_tienda smallint,
id_puesto smallint,
nombre varchar(90),
activo boolean
);

CREATE TYPE data_tipo_articulo AS (
ID smallint,
nombre varchar(45),
activo boolean
);

CREATE TYPE data_articulo AS (
ID integer, 
id_tipo smallint,
nombre varchar(45),
precio integer,
activo boolean
);

CREATE TYPE data_venta AS (
ID integer,
id_cliente integer, 
id_tienda smallint,
id_empleado smallint,
fecha date,
monto integer,
activo boolean
);

CREATE TYPE data_venta_articulo AS (
ID integer,
id_venta integer,
id_articulo smallint,
activo boolean
);

CREATE TYPE data_cambio_tabla AS (
ID smallint,
nombre varchar(35)
);

CREATE TYPE data_log AS (
ID bigint,
id_tabla smallint,
fila_id int,
id_sucursal smallint,
replicado boolean
);