const db = require("../db-config").promise();

const getTotalBoxes = () => {
  return db.query("SELECT * from caissesvrac").then((result) => result[0]);
};

module.exports = { getTotalBoxes };
