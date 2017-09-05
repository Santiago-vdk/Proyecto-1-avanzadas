'use strict';

module.exports = function(C_tabla) {

  C_tabla.disableRemoteMethodByName('upsertWithWhere');
  C_tabla.disableRemoteMethodByName('deleteById');
  C_tabla.disableRemoteMethodByName('updateAll');
  C_tabla.disableRemoteMethodByName('count');
  C_tabla.disableRemoteMethodByName('exists');
  C_tabla.disableRemoteMethodByName('findOne')
  C_tabla.disableRemoteMethodByName('replaceOrCreate');
  C_tabla.disableRemoteMethodByName('replace');
  C_tabla.disableRemoteMethodByName('replaceById');
  C_tabla.disableRemoteMethodByName('createChangeStream')

};
