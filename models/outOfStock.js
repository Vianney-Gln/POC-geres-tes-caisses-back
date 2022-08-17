const db = require("../db-config").promise();

const deleteRows = (ids) => {
  const promises = ids.map((id) => {
    return db
      .query("DELETE FROM caissesvrac WHERE id = ?", [id])
      .then((result) => result[0].affectedRows);
  });
  return Promise.all(promises);
};

module.exports = { deleteRows };
