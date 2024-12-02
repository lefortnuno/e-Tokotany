let dbConn = require("../config/db");

let NumeroIM = function (numeroIM) {
  this.autoNumber = numeroIM.autoNumber;
};

NumeroIM.addNumeroIM_V = () => {
  dbConn.query("INSERT INTO numero_im_v (`autoNumber`) VALUES (NULL)");
};

NumeroIM.getLastNumeroIM_V = (result) => {
  dbConn.query(
    "SELECT autoNumber FROM numero_im_v ORDER BY autoNumber DESC LIMIT 1",
    (err, resLastIM) => {
      if (!err) {
        let id = 0;
        if (resLastIM.length === 0) {
          id = 1;
        } else {
          const tmpID = Object.values(resLastIM);
          id = Object.values(tmpID[0]);
          id = id[0] + 1;
        }
        return result(null, id);
      }
    }
  );
};

NumeroIM.addNumeroIM_AX = () => {
  dbConn.query("INSERT INTO numero_im_ax (`autoNumber`) VALUES (NULL)");
};

NumeroIM.getLastNumeroIM_AX = (result) => {
  dbConn.query(
    "SELECT autoNumber FROM numero_im_ax ORDER BY autoNumber DESC LIMIT 1",
    (err, resLastIM) => {
      if (!err) {
        let id = 0;
        if (resLastIM.length === 0) {
          id = 1;
          
        } else {
          const tmpID = Object.values(resLastIM);
          id = Object.values(tmpID[0]);
          id = id[0] + 1;
        }
        return result(null, id);
      }
    }
  );
};

NumeroIM.addNumeroIM_X = () => {
  dbConn.query("INSERT INTO numero_im_x (`autoNumber`) VALUES (NULL)");
};

NumeroIM.getLastNumeroIM_X = (result) => {
  dbConn.query(
    "SELECT autoNumber FROM numero_im_x ORDER BY autoNumber DESC LIMIT 1",
    (err, resLastIM) => {
      if (!err) {
        let id = 0;
        if (resLastIM.length === 0) {
          id = 1;
        } else {
          const tmpID = Object.values(resLastIM);
          id = Object.values(tmpID[0]);
          id = id[0] + 1;
        }
        return result(null, id);
      }
    }
  );
};

module.exports = NumeroIM;
