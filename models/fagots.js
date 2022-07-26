const db = require("../db-config").promise();

/**
 * Function getting only boxes in fagots
 * @returns {promise}
 */
const getBoxInFagots = () => {
  return db
    .query(
      "SELECT caissesvrac.uuid as idCaisse,caissesvrac.length as lengthCaisse,caissesvrac.name, fagots.uuid as idFagot from caissesvrac inner join fagots on caissesvrac.id_fagot = fagots.id;"
    )
    .then((result) => result[0]);
};

const getCountFagots = () => {
  return db
    .query("SELECT count(*) AS nbFagots from fagots")
    .then((result) => result[0][0]);
};

module.exports = { getBoxInFagots, getCountFagots };
