## Consultas solicitadas

### Por administrador:

##### Cantidad de dinero recaudado en la tienda

Para cada fragmento de Venta por tienda  
( Venta_n : venta.id_tienda = tienda_n)  

SELECT SUM(monto) from Venta_n

##### Cantidad de pedidos según cliente para un rango de fechas específico. El sistema debe presentar un listado de los clientes y los pedidos realizados durante entre esas fechas inclusive.   


join de venta -> cliente por id_cliente  
SELECT por rango de fechas  
muestra un COUNT(id_cliente)

##### Monto promedio de compras por cliente para un período de fechas específico. El sistema debe mostrar un listado de los clientes y los montos promedios de sus compras para el período indicado.

De la vista de:  
join de venta -> cliente por id_cliente  
SELECT por rango de fechas  

AVG(monto) WHERE(id_cliente = id_cliente_n)

##### Monto de ventas para un producto específico para un mes en particular. El sistema debe permitir escoger el producto y el mes, presentando luego el monto de ventas que corresponda.

SELECT id_venta from id_articulo = elQueSeQuiera  
join venta -> venta_articulo  
SELECT rango de fechas
COUNT(id_articulo = #)

### Por Gerente:

##### Monto de ventas por tienda para un período específico.

SELECT SUM(monto) as Ventas_Totales from Venta WHERE RANGE(fecha)

##### Monto de ventas por tienda y por producto para un período específico.  

De la anterior se hace un join con venta_articulo y se pone un WHERE para cada id.  
Puede antes, hacerse un join de venta_articulo con artículo para tener el nombre de antemano.  

##### Listado de los tres mejores clientes (los que mayores compras hayan realizado) en un período específico.

COUNT(id_cliente)  
WHERE rango fechas  
TOP(3)
