const mongoose = require("mongoose");
const { MONGODB } = require("./CONSTANTS");
const { User } = require("./mongoose_schemas/User");

const test_user_creator = async () => {
  try {
    const new_user = new User({
      username: "tim",
      email: "tim@gmail.com",
      password: "aklsdf;lkajsdf",
    });
    console.log(new_user);

    await new_user.save();
  } catch (error) {
    console.log(error);
  }
};

mongoose.connect(MONGODB, {
  useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
  test_user_creator();
});
