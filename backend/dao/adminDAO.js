import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let cakes;

export default class AdminDAO {
  static async injectDB(conn) {
    if (cakes) {
      return;
    }
    try {
      cakes = await conn.db(process.env.CAKES_ND).collection("cakes");
    } catch (e) {
      console.error(`Unable to establish collection handles in adminDAO: ${e}`);
    }
  }

  static async addCake(cakeId, cakeName, flavor, color, allergyInfo, price) {
    try {
      const cakeDoc = {
        cake_name: cakeName,
        flavor: flavor,
        color: color,
        allergy_info: allergyInfo,
        price: price,
      };

      return await cakes.insertOne(cakeDoc);
    } catch (e) {
      console.error(`Unable to post cake: ${e}`);
      return { error: e };
    }
  }

  static async updateCake(cakeId, cakeName, flavor, color, allergyInfo, price) {
    try {
      const updateCake = await cakes.updateOne(
        { _id: ObjectId(cakeId) },
        {
          $set: {
            cake_name: cakeName,
            flavor: flavor,
            color: color,
            allergy_info: allergyInfo,
            price: price,
          },
        }
      );

      return updateCake;
    } catch (e) {
      console.error(`Unable to update cake: ${e}`);
      return { error: e };
    }
  }

  static async deleteCake(cakeId) {
    try {
      const deleteRes = await cakes.deleteOne({
        _id: ObjectId(cakeId),
      });

      return deleteRes;
    } catch (e) {
      console.error(`Unable to delete cake: ${e}`);
      return { error: e };
    }
  }
}
