const db = require("../db-config").promise();

const getTotalBoxes = () => {
  return db
    .query(
      "SELECT * from caissesvrac INNER JOIN articles ON caissesvrac.id_article = articles.id INNER JOIN fagots ON caissesvrac.id_fagot = fagots.id"
    )
    .then((result) => result[0]);
};

module.exports = { getTotalBoxes };
