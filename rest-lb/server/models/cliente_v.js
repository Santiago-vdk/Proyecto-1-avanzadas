'use strict';

module.exports = function(Cliente_v) {

  Cliente_v.disableRemoteMethodByName('upsert');
  Cliente_v.disableRemoteMethodByName('upsertWithWhere');
  Cliente_v.disableRemoteMethodByName('deleteById');
  Cliente_v.disableRemoteMethodByName('updateAll');
  Cliente_v.disableRemoteMethodByName('prototype.patchAttributes');
  Cliente_v.disableRemoteMethodByName('count');
  Cliente_v.disableRemoteMethodByName('exists');
  Cliente_v.disableRemoteMethodByName('findOne')
  Cliente_v.disableRemoteMethodByName('replaceOrCreate');
  Cliente_v.disableRemoteMethodByName('replace');
  Cliente_v.disableRemoteMethodByName('replaceById');
  Cliente_v.disableRemoteMethodByName('createChangeStream')

};
