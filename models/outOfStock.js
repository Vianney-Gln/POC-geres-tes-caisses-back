const db = require("../db-config").promise();

/**
 * Function looping db request for each ids given by the req.body
 * @param {array} ids
 * @returns {promise}
 */
const deleteRows = (ids) => {
  const promises = ids.map((id) => {
    return db
      .query("DELETE FROM caissesvrac WHERE id = ?", [id])
      .then((result) => result[0].affectedRows);
  });
  return Promise.all(promises);
};

module.exports = { deleteRows };
