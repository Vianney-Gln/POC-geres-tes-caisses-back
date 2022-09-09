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
    "SELECT fagots.uuid, fagots.id AS fagotId, articles.name AS fagotType,articles.id FROM fagots INNER JOIN articles ON fagots.id_article = articles.id";
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
      "SELECT articles.name,caissesvrac.uuid AS idCaisse,fagots.uuid AS idFagot,caissesvrac.id_fagot AS fagotId FROM caissesvrac INNER JOIN fagots ON caissesvrac.id_fagot = fagots.id INNER JOIN articles ON caissesvrac.id_article = articles.id WHERE caissesvrac.id_fagot = ? ORDER BY idCaisse ASC",
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

/**
 * Function creating a new empty fagot
 * @param {object} body
 * @returns {promise}
 */
const createOneFagot = (body) => {
  return db
    .query("INSERT INTO fagots (uuid,id_article) VALUES (?,?)", [
      body.uuid,
      body.id_article,
    ])
    .then((result) => result[0].insertId);
};

/**
 * Function deletting a fagot by his id
 * @param {number} id
 * @returns
 */
const deleteFagotById = (id) => {
  return db
    .query("DELETE FROM fagots WHERE id = ?", [id])
    .then((result) => result[0].affectedRows);
};

/**
 * Function updating fields id_fagots to Null
 * @param {number} idFagot
 * @returns
 */
const updateIdFagotToNull = (idFagot) => {
  return db
    .query("UPDATE caissesvrac SET id_fagot = NULL WHERE id_fagot = ?", [
      idFagot,
    ])
    .then((result) => result[0].affectedRows);
};

/**
 * Function getting all infos from one fagot by his id
 * @param {number} id
 * @returns
 */
const getInfosFagotById = (id) => {
  return db
    .query(
      "SELECT fagots.id,fagots.uuid,articles.name FROM fagots INNER JOIN articles ON fagots.id_article = articles.id WHERE fagots.id = ?",
      [id]
    )
    .then((result) => result[0][0]);
};

module.exports = {
  getBoxInFagots,
  getCountFagots,
  getFagots,
  getBoxesByFagotId,
  getNumberBoxesByFagot,
  createOneFagot,
  deleteFagotById,
  updateIdFagotToNull,
  getInfosFagotById,
};
