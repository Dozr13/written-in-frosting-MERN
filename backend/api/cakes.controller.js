import CakesDAO from "../dao/cakesDAO.js";

export default class CakesController {
  static async apiGetCakes(req, res, next) {
    const cakesPerPage = req.query.cakesPerPage
      ? parseInt(req.query.cakesPerPage, 10)
      : 20;
    const page = req.query.page ? parseInt(req.query.page, 10) : 0;

    let filters = {};
    if (req.query.flavor) {
      filters.flavor = req.query.flavor;
    } else if (req.query.color) {
      filters.color = req.query.color;
    } else if (req.query.allergyInfo) {
      filters.allergyInfo = req.query.allergyInfo;
    } else if (req.query.price) {
      filters.price = req.query.price;
    } else if (req.query.name) {
      filters.name = req.query.name;
    }

    const { cakesList, totalNumCakes } = await CakesDAO.getCakes({
      filters,
      page,
      cakesPerPage,
    });

    let response = {
      cakes: cakesList,
      page: page,
      filters: filters,
      entries_per_page: cakesPerPage,
      total_results: totalNumCakes,
    };
    res.json(response);
  }

  static async apiGetCakeByID(req, res, next) {
    try {
      let id = req.params.id || {};
      let cake = await CakesDAO.getCakeByID(id);
      if (!cake) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(cake);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiGetCakeFlavors(req, res, next) {
    try {
      let flavors = await CakesDAO.getFlavors();
      res.json(flavors);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
