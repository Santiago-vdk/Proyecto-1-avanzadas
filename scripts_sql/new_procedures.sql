
	--select insert_articulo(9, 2::smallint,'Sombrero'::character varying);
	--select update_articulo(9, 2::smallint,'Cara'::character varying);
	--select disable_articulo(1);



--log

	CREATE OR REPLACE FUNCTION list_log_all()
	  RETURNS SETOF data_log AS $$
	SELECT id,id_tabla,fila_id,id_sucursal,replicado
	 			 from "log_tabla"
	 			 where "replicado"='false' AND ("id_tabla"=1 OR
	 				   "id_tabla"=4 OR "id_tabla"=6 OR
	 				   "id_tabla"=7 OR"id_tabla"=3 OR "id_tabla"=10); 
	$$ LANGUAGE sql;

	CREATE OR REPLACE FUNCTION list_log(_id smallint)
	  RETURNS SETOF data_log AS $$
	SELECT id,id_tabla,fila_id,id_sucursal,replicado
	 			 from "log_tabla"
	 			 where "replicado"='false' AND "id_sucursal"=_id AND
	 			 ("id_tabla"=2 OR "id_tabla"=5 OR "id_tabla" =8 OR
	 			 "id_tabla"=9);
	 $$ LANGUAGE sql;

	CREATE OR REPLACE FUNCTION set_replicado_log(_id bigint)
	  RETURNS void AS $$
	UPDATE log_tabla
		SET "replicado"='true'
		WHERE "id"=$1 ;
	$$ LANGUAGE sql; 

	-- tabla

	CREATE OR REPLACE FUNCTION get_cambio_tabla(_id smallint)
	  RETURNS data_cambio_tabla AS $$
	SELECT id,nombre
	 			 from "cambio_tabla" 
	 			 where "id"=$1; 
	$$ LANGUAGE sql;  

		CREATE OR REPLACE FUNCTION replica_cambio_tabla(_id integer,
			_nombre  text)
	  RETURNS bigint AS $$
	INSERT INTO cliente
		VALUES ($1, $2);
	SELECT setval('cliente_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	--Cliente

	CREATE OR REPLACE FUNCTION get_cliente(_id integer)
	  RETURNS data_cliente AS $$
	SELECT id,nombre,apellidos,activo
	 			 from "cliente" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  

	CREATE OR REPLACE FUNCTION replica_cliente(_id integer,
			_nombre  text,_apellidos text,_activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO cliente
		VALUES ($1, $2, $3, $4);
	SELECT setval('cliente_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	--Sucursal

	CREATE OR REPLACE FUNCTION get_sucursal(_id smallint)
	  RETURNS data_sucursal AS $$
	SELECT id,nombre,activo
	 			 from "sucursal" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  

	CREATE OR REPLACE FUNCTION replica_sucursal(_id integer,
			_nombre  text, _activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO sucursal
		VALUES ($1, $2, $3);
	SELECT setval('sucursal_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;
 
	--Tienda

	CREATE OR REPLACE FUNCTION get_tienda(_id smallint)
	  RETURNS data_tienda AS $$
	SELECT id,id_sucursal,nombre,activo
	 			 from "tienda" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  

	CREATE OR REPLACE FUNCTION replica_tienda(_id smallint,
		_id_sucursal smallint,_nombre  text,_activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO tienda
		VALUES ($1, $2, $3, $4);
	SELECT setval('tienda_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	--puesto

	CREATE OR REPLACE FUNCTION get_puesto_empleado(_id smallint)
	  RETURNS data_puesto_empleado AS $$
	SELECT id,nombre,activo
	 			 from "puesto_empleado" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  

	CREATE OR REPLACE FUNCTION replica_puesto_empleado(_id smallint,
		_nombre  text,_activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO puesto_empleado
		VALUES ($1, $2, $3);
	SELECT setval('puesto_empleado_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

-- Empleado

	CREATE OR REPLACE FUNCTION get_empleado(_id smallint)
	  RETURNS data_empleado AS $$
	SELECT id,id_tienda,id_puesto,nombre,activo
	 			 from "empleado" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  
	
	CREATE OR REPLACE FUNCTION replica_empleado(_id smallint,
		id_tienda smallint,id_puesto smallint, _nombre  text,
		_activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO empleado
		VALUES ($1, $2, $3, $4, $5);
	SELECT setval('empleado_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	-- tipo Articulo

	CREATE OR REPLACE FUNCTION get_tipo_articulo(_id smallint)
	  RETURNS data_tipo_articulo AS $$
	SELECT id,nombre,activo
	 			 from "tipo_articulo" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  


	CREATE OR REPLACE FUNCTION replica_tipo_articulo(_id integer,
		_nombre  text,_activado boolean)
	  RETURNS bigint AS $$
	INSERT INTO tipo_articulo
		VALUES ($1,$2, $3);
	SELECT setval('tipo_articulo_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	--Articulo

	CREATE OR REPLACE FUNCTION get_articulo(_id integer)
	  RETURNS data_articulo AS $$
	SELECT id,id_tipo,nombre,precio,activo
	 			 from "articulo" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  

	CREATE OR REPLACE FUNCTION replica_articulo(_id integer,
		_id_tipo smallint,_nombre  text,_precio integer,_activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO articulo
		VALUES ($1, $2, $3, $4, $5);
	SELECT setval('articulo_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	--Venta

	CREATE OR REPLACE FUNCTION get_venta(_id integer)
	  RETURNS data_venta AS $$
	SELECT id,id_cliente,id_tienda,id_empleado,
			fecha,monto,activo 
	 			 from "venta" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  

	CREATE OR REPLACE FUNCTION replica_venta(_id integer,
		_id_cliente integer,_id_tienda smallint, _id_empleado smallint,
		_fecha date,_monto integer,_activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO venta
		VALUES ($1, $2, $3,$4,$5,$6,$7);
	SELECT setval('venta_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	--Venta_articulo

	CREATE OR REPLACE FUNCTION get_venta_articulo(_id integer)
	  RETURNS data_venta_articulo AS $$
	SELECT id,id_venta,id_articulo,activo 
	 			 from "venta_articulo" 
	 			 where "id"=$1 and "activo"=true; 
	$$ LANGUAGE sql;  

	CREATE OR REPLACE FUNCTION replica_venta_articulo(_id integer,
		_id_venta integer,_id_articulo smallint, _activo boolean)
	  RETURNS bigint AS $$
	INSERT INTO venta_articulo
		VALUES ($1, $2, $3,$4);
	SELECT setval('venta_articulo_id_seq'::character varying, $1::bigint);
	$$ LANGUAGE sql;

	CREATE OR REPLACE FUNCTION get_sequences()
          RETURNS store_pk AS $$
	select max(c.id) as cliente_pk,
		   max(t.id) as tienda_pk, 
		   max(e.id) as empleado_pk,
		   max(a.id) as articulo_pk,
		   max(v.id) as venta_pk,
		   max(va.id) as venta_articulo_pk,
		   max(s.id) as sucursal_pk,
		   max(ta.id) as tipo_artiuclo_pk,
		   max(pe.id) as puesto_empleado_pk
		   from cliente c,
		   		tienda t,
		   		empleado e,
		   		articulo a,
		   		venta v,
		   		venta_articulo va,
		   		sucursal s,
		   		tipo_articulo ta,
		   		puesto_empleado pe;
	$$ LANGUAGE sql;

	CREATE OR REPLACE FUNCTION set_sequences(cpk integer,tpk smallint, epk smallint, apk integer,
                                             vpk integer, vapk integer, spk smallint, tapk smallint,
                                             pepk smallint)
      RETURNS SETOF bigint AS $$
      
      SELECT setval('cliente_id_seq',$1);
      SELECT setval('tienda_id_seq',$2);
      SELECT setval('empleado_id_seq',$3);
      SELECT setval('articulo_id_seq',$4);
      SELECT setval('venta_id_seq',$5);
      SELECT setval('venta_articulo_id_seq',$6);
      SELECT setval('sucursal_id_seq',$7);
      SELECT setval('tipo_articulo_id_seq',$8);
      SELECT setval('puesto_empleado_id_seq',$9);

	$$ LANGUAGE sql;
    
    
    
