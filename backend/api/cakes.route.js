import express from "express";
import CakesCtrl from "./cakes.controller.js";
// import AdminCtrl from "./admin.controller.js";

const router = express.Router();

router.route("/").get(CakesCtrl.apiGetCakes);
router.route("/id/:id").get(CakesCtrl.apiGetCakeByID);
router.route("/flavors").get(CakesCtrl.apiGetCakeFlavors);

router.route("/information");
// .post(AdminCtrl.apiPostCake)
// .put(AdminCtrl.apiUpdateCake)
// .delete(AdminCtrl.apiDeleteCake);

export default router;
