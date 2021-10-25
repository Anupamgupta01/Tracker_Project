const factory = require("../model/factory");
const nodemailer = require("nodemailer");
//const { reset } = require("nodemon");
const jwt = require("jsonwebtoken");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.register = async (req, res, next) => {
  try {
    let factoryCount = await (await factory.find()).length;
    console.log(factoryCount);
    const email = req.body.email;
    const password = Math.random().toString(36).slice(-8);
    const name = req.body.name;
    const fact = new factory({
      email: email,
      password: password,
      name: name,
      factoryId: factoryCount + 1,
    });
    await fact.save();
    var mailOptions = {
      from: process.env.email,
      to: email,
      subject: "Notice!",
      text: `You have been added to our Program "WHISTLER"!`,
    };
    transporter
      .sendMail(mailOptions)
      .then(async (result) => {
        console.log(result);
        res.status(200).send({ message: "fact register successfully!" });
      })
      .catch((err) => {
        console.log(err);
        res.status(200).send({ message: error.message });
        return;
      });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
  }
};

exports.loginFactory = async (req, res, next) => {
  try {
    let email = req.body.email.toLowerCase();
    let password = req.body.password.toLowerCase();
    let fact = await factory.findOne({
      $and: [{ email: email }, { password: password }],
    });
    if (!fact) {
      res.status(400).send({ message: "fact not found!" });
      return;
    }
    const token = jwt.sign({ factId: fact.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({ token: token, factId: fact });
    return;
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};

exports.getFactory = async (req, res, next) => {
  try {
    let factorys = await factory.find().select("-password");
    res.status(200).send({ message: factorys });
  } catch {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};

exports.getFactoryCount = async (req, res, next) => {
  try {
    let factoryCount = await (await factory.find()).length;
    res.status(200).send({ count: factoryCount });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};
