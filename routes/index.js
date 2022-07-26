const vracRouter = require("./vrac");
const fagotsRouter = require("./fagots");
const totalRouter = require("./total");

const setupRoute = (app) => {
  app.use("/api/gereTesCaisses/vrac", vracRouter);
  app.use("/api/gereTesCaisses/fagots", fagotsRouter);
  app.use("/api/gereTesCaisses/total", totalRouter);
};

module.exports = { setupRoute };
