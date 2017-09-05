'use strict';

module.exports = function(Tipo_articulo) {

  Tipo_articulo.disableRemoteMethodByName('upsertWithWhere');
  Tipo_articulo.disableRemoteMethodByName('deleteById');
  Tipo_articulo.disableRemoteMethodByName('updateAll');
  Tipo_articulo.disableRemoteMethodByName('count');
  Tipo_articulo.disableRemoteMethodByName('exists');
  Tipo_articulo.disableRemoteMethodByName('findOne')
  Tipo_articulo.disableRemoteMethodByName('replaceOrCreate');
  Tipo_articulo.disableRemoteMethodByName('replace');
  Tipo_articulo.disableRemoteMethodByName('replaceById');
  Tipo_articulo.disableRemoteMethodByName('createChangeStream')

};
