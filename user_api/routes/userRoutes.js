const Router = require("express");
const {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controller/user.Controller");

const router = Router();

router.route("/").get(getAlluser).post(createUser);

router
  .route(":userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);
// router.put("/:userId", updateUserById);
// router.delete("/:userId", deleteUserById);

module.exports = router;
