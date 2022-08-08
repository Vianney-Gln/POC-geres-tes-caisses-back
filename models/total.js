const db = require("../db-config").promise();

const getTotalBoxes = (query) => {
  let sqlReq =
    "SELECT caissesvrac.uuid,articles.name,caissesvrac.id_fagot AS idFagot from caissesvrac INNER JOIN articles ON caissesvrac.id_article = articles.id";
  const arrayQuery = [];
  if (query) {
    sqlReq += " WHERE articles.id = ?";
    arrayQuery.push(query);
  }
  return db.query(sqlReq, arrayQuery).then((result) => result[0]);
};

const getCountTotalBoxes = (query) => {
  let sqlReq = "SELECT count(*) AS numberTotal FROM caissesvrac";
  let arrayQuery = [];
  if (query) {
    sqlReq += " WHERE id_article = ?";
    arrayQuery.push(query);
  }
  return db.query(sqlReq, arrayQuery).then((result) => result[0][0]);
};

module.exports = { getTotalBoxes, getCountTotalBoxes };
