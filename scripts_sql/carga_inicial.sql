select * from sucursal;
select * from tienda;
select * from articulo;
select * from venta;
select * from venta_articulo;
select * from empleado;
select * from tipo_articulo;
select * from puesto_empleado;
select * from cambio_tabla;
select * from log_tabla;
select * from cliente;

delete from log_tabla;
delete from cambio_tabla;
delete from venta_articulo;
delete from puesto_empleado;
delete from articulo;
delete from venta;
delete from tipo_articulo;
delete from empleado;
delete from tienda;
delete from sucursal;
delete from cliente;

ALTER SEQUENCE cliente_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE articulo_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE cambio_tabla_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE empleado_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE log_tabla_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE puesto_empleado_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE sucursal_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE tienda_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE tipo_articulo_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE venta_articulo_id_seq MINVALUE 0 RESTART;
ALTER SEQUENCE venta_id_seq MINVALUE 0 RESTART;


INSERT INTO cambio_tabla (nombre) VALUES ('puesto_empleado');
INSERT INTO cambio_tabla (nombre) VALUES ('empleado');
INSERT INTO cambio_tabla (nombre) VALUES ('cliente');
INSERT INTO cambio_tabla (nombre) VALUES ('sucursal');
INSERT INTO cambio_tabla (nombre) VALUES ('tienda');
INSERT INTO cambio_tabla (nombre) VALUES ('tipo_articulo');
INSERT INTO cambio_tabla (nombre) VALUES ('articulo');
INSERT INTO cambio_tabla (nombre) VALUES ('venta');
INSERT INTO cambio_tabla (nombre) VALUES ('venta_articulo');


INSERT INTO sucursal (nombre) VALUES ('Heredia');
INSERT INTO sucursal (nombre) VALUES ('San José');
INSERT INTO sucursal (nombre) VALUES ('Alajuela');

INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (4,1,1);
INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (4,2,1);
INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (4,3,1);

INSERT INTO tienda (id_sucursal, nombre) VALUES (1, 'HELLEDIA');
INSERT INTO tienda (id_sucursal, nombre) VALUES (2, 'JOSESAN');
INSERT INTO tienda (id_sucursal, nombre) VALUES (3, 'ALJUEX');

INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (5,1,1);
INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (5,2,2);
INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (5,3,3);

INSERT INTO puesto_empleado (nombre) VALUES ('Gerente');
INSERT INTO puesto_empleado (nombre) VALUES ('Administrador');
INSERT INTO puesto_empleado (nombre) VALUES ('Vendedor');

INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (1,1,1);
INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (1,2,1);
INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (1,3,1);

INSERT INTO tipo_articulo (nombre) VALUES ('Electrónico');
INSERT INTO tipo_articulo (nombre) VALUES ('Prendas');

INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (6,1,1);
INSERT INTO log_tabla(id_tabla,fila_id,id_sucursal) VALUES (6,2,1);
