const db = require("../db-config").promise();

/**
 * Function getting articles
 * @returns {promise}
 */
const getArticles = () => {
  return db.query("SELECT * FROM articles").then((result) => result[0]);
};

module.exports = { getArticles };
