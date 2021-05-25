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

  static async addCake(name, flavor, color, allergyInfo, price) {
    try {
      const cake = {
        name: name,
        flavor: flavor,
        color: color,
        text: allergyInfo,
        price: price,
      };

      return await cakes.insertOne(cake);
    } catch (e) {
      console.error(`Unable to post cake: ${e}`);
      return { error: e };
    }
  }

  static async updateCake(adminId, cakeId, name, flavor, color, text, price) {
    try {
      const updateResponse = await reviews.updateOne(
        { admin_id: adminId, _id: ObjectId(cakeId) },
        {
          $set: {
            name: name,
            flavor: flavor,
            color: color,
            text: text,
            price: price,
          },
        }
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update cake: ${e}`);
      return { error: e };
    }
  }

  static async deleteCake(adminId, cakeId) {
    try {
      const deleteResponse = await cakes.deleteOne({
        _id: ObjectId(cakeId),
        admin_id: adminId,
      });

      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete cake: ${e}`);
      return { error: e };
    }
  }
}
