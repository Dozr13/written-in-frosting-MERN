import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let cakes;

export default class CakesDAO {
  static async injectDB(conn) {
    if (cakes) {
      return;
    }
    try {
      cakes = await conn.db(process.env.CAKES_ND).collection("cakes");
    } catch (e) {
      console.error(`Unable to establish collection handles in CakesDAO: ${e}`);
    }
  }

  static async getCakes({ filters = null, page = 0, cakesPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = {
          $text: {
            $search: filters["name"],
          },
        };
      } else if ("color" in filters) {
        query = {
          color: {
            $eq: filters["color"],
          },
        };
      } else if ("price" in filters) {
        query = {
          "cake.price": {
            $eq: filters["price"],
          },
        };
      }
    }

    let cursor;

    try {
      cursor = await cakes.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { cakesList: [], totalNumCakes: 0 };
    }

    const displayCursor = cursor.limit(cakesPerPage).skip(cakesPerPage * page);

    try {
      const cakesList = await displayCursor.toArray();
      const totalNumCakes = await cakes.countDocuments(query);

      return { cakesList, totalNumCakes };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { cakesList: [], totalNumCakes: 0 };
    }
  }

  static async getCakeByID(id) {
    try {
      const pipeline = [
        {
          $match: {
            _id: new ObjectId(id),
          },
        },
        {
          $lookup: {
            from: "cakes",
            let: {
              id: "$_id",
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$cake_id", "$$id"],
                  },
                },
              },
              // {
              //   $sort: {
              //     price: -1,
              //   },
              // },
            ],
            as: "cakes",
          },
        },
        // {
        //   $addFields: {
        //     price: "$price",
        //   },
        // },
      ];
      return await cakes.aggregate(pipeline).next();
    } catch (e) {
      console.error(`Something went wrong in getCakeByID: ${e}`);
      throw e;
    }
  }

  static async getFlavors() {
    let flavor = [];
    try {
      flavor = await flavor.distinct("flavor");
      return flavor;
    } catch (e) {
      console.error(`Unable to get flavors: ${e}`);
      return flavor;
    }
  }
}
