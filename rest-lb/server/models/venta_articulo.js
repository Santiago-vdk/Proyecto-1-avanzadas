'use strict';

module.exports = function(Venta_articulo) {

  Venta_articulo.disableRemoteMethodByName('upsertWithWhere');
  Venta_articulo.disableRemoteMethodByName('deleteById');
  Venta_articulo.disableRemoteMethodByName('updateAll');
  Venta_articulo.disableRemoteMethodByName('count');
  Venta_articulo.disableRemoteMethodByName('exists');
  Venta_articulo.disableRemoteMethodByName('findOne')
  Venta_articulo.disableRemoteMethodByName('replaceOrCreate');
  Venta_articulo.disableRemoteMethodByName('replace');
  Venta_articulo.disableRemoteMethodByName('replaceById');
  Venta_articulo.disableRemoteMethodByName('createChangeStream')

};
