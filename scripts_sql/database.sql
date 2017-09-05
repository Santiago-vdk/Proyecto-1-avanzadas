--Database for ChuicasPro
--Author: OskrD
--Version: 2.0


CREATE TABLE cliente (
  ID SERIAL,
  Nombre    VARCHAR(50) NOT NULL,
  Apellidos VARCHAR(69) NOT NULL,
  Activo    BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY(ID)
);

CREATE TABLE sucursal (
  ID      SMALLSERIAL,
  Nombre  VARCHAR(25) NOT NULL UNIQUE,
  Activo  BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY(ID)
);

CREATE TABLE tienda (
  ID SMALLSERIAL,
  id_sucursal SMALLINT NOT NULL,
  Nombre      VARCHAR(40) NOT NULL UNIQUE,
  Activo      BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_sucursal) REFERENCES sucursal (ID)
);

CREATE TABLE puesto_empleado (
  ID      SMALLSERIAL,
  Nombre  VARCHAR(40) NOT NULL,
  Activo  BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (ID)
);

CREATE TABLE empleado (
  ID        SMALLSERIAL,
  id_tienda SMALLINT NOT NULL,
  id_puesto SMALLINT NOT NULL,
  Nombre    VARCHAR(90) NOT NULL,
  Activo    BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_puesto) REFERENCES puesto_empleado (ID),
  FOREIGN KEY (id_tienda) REFERENCES tienda (ID)
);

CREATE TABLE tipo_articulo (
  ID      SMALLSERIAL,
  Nombre  VARCHAR(45) NOT NULL UNIQUE,
  Activo  BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (ID)
);

CREATE TABLE articulo (
  ID SERIAL,
  id_tipo SMALLINT NOT NULL,
  Nombre  VARCHAR(45) NOT NULL UNIQUE,
  Precio  INT NOT NULL,
  Activo  BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_tipo) REFERENCES tipo_articulo (ID)
);

CREATE TABLE venta (
  ID          SERIAL,
  id_cliente  INT NOT NULL,
  id_tienda   SMALLINT NOT NULL,
  id_empleado SMALLINT NOT NULL,
  Fecha       TIMESTAMP NOT NULL DEFAULT LOCALTIMESTAMP,
  Monto       INT NOT NULL,
  Activo      BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_cliente) REFERENCES cliente (ID),
  FOREIGN KEY (id_tienda) REFERENCES tienda (ID),
  FOREIGN KEY (id_empleado) REFERENCES empleado (ID)
);

CREATE TABLE venta_articulo (
  ID          SERIAL,
  id_venta    INT NOT NULL,
  id_articulo SMALLINT NOT NULL,
  Activo      BOOLEAN NOT NULL DEFAULT TRUE,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_venta) REFERENCES venta (ID),
  FOREIGN KEY (id_articulo) REFERENCES articulo (ID)
);

CREATE TABLE cambio_tabla (
  ID      SMALLSERIAL,
  Nombre  VARCHAR(15) NOT NULL UNIQUE,
  PRIMARY KEY (ID)
);

CREATE TABLE log_tabla (
  ID        BIGSERIAL,
  id_tabla  SMALLINT NOT NULL,
  fila_id   INT NOT NULL,
  replicado BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_tabla) REFERENCES cambio_tabla (ID)
);


--Views

CREATE VIEW clientes_v AS
  SELECT Nombre, Apellidos
  FROM cliente;


CREATE VIEW empleado_v AS
  SELECT e.Nombre,
    p.Nombre AS puesto,
    t.Nombre AS tienda
  FROM empleado e,
    puesto_empleado p,
    tienda t
  WHERE e.id_puesto = p.id AND e.id_tienda = t.id;

CREATE VIEW tienda_v AS
  SELECT t.Nombre,
    s.Nombre Ubicación
  FROM tienda t,
    sucursal s
  WHERE t.id_sucursal = s.id;

CREATE VIEW articulo_v AS
  SELECT a.Nombre,
    t.Nombre AS Tipo,
    a.Precio
  FROM articulo a,
    tipo_articulo t
  WHERE a.id_tipo = t.id;

CREATE VIEW dinero_tienda AS
  SELECT SUM(Monto) AS Ventas_tienda
  FROM venta;
