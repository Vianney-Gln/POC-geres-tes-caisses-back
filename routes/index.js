const vracRouter = require("./vrac");
const fagotsRouter = require("./fagots");
const totalRouter = require("./total");
const articlesRouter = require("./articles");
const receptionRouter = require("./reception");
const outOfStockRouter = require("./outOfStock");

const setupRoute = (app) => {
  app.use("/api/gereTesCaisses/vrac", vracRouter);
  app.use("/api/gereTesCaisses/fagots", fagotsRouter);
  app.use("/api/gereTesCaisses/total", totalRouter);
  app.use("/api/gereTesCaisses/articles", articlesRouter);
  app.use("/api/gereTesCaisses/receptions", receptionRouter);
  app.use("/api/gereTesCaisses/outOfStock", outOfStockRouter);
};

module.exports = { setupRoute };
