const express = require("express");
const router = express.Router();
const user_controllers = require("../controllers/user_controllers");

router.use(express.json());

//CHARACTER ROUTES

router.get("/get_user", user_controllers.get_character_single);
router.get("/get_users", user_controllers.get_character_multiple);
router.post("/create", user_controllers.create_user);
router.patch("/update", user_controllers.update_character);
router.delete("/delete", user_controllers.delete_character);

router.use("*", (req, res, next) => {
  res.status(404).json({ message: "The route does not exist" });
});

module.exports = router;
