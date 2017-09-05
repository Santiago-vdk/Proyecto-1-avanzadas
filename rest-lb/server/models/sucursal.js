'use strict';

module.exports = function(Sucursal) {

  Sucursal.disableRemoteMethodByName('upsertWithWhere');
  Sucursal.disableRemoteMethodByName('deleteById');
  Sucursal.disableRemoteMethodByName('updateAll');
  Sucursal.disableRemoteMethodByName('count');
  Sucursal.disableRemoteMethodByName('exists');
  Sucursal.disableRemoteMethodByName('findOne')
  Sucursal.disableRemoteMethodByName('replaceOrCreate');
  Sucursal.disableRemoteMethodByName('replace');
  Sucursal.disableRemoteMethodByName('replaceById');
  Sucursal.disableRemoteMethodByName('createChangeStream')

};
