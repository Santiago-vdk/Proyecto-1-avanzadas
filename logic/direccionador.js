  var databaseConfig = require('../configs/database');


  function seleccionarNodo(destino) {
    if (destino.localeCompare("heredia") === 0) {
      return databaseConfig.getDatabaseHeredia();
    } else if (destino.localeCompare("sanjose") === 0) {
      return databaseConfig.getDatabaseSanjose();
    } else if (destino.localeCompare("alajuela") === 0) {
      return databaseConfig.getDatabaseAlajuela();
    } else {
      return databaseConfig.getDatabaseHeredia();
    }
  }


  module.exports = {
    seleccionarNodo: function(destino) {
      return seleccionarNodo(destino);
    }
  };
