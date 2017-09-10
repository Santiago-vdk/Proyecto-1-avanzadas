--Views
--Author: OskrD
--Version: 1.2

-- Para consultas a las tablas (GETs)

CREATE VIEW cliente_v AS
  SELECT Nombre, Apellidos
  FROM cliente
  WHERE Activo = TRUE;

CREATE VIEW empleado_v AS
  SELECT e.Nombre,
    p.Nombre AS puesto,
    t.Nombre AS tienda
  FROM empleado e,
    puesto_empleado p,
    tienda t
  WHERE e.id_puesto = p.id AND e.id_tienda = t.id AND e.Activo = TRUE;

CREATE VIEW tienda_v AS
  SELECT t.Nombre,
    s.Nombre Ubicación
  FROM tienda t,
    sucursal s
  WHERE t.id_sucursal = s.id AND t.Activo = TRUE;

CREATE VIEW tipo_articulo_v AS
  SELECT Nombre
  FROM tipo_articulo
  WHERE Activo = TRUE;

CREATE VIEW puesto_empleado_v AS
  SELECT Nombre
  FROM puesto_empleado
  WHERE Activo = TRUE;

CREATE VIEW articulo_v AS
  SELECT a.Nombre,
    t.Nombre AS Tipo,
    a.Precio
  FROM articulo a,
    tipo_articulo t
  WHERE a.id_tipo = t.id AND a.Activo = TRUE;

CREATE VIEW venta_v AS
  SELECT c.nombre AS cliente,
    t.nombre AS tienda,
    e.nombre AS empleado,
    v.fecha AS fecha,
    v.monto AS monto
  FROM cliente c,
    tienda t,
    empleado e,
    venta v
  WHERE c.id = v.id_cliente AND t.id = v.id_tienda AND e.id = v.id_empleado AND
  	v.Activo = TRUE;

CREATE VIEW venta_articulo_v AS
  SELECT v.id_venta AS Factura,
    a.nombre AS articulo
  FROM venta_articulo v,
    articulo a
  WHERE a.id = v.id_articulo AND v.Activo = TRUE;



-- Para consultas de los administradores

CREATE VIEW dinero_tienda AS
  SELECT SUM(Monto) AS Ventas_tienda
  FROM venta;
