var pgp = require('pg-promise')(getInitOptions());
var databaseHeredia = pgp(getDatabaseHeredia());
var databaseSanjose = pgp(getDatabaseSanjose());
var databaseAlajuela = pgp(getDatabaseAlajuela());

function getDb(destino) {
  destino = parseInt(destino);
  if (destino === 1) {
    console.log("Consultando Heredia");
    return databaseHeredia;
  } else if (destino === 2) {
    console.log("Consultado San Jose");
    return databaseSanjose
  } else if (destino === 3) {
    console.log("Consultando Alajuela");
    return databaseAlajuela
  } else {
    console.log("Consultando Heredia, DEFAULT");
    return databaseHeredia
  }
}

function getDatabaseHeredia() {

  return "postgres://root:mypassword@heredia.czeeqkvoq4jr.us-east-1.rds.amazonaws.com:5432/heredia?ssl=true";

}

function getDatabaseSanjose() {

  return "postgres://root:mypassword@sanjose.czeeqkvoq4jr.us-east-1.rds.amazonaws.com:5432/sanjose?ssl=true";
}

function getDatabaseAlajuela() {

  return "postgres://root:mypassword@alajuela.czeeqkvoq4jr.us-east-1.rds.amazonaws.com:5432/alajuela?ssl=true";
}

function getInitOptions() {
  const initOptions = {
    query: e => {
      console.log("-----------------");
      console.log('QUERY:', e.query);
      console.log("-----------------");
    }
  };
  return initOptions;
}

function getPgp() {
  return pgp;
}

module.exports = {
  getDatabaseHeredia: function() {
    return getDatabaseHeredia();
  },
  getDatabaseSanjose: function() {
    return getDatabaseSanjose();
  },
  getDatabaseAlajuela: function() {
    return getDatabaseAlajuela();
  },
  getInitOptions: function() {
    return getInitOptions();
  },
  getDb: function(destino) {
    return getDb(destino);
  },
  getPgp: function() {
    return getPgp();
  }
};
