const db = require("../db-config").promise();

const getTotalBoxes = () => {
  return db
    .query(
      "SELECT caissesvrac.uuid,articles.name,caissesvrac.id,fagots.uuid AS idFagot from caissesvrac INNER JOIN articles ON caissesvrac.id_article = articles.id INNER JOIN fagots ON caissesvrac.id_fagot = fagots.id ORDER BY caissesvrac.uuid ASC"
    )
    .then((result) => result[0]);
};

const getCountTotalBoxes = () => {
  return db
    .query("SELECT count(*) FROM caissesvrac")
    .then((result) => result[0][0]);
};

module.exports = { getTotalBoxes, getCountTotalBoxes };
