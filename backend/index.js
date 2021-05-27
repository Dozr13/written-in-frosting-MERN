import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import CakesDAO from "./dao/cakesDAO.js";
import AdminDAO from "./dao/adminDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const { WF_CAKES_URI, PORT } = process.env;
const port = PORT || 4500;

MongoClient.connect(WF_CAKES_URI, {
  poolSize: 250,
  wtimeout: 2500,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await CakesDAO.injectDB(client);
    await AdminDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port: ${port}`);
    });
  });
