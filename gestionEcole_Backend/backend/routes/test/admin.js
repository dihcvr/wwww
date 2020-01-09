const router = require("express").Router();
let Admin = require("../models/Users.model");

router.route("/").get((req, res) => {
  Admin.find()
    .then(admin => res.json(admin))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const cin = req.body.cin;
  const password = req.body.password;
  const post = req.body.post;

  const newAdmin = new Admin({
    username,
    nom,
    prenom,
    cin,
    password,
    post
  });

  newAdmin
    .save()
    .then(() => res.json("Admin added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Admin.findById(req.params.id)
    .then(admin => res.json(admin))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Admin.findByIdAndDelete(req.params.id)
    .then(() => res.json("Admin deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Admin.findById(req.params.id)
    .then(admin => {
      admin.username = req.body.username;
      admin.nom = req.body.nom;
      admin.prenom = req.body.prenom;
      admin.cin = req.body.cin;
      admin.password = req.body.password;
      admin.post = req.body.post;

      exercise
        .save()
        .then(() => res.json("Admin updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
