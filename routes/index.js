const vracRouter = require("./vrac");
const fagotsRouter = require("./fagots");

const setupRoute = (app) => {
  app.use("/api/gereTesCaisses/vrac", vracRouter);
  app.use("/api/gereTesCaisses/fagots", fagotsRouter);
};

module.exports = { setupRoute };
