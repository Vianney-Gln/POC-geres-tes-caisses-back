const fagotsRouter = require("express").Router();
const {
  getBoxInFagots,
  getCountFagots,
  getFagots,
  getBoxesByFagotId,
  getNumberBoxesByFagot,
  createOneFagot,
  deleteFagotById,
  getInfosFagotById,
  updateIdFagot,
  updateIdFagotToNullForOneBoxe,
} = require("../models/fagots");
const { checkBoxesInFagot, checkBoxesSizes } = require("../middlewares/fagots");
const { checkIfBundleExist } = require("../middlewares/reception");
const { runValidateFormCreateBundle } = require("../middlewares/fagots");

// Route getting only boxes in fagots
fagotsRouter.get("/box-in-fagots", (req, res) => {
  getBoxInFagots()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error retrieving fagots");
    });
});

// Route getting the number of fagots;
fagotsRouter.get("/count", (req, res) => {
  getCountFagots(req.query.article)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("error retrieving number of fagots");
    });
});

// Route getting fagots
fagotsRouter.get("/", (req, res) => {
  getFagots(req.query.article)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error request find fagots");
    });
});

// Route getting boxes in a fagot
fagotsRouter.get("/:id", (req, res) => {
  getBoxesByFagotId(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send("error retrieving boxes by fagots");
    });
});

// Route getting all infos from one fagot by his id
fagotsRouter.get("/info/:id", (req, res) => {
  getInfosFagotById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send("not found");
    });
});

// Route getting the number of boxes from one fagot
fagotsRouter.get("/number-box-in-fagots/:id", (req, res) => {
  getNumberBoxesByFagot(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

// Route creating a new empty fagot
fagotsRouter.post(
  "/",
  checkIfBundleExist,
  runValidateFormCreateBundle,
  (req, res) => {
    createOneFagot(req.body)
      .then((result) => {
        res.status(203).send(`fagot with id ${result} created`);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("error creating fagot");
      });
  }
);

// Route deleting one fagot by id, if this fagot contain boxes, update the id_fagot value as NULL
fagotsRouter.delete("/:id", checkBoxesInFagot, (req, res) => {
  deleteFagotById(req.params.id)
    .then((result) => {
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).send("this fagot does not exist");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("error deleting this fagot");
    });
});

// Route adding boxes to an existing fagot by update their id_fagot field
fagotsRouter.put("/boxes-to-bundle/:id", checkBoxesSizes, (req, res) => {
  updateIdFagot(req.verifiedBoxes, req.params.id)
    .then(() => {
      res.status(201).send("update done correctly");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("error updating boxes");
    });
});

// Route update the id_fagot field for a boxe to NULL by its id
fagotsRouter.put("/remove-to-bundle/:id", (req, res) => {
  updateIdFagotToNullForOneBoxe(req.params.id)
    .then((result) => {
      res.status(201).send(`${result} rows updated`);
    })
    .catch(() => {
      res.status(400).send("error during update");
    });
});

module.exports = fagotsRouter;
