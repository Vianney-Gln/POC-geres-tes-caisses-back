const connection = require("../db-config");
const db = connection.promise();

/**
 * Function getting stock "vrac"
 * @returns {promise}
 */
const getStockVrac = (query) => {
  let sqlReq =
    "SELECT caissesvrac.id, caissesvrac.uuid,articles.name FROM caissesvrac INNER JOIN articles ON caissesvrac.id_article = articles.id WHERE id_fagot is NULL";
  const arrayQuery = [];
  if (query) {
    sqlReq += " AND articles.id = ?";
    arrayQuery.push(query);
  }
  return db.query(sqlReq, arrayQuery).then((result) => result[0]);
};

/**
 * Function getting the count of "caisses vrac"
 * @returns {promise}
 */
const getCountVrac = (query) => {
  let sqlReq =
    "SELECT count(*) AS nbVrac FROM caissesvrac WHERE id_fagot is NULL";
  let arrayQuery = [];
  if (query) {
    sqlReq += " AND id_article = ?";
    arrayQuery.push(query);
  }
  return db.query(sqlReq, arrayQuery).then((result) => result[0][0]);
};

module.exports = { getStockVrac, getCountVrac };
