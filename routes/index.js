const vracRouter = require("./vrac");

const setupRoute = (app) => {
  app.use("/api/gereTesCaisses/vrac", vracRouter);
};

module.exports = { setupRoute };
