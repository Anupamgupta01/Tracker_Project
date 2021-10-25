const ipfsAPI = require("ipfs-api");

const Public = require("../model/public");

const ipfs = ipfsAPI("ipfs.infura.io", "5001", { protocol: "https" });

// exports.login = async (req, res, next) => {
//   try {
//     let public = await Public.findOne({ mobileNo: req.body.mobileNo });
//     if (!public) {
//       await new Public({ mobileNo: req.body.mobileNo }).save();
//     }
//     res.status(200).send({ message: "user added" });
//   } catch (error) {
//     console.log(error);
//     res.status(200).send({ message: error.message });
//     return;
//   }
// };

exports.uploadContract = async (req, res, next) => {
  let file = req.files.file;
  console.log(file);
  ipfs.add(file.data, async (err, file) => {
    console.log(file);
    if (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
      return;
    }
    try {
      res
        .status(200)
        .send({ fileUrl: `https://ipfs.infura.io/ipfs/${file[0].path}` });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  });
};
