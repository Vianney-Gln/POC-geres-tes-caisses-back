const db = require("../db-config").promise();

const getTotalBoxes = () => {
  return db
    .query(
      "SELECT caissesvrac.uuid,articles.name,caissesvrac.id_fagot AS idFagot from caissesvrac INNER JOIN articles ON caissesvrac.id_article = articles.id"
    )
    .then((result) => result[0]);
};

const getCountTotalBoxes = () => {
  return db
    .query("SELECT count(*) AS numberTotal FROM caissesvrac")
    .then((result) => result[0][0]);
};

module.exports = { getTotalBoxes, getCountTotalBoxes };
