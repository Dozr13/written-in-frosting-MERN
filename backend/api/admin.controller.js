import AdminDAO from "../dao/adminDAO.js";

export default class {
  static async apiPostCake(req, res, next) {
    try {
      const cakeId = req.body.cake_id;
      const cakeName = req.body.cake_name;
      const flavor = req.body.flavor;
      const color = req.body.color;
      const allergyInfo = req.body.allergy_info;
      const price = req.body.price;

      const cakeResponse = await AdminDAO.addCake(
        cakeId,
        cakeName,
        flavor,
        color,
        allergyInfo,
        price
      );
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiUpdateCake(req, res, next) {
    try {
      const cakeId = req.body._id;
      const cakeName = req.body.cake_name;
      const flavor = req.body.flavor;
      const color = req.body.color;
      const allergyInfo = req.body.allergy_info;
      const price = req.body.price;

      const cakeResponse = await AdminDAO.updateCake(
        cakeId,
        cakeName,
        flavor,
        color,
        allergyInfo,
        price
      );

      let { error } = cakeResponse;
      if (error) {
        res.status(400).json({ error });
      }

      if (cakeResponse.modifiedCount === 0) {
        throw new Error("Unable to update cake");
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteCake(req, res, next) {
    try {
      const cakeId = req.query.id;
      console.log(cakeId, "has been deleted");
      const cakeResponse = await AdminDAO.deleteCake(cakeId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}
