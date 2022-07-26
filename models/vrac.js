const connection = require("../db-config");
const db = connection.promise();

const getStockVrac = () => {
  return db.query("SELECT * FROM caissesvrac").then((result) => result[0]);
};

module.exports = { getStockVrac };
