'use strict';

module.exports = function(Tienda) {

  Tienda.disableRemoteMethodByName('upsertWithWhere');
  Tienda.disableRemoteMethodByName('deleteById');
  Tienda.disableRemoteMethodByName('updateAll');
  Tienda.disableRemoteMethodByName('count');
  Tienda.disableRemoteMethodByName('exists');
  Tienda.disableRemoteMethodByName('findOne')
  Tienda.disableRemoteMethodByName('replaceOrCreate');
  Tienda.disableRemoteMethodByName('replace');
  Tienda.disableRemoteMethodByName('replaceById');
  Tienda.disableRemoteMethodByName('createChangeStream')

};
