const db = require("../db-config").promise();

/**
 * Function looping requests db as reception
 * @param {obj} data
 * @returns {promise}
 */
const sendReception = (data) => {
  let sql = "INSERT INTO caissesvrac (uuid,id_article) VALUES (?,?)";
  const promises = data.map((row) => {
    return db
      .query(sql, [row.uuid, row.id_article])
      .then((result) => result[0].insertId);
  });
  return Promise.all(promises).then((result) => result);
};

module.exports = { sendReception };
