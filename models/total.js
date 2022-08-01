const db = require("../db-config").promise();

const getTotalBoxes = (param) => {
  let sqlReq =
    "SELECT caissesvrac.uuid,articles.name,caissesvrac.id_fagot AS idFagot from caissesvrac INNER JOIN articles ON caissesvrac.id_article = articles.id";
  const arrayParams = [];
  if (param) {
    sqlReq += " WHERE articles.id = ?";
    arrayParams.push(param);
  }
  return db.query(sqlReq, arrayParams).then((result) => result[0]);
};

const getCountTotalBoxes = () => {
  return db
    .query("SELECT count(*) AS numberTotal FROM caissesvrac")
    .then((result) => result[0][0]);
};

module.exports = { getTotalBoxes, getCountTotalBoxes };
