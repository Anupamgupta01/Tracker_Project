const Ngo = require("../model/ngo");
const nodemailer = require("nodemailer");
//const { reset } = require("nodemon");
const jwt = require("jsonwebtoken");
const factory = require("../model/factory");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

exports.register = async (req, res, next) => {
  try {
    let ngoCount = await (await Ngo.find()).length;
    console.log(ngoCount);
    const email = req.body.email;
    const password = Math.random().toString(36).slice(-8);
    const name = req.body.name;
    const ng = new Ngo({
      email: email,
      password: password,
      name: name,
      ngoId: ngoCount + 1,
    });
    await ng.save();
    var mailOptions = {
      from: process.env.email,
      to: email,
      subject: "Credentials for Your Account!",
      text: `Email: ${email} and Password: ${password} (Keep it safe and don't share this with anyone!)`,
    };
    transporter
      .sendMail(mailOptions)
      .then(async (result) => {
        console.log(result);
        res.status(200).send({ message: "NGO register successfully!" });
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

exports.loginNgo = async (req, res, next) => {
  try {
    let email = req.body.email.toLowerCase();
    let password = req.body.password.toLowerCase();
    let ngo = await Ngo.findOne({
      $and: [{ email: email }, { password: password }],
    });
    if (!ngo) {
      res.status(400).send({ message: "ngo not found!" });
      return;
    }
    const token = jwt.sign({ ngoId: ngo.id }, "secret", {
      expiresIn: "11h",
    });

    res.status(200).send({ token: token, ngoId: ngo });
    return;
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: error.message });
    return;
  }
};

exports.done = async (req, res, next) => {
  try {
    await factory.findOneAndUpdate(
      { factoryId: req.body.factoryId },
      { isAssigned: false }
    );
    await ngo.findOneAndUpdate(
      { ngoId: req.body.ngoId },
      { isAssigned: false }
    );
    res.status(200).send({ token: token, ngoId: ngo.id });
    return;
  } catch {
    console.log(error);
    res.status(200).send({ message: error.message });
    return;
  }
};
