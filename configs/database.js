var pgp = require('pg-promise')(getInitOptions());
var databaseHeredia = pgp(getDatabaseHeredia());
var databaseSanjose = pgp(getDatabaseSanjose());
var databaseAlajuela = pgp(getDatabaseAlajuela());

function getDb(destino) {
  if (destino.localeCompare("heredia") === 0) {
    return databaseHeredia;
  } else if (destino.localeCompare("sanjose") === 0) {
    return databaseSanjose
  } else if (destino.localeCompare("alajuela") === 0) {
    return databaseAlajuela
  } else {
    return databaseHeredia
  }
}

function getDatabaseHeredia(){
  return "postgres://root:mypassword@heredia.czeeqkvoq4jr.us-east-1.rds.amazonaws.com:5432/heredia?ssl=true";

}

function getDatabaseSanjose(){
  return "postgres://root:mypassword@sanjose.czeeqkvoq4jr.us-east-1.rds.amazonaws.com:5432/sanjose?ssl=true";
}

function getDatabaseAlajuela() {
  return "postgres://root:mypassword@alajuela.czeeqkvoq4jr.us-east-1.rds.amazonaws.com:5432/alajuela?ssl=true";
}

function getInitOptions(){
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
    getDatabaseHeredia: function () {
        return getDatabaseHeredia();
    },
    getDatabaseSanjose: function () {
        return getDatabaseSanjose();
    },
    getDatabaseAlajuela: function () {
        return getDatabaseAlajuela();
    },
    getInitOptions: function () {
      return getInitOptions();
    },
    getDb: function (destino) {
      return getDb(destino);
    },
    getPgp: function () {
      return getPgp();
    }
};
