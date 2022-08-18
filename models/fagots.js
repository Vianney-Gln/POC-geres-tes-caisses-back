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
const getCountFagots = (query) => {
  let sqlReq = "SELECT count(*) AS nbFagots from fagots";
  const arrayQuery = [];
  if (query) {
    sqlReq += " WHERE id_article = ?";
    arrayQuery.push(query);
  }
  return db.query(sqlReq, arrayQuery).then((result) => result[0][0]);
};

const getFagots = (query) => {
  let sqlReq =
    "SELECT fagots.uuid, fagots.id, articles.name AS fagotType,articles.id FROM fagots INNER JOIN articles ON fagots.id_article = articles.id";
  const arrayQuery = [];
  if (query) {
    arrayQuery.push(query);
    sqlReq += " WHERE articles.id = ?";
  }
  return db.query(sqlReq, arrayQuery).then((result) => result[0]);
};

/**
 * Function getting boxes in a fagot
 * @param {number} id
 * @returns {promise}
 */
const getBoxesByFagotId = (id) => {
  return db
    .query(
      "SELECT articles.name,caissesvrac.uuid AS idCaisse,fagots.uuid AS idFagot FROM caissesvrac INNER JOIN fagots ON caissesvrac.id_fagot = fagots.id INNER JOIN articles ON caissesvrac.id_article = articles.id WHERE caissesvrac.id_fagot = ? ORDER BY idCaisse ASC",
      [id]
    )
    .then((result) => result[0]);
};

/**
 * Function getting the number of boxes into one fagot
 * @param {number} idFagot
 * @returns {promise}
 */
const getNumberBoxesByFagot = (idFagot) => {
  return db
    .query("SELECT COUNT(*) AS nbBoxes FROM caissesvrac WHERE id_fagot = ?", [
      idFagot,
    ])
    .then((result) => result[0][0]);
};

module.exports = {
  getBoxInFagots,
  getCountFagots,
  getFagots,
  getBoxesByFagotId,
  getNumberBoxesByFagot,
};
