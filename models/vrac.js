const connection = require("../db-config");
const db = connection.promise();

/**
 * Function getting stock "vrac"
 * @returns {promise}
 */
const getStockVrac = () => {
  return db
    .query("SELECT * FROM caissesvrac WHERE id_fagot is NULL")
    .then((result) => result[0]);
};

/**
 * Function getting the count of "caisses vrac"
 * @returns {promise}
 */
const getCountVrac = () => {
  return db
    .query("SELECT count(*) AS nbVrac FROM caissesvrac WHERE id_fagot is NULL")
    .then((result) => result[0][0]);
};

module.exports = { getStockVrac, getCountVrac };
