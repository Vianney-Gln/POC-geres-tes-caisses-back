const db = require("../db-config").promise();

/**
 * Function getting only boxes in fagots
 * @returns {promise}
 */
const getBoxInFagots = () => {
  return db
    .query(
      "SELECT articles.name,caissesvrac.uuid AS idCaisse,fagots.uuid AS idFagot FROM caissesvrac INNER JOIN fagots ON caissesvrac.id_fagot = fagots.id INNER JOIN articles ON caissesvrac.id_article = articles.id ORDER BY idCaisse ASC"
    )
    .then((result) => result[0]);
};

/**
 * Function getting the number of fagots
 * @returns {promise}
 */
const getCountFagots = () => {
  return db
    .query("SELECT count(*) AS nbFagots from fagots")
    .then((result) => result[0][0]);
};

const getFagots = () => {
  return db
    .query(
      "SELECT fagots.uuid, fagots.id, articles.name AS fagotType FROM fagots INNER JOIN articles ON fagots.id_article = articles.id ORDER BY uuid ASC"
    )
    .then((result) => result[0]);
};

module.exports = { getBoxInFagots, getCountFagots, getFagots };
