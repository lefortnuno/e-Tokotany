let dbConn = require("../config/db");
const Dossier = require("./dossier.model");

let NumeroAffaire = function (numeroAffaire) {
  this.autoNumber = numeroAffaire.autoNumber;
};

NumeroAffaire.addNumeroAffaire_V = () => {
  dbConn.query("INSERT INTO numero_affaire_v  (`autoNumber`) VALUES (NULL)");
};

NumeroAffaire.getLastNumeroAffaire_V = (result) => {
  dbConn.query("SELECT autoNumber FROM numero_affaire_v ORDER BY autoNumber DESC LIMIT 1", (err, resLastNumAffaire) => {
    if (!err) {
      let id = 0;
      if (resLastNumAffaire.length === 0) {
        id = 1;
      } else {
        const tmpID = Object.values(resLastNumAffaire);
        id = Object.values(tmpID[0]);
        id = id[0] + 1;
      }
      NumeroAffaire.addNumeroAffaire_V()
      return result(null, id);
    }
  });
};

NumeroAffaire.addNumeroAffaire_AX = () => {
  dbConn.query("INSERT INTO numero_affaire_ax  (`autoNumber`) VALUES (NULL)");
};

NumeroAffaire.getLastNumeroAffaire_AX = (result) => {
  dbConn.query("SELECT autoNumber FROM numero_affaire_ax ORDER BY autoNumber DESC LIMIT 1", (err, resLastNumAffaire) => {
    if (!err) {
      let id = 0;
      if (resLastNumAffaire.length === 0) {
        id = 1;
      } else {
        const tmpID = Object.values(resLastNumAffaire);
        id = Object.values(tmpID[0]);
        id = id[0] + 1;
      }
      NumeroAffaire.addNumeroAffaire_AX()
      return result(null, id);
    }
  });
};

NumeroAffaire.addNumeroAffaire_X = () => {
  dbConn.query("INSERT INTO numero_affaire_x  (`autoNumber`) VALUES (NULL)");
};

NumeroAffaire.getLastNumeroAffaire_X = (result) => {
  dbConn.query("SELECT autoNumber FROM numero_affaire_x ORDER BY autoNumber DESC LIMIT 1", (err, resLastNumAffaire) => {
    if (!err) {
      let id = 0;
      if (resLastNumAffaire.length === 0) {
        id = 1;
      } else {
        const tmpID = Object.values(resLastNumAffaire);
        id = Object.values(tmpID[0]);
        id = id[0] + 1;
      }
      NumeroAffaire.addNumeroAffaire_X()
      return result(null, id);
    }
  });
};


module.exports = NumeroAffaire;
