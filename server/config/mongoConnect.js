const mongoose = require("mongoose");
console.log(process.env.DB_LINK);

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_LINK_SUS);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = mongoConnect;
