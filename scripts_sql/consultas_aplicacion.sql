--Functions
--Author: OskrD
--Version: 1.0

-- Para consultas de los administradores

CREATE FUNCTION dinero_tienda_f (tienda INTEGER)
  RETURNS BIGINT AS $$
  SELECT SUM(Monto) AS Ventas_tienda
  FROM venta
  WHERE id_tienda = $1 AND activo = TRUE
$$ LANGUAGE SQL;

CREATE FUNCTION venta_cliente_f (cliente INTEGER, fecha_i TIMESTAMP, fecha_f TIMESTAMP)
  RETURNS BIGINT AS $$
  SELECT COUNT(*) AS Ventas_cliente
  FROM venta
  WHERE id_cliente = $1 AND fecha >= $2 AND fecha <= $3
    AND Activo = TRUE
$$ LANGUAGE SQL;

CREATE FUNCTION promedio_compra_cliente_f(cliente INTEGER, desde DATE, hasta DATE)
  RETURNS NUMERIC AS $$
  SELECT AVG(monto) AS Monto_promedio
  FROM venta
  WHERE id_cliente = $1 AND fecha >= $2 AND fecha <= $3
    AND Activo = TRUE
$$ LANGUAGE SQL;

CREATE FUNCTION venta_producto_mes_f(articulo INTEGER, mes INTEGER)
  RETURNS BIGINT AS $$
  SELECT SUM(a.precio) AS venta_mes_producto
  FROM venta v, venta_articulo va, articulo a
  WHERE EXTRACT (MONTH FROM v.fecha) = mes AND
    v.activo = TRUE AND va.activo = TRUE AND
    va.id_articulo = articulo AND v.id = va.id_venta
    AND a.id = va.id_articulo AND a.activo = TRUE
$$ LANGUAGE SQL;

-- Para consultas del gerente

CREATE FUNCTION dinero_tienda_periodo_f(tienda INTEGER, desde DATE, hasta DATE)
  RETURNS BIGINT AS $$
  SELECT SUM(Monto) AS Ventas_tienda
  FROM venta
  WHERE id_tienda = $1 AND fecha >= $2 AND fecha <= $3 AND activo = TRUE
$$ LANGUAGE SQL;

CREATE FUNCTION dinero_tienda_producto_periodo_f(tienda INTEGER, articulo INTRGER, desde DATE, hasta DATE)
  RETURNS BIGINT AS $$
  SELECT SUM(precio) AS Ventas_tienda_producto
  FROM venta v, venta_articulo va, articulo a
  WHERE v.id_tienda = $1 AND v.fecha >= $3 AND v.fecha <= $4 AND v.activo = TRUE
    AND va.activo = TRUE AND va.id_articulo = $2 AND a.id = $2
$$ LANGUAGE SQL;

CREATE TYPE mejores_clientes_t AS (
  Nombre VARCHAR(50),
  Apellidos VARCHAR(69),
  Dinero BIGINT
);

CREATE FUNCTION mejores_clientes_f(desde DATE, hasta DATE)
  RETURNS SETOF mejores_clientes_t AS $$
  SELECT c.Nombre,
    c.Apellidos,
    SUM(v.monto) AS dinero
  FROM venta v, cliente c
  WHERE v.activo = TRUE AND c.activo = TRUE AND v.id_cliente = c.id AND v.fecha >=$1
    AND v.fecha <= $2
  GROUP BY c.Nombre, c.Apellidos, v.monto
  ORDER BY v.monto desc
  FETCH FIRST 3 ROWS ONLY
$$ LANGUAGE SQL;
