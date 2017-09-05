'use strict';

module.exports = function(Empleado) {

  Empleado.disableRemoteMethodByName('upsertWithWhere');
  Empleado.disableRemoteMethodByName('deleteById');
  Empleado.disableRemoteMethodByName('updateAll');
  Empleado.disableRemoteMethodByName('count');
  Empleado.disableRemoteMethodByName('exists');
  Empleado.disableRemoteMethodByName('findOne')
  Empleado.disableRemoteMethodByName('replaceOrCreate');
  Empleado.disableRemoteMethodByName('replace');
  Empleado.disableRemoteMethodByName('replaceById');
  Empleado.disableRemoteMethodByName('createChangeStream')

};
