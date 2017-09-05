'use strict';

module.exports = function(Venta) {

  Venta.disableRemoteMethodByName('upsertWithWhere');
  Venta.disableRemoteMethodByName('deleteById');
  Venta.disableRemoteMethodByName('updateAll');
  Venta.disableRemoteMethodByName('count');
  Venta.disableRemoteMethodByName('exists');
  Venta.disableRemoteMethodByName('findOne')
  Venta.disableRemoteMethodByName('replaceOrCreate');
  Venta.disableRemoteMethodByName('replace');
  Venta.disableRemoteMethodByName('replaceById');
  Venta.disableRemoteMethodByName('createChangeStream')

};
