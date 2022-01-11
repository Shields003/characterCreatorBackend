const express = require("express");
const router = express.Router();
const character_controllers = require("../controllers/character_controllers");

router.use(express.json());

//CHARACTER ROUTES

router.get("/get_single", character_controllers.get_character_single);
router.get("/get_multiple", character_controllers.get_character_multiple);
router.post("/create", character_controllers.create_character);
router.patch("/update", character_controllers.update_character);
router.delete("/delete", character_controllers.delete_character);

router.use("*", (req, res, next) => {
  res.status(404).json({ message: "The route does not exist" });
});

module.exports = router;
