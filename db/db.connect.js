const mongoose = require('mongoose');

const PASSWORD = process.env.PASSWORD;

const initDbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://sk02k1:${PASSWORD}@focus-store.kdlobhk.mongodb.net/focus-store`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log(`DB successfully connected`);
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
  }
};

module.exports = initDbConnection;
