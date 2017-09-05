'use strict';

module.exports = function(Log) {

  Log.disableRemoteMethodByName('upsertWithWhere');
  Log.disableRemoteMethodByName('deleteById');
  Log.disableRemoteMethodByName('updateAll');
  Log.disableRemoteMethodByName('count');
  Log.disableRemoteMethodByName('exists');
  Log.disableRemoteMethodByName('findOne')
  Log.disableRemoteMethodByName('replaceOrCreate');
  Log.disableRemoteMethodByName('replace');
  Log.disableRemoteMethodByName('replaceById');
  Log.disableRemoteMethodByName('createChangeStream')

};
