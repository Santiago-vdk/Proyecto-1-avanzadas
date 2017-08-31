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
  return process.env.HEREDIA_URL || "postgres://yvqvdymfvliyiv:165a99f18f665f8e3c207c0e2c648b4e91ebb603f17f637855730f196039fac4@ec2-184-73-247-240.compute-1.amazonaws.com:5432/d7tbu4eh46j6i?ssl=true";

}

function getDatabaseSanjose(){
  return process.env.SANJOSE_URL || "postgres://mudfivqcbzdrjx:c48df6c2c7fa8b19c15eb6e25d3940e578bd667a26d8671cdec5599085090168@ec2-184-73-247-240.compute-1.amazonaws.com:5432/d83cv10h0h3n6t?ssl=true";
}

function getDatabaseAlajuela() {
  return process.env.ALAJUELA_URL || "postgres://cdupaxvqdzogjf:bf7c78dcc99b60541341c7c64a0ef4554db17ec49216086a870e80b494198085@ec2-184-73-247-240.compute-1.amazonaws.com:5432/ddtutf05cfihd2?ssl=true";
}

function getInitOptions(){
  const initOptions = {
    query: e => {
      console.log('QUERY:', e.query);
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
