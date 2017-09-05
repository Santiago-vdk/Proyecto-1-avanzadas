'use strict';

module.exports = function(Articulo) {

  Articulo.disableRemoteMethodByName('upsertWithWhere');
  Articulo.disableRemoteMethodByName('deleteById');
  Articulo.disableRemoteMethodByName('updateAll');
  Articulo.disableRemoteMethodByName('count');
  Articulo.disableRemoteMethodByName('exists');
  Articulo.disableRemoteMethodByName('findOne')
  Articulo.disableRemoteMethodByName('replaceOrCreate');
  Articulo.disableRemoteMethodByName('replace');
  Articulo.disableRemoteMethodByName('replaceById');
  Articulo.disableRemoteMethodByName('createChangeStream')

};
