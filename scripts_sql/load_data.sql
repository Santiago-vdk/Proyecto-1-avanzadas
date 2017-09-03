--Script para cargar datos de prueba

--Inserts Tabla sucursal
INSERT INTO public.sucursal(
	id_sucursal, nombre, eliminado)
	VALUES (1, 'Heredia', 'false');

INSERT INTO public.sucursal(
	id_sucursal, nombre, eliminado)
	VALUES (2, 'San Jose', 'false');
    
INSERT INTO public.sucursal(
	id_sucursal, nombre, eliminado)
	VALUES (3, 'Alajuela', 'false');

--Inserts Tabla tienda
INSERT INTO public.tienda(
	id_tienda, id_sucursal, nombre, eliminado)
	VALUES (1, 2, 'El Rey', 'false');
    
INSERT INTO public.tienda(
	id_tienda, id_sucursal, nombre, eliminado)
	VALUES (2, 1, 'Pequeno Mundo', 'false');
    
INSERT INTO public.tienda(
	id_tienda, id_sucursal, nombre, eliminado)
	VALUES (3, 3, 'Shopper', 'false');

--Inserts Tabla tipo_articulo
INSERT INTO public.tipo_articulo(
	id_tipo, nombre, eliminado)
	VALUES (1, 'articulo electronico', 'false');

INSERT INTO public.tipo_articulo(
	id_tipo, nombre, eliminado)
	VALUES (2, 'prenda de vestir', 'false');

--Inserts Tabla cliente
INSERT INTO public.cliente(
	id_cliente, nombre, apellidos, eliminado)
	VALUES (1, 'Oscar', 'Carmona', 'false');

INSERT INTO public.cliente(
	id_cliente, nombre, apellidos, eliminado)
	VALUES (2, 'Rafael', 'Chacon', 'false');
    
INSERT INTO public.cliente(
	id_cliente, nombre, apellidos, eliminado)
	VALUES (3, 'Ricardo', 'Valverde', 'false');

INSERT INTO public.cliente(
	id_cliente, nombre, apellidos, eliminado)
	VALUES (4, 'Santiago', 'Vargas', 'false');
    
--Inserts Tabla articulo
INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (1, 1, 'Laptop', 300000, 'false');

INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (2, 1, 'Tablet', 150000, 'false');

INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (3, 1, 'Smartphone', 130000, 'false');

INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (4, 1, 'SmartWatch', 60000, 'false');

INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (5, 2, 'Vestido',30000, 'false');

INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (6, 2, 'Pantalon',15000, 'false');

INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (7, 2, 'Camisa',12000, 'false');

INSERT INTO public.articulo(
	id_articulo, id_tipo, nombre, precio, eliminado)
	VALUES (8, 2, 'Chaleco',17000, 'false');
    
--Inserts Tabla puesto_empleado
INSERT INTO public.puesto_empleado(
	id_puesto, nombre, eliminado)
	VALUES (1, 'Gerente', 'false');
    
INSERT INTO public.puesto_empleado(
	id_puesto, nombre, eliminado)
	VALUES (2, 'Administrador', 'false');
    
INSERT INTO public.puesto_empleado(
	id_puesto, nombre, eliminado)
	VALUES (3, 'Vendedor', 'false');
    
--Inserts Tabla empleado
INSERT INTO public.empleado(
	id_empleado, id_tienda, id_puesto, nombre, eliminado)
	VALUES (1, 1, 1, 'Fabian', 'false');
    
INSERT INTO public.empleado(
	id_empleado, id_tienda, id_puesto, nombre, eliminado)
	VALUES (2, 1, 2, 'Daniel', 'false');
    
INSERT INTO public.empleado(
	id_empleado, id_tienda, id_puesto, nombre, eliminado)
	VALUES (3, 1, 3, 'Amanda', 'false');
    
INSERT INTO public.empleado(
	id_empleado, id_tienda, id_puesto, nombre, eliminado)
	VALUES (4, 2, 2, 'Sofia', 'false');
    
INSERT INTO public.empleado(
	id_empleado, id_tienda, id_puesto, nombre, eliminado)
	VALUES (5, 2, 3, 'Francisco', 'false');
    
INSERT INTO public.empleado(
	id_empleado, id_tienda, id_puesto, nombre, eliminado)
	VALUES (6, 3, 2, 'Gerardo', 'false');
    
INSERT INTO public.empleado(
	id_empleado, id_tienda, id_puesto, nombre, eliminado)
	VALUES (7, 3, 3, 'Lorena', 'false');
    
--Inserts Tabla venta
INSERT INTO public.venta(
	id_venta, id_cliente, id_tienda, id_empleado, id_articulo, fecha, monto, eliminado)
	VALUES ('1','1','1','3','1','28/8/2017','300000','false');

INSERT INTO public.venta(
	id_venta, id_cliente, id_tienda, id_empleado, id_articulo, fecha, monto, eliminado)
	VALUES ('2','2','1','3','2','28/8/2017','150000','false');
    
INSERT INTO public.venta(
	id_venta, id_cliente, id_tienda, id_empleado, id_articulo, fecha, monto, eliminado)
	VALUES ('3','3','2','5','3','29/8/2017','130000','false');
    
INSERT INTO public.venta(
	id_venta, id_cliente, id_tienda, id_empleado, id_articulo, fecha, monto, eliminado)
	VALUES ('4','4','2','5','4','29/8/2017','60000','false');

INSERT INTO public.venta(
	id_venta, id_cliente, id_tienda, id_empleado, id_articulo, fecha, monto, eliminado)
	VALUES ('5','1','3','7','5','30/8/2017','30000','false');
    
INSERT INTO public.venta(
	id_venta, id_cliente, id_tienda, id_empleado, id_articulo, fecha, monto, eliminado)
	VALUES ('6','2','3','7','6','30/8/2017','15000','false');
    

    
    