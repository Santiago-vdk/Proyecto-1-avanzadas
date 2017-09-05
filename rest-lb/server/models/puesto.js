'use strict';

module.exports = function(Puesto) {

  Puesto.disableRemoteMethodByName('upsertWithWhere');
  Puesto.disableRemoteMethodByName('deleteById');
  Puesto.disableRemoteMethodByName('updateAll');
  Puesto.disableRemoteMethodByName('count');
  Puesto.disableRemoteMethodByName('exists');
  Puesto.disableRemoteMethodByName('findOne')
  Puesto.disableRemoteMethodByName('replaceOrCreate');
  Puesto.disableRemoteMethodByName('replace');
  Puesto.disableRemoteMethodByName('replaceById');
  Puesto.disableRemoteMethodByName('createChangeStream')

};
