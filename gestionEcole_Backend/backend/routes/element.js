const router = require("express").Router();
let Element = require("../models/element.model");

router.route("/").get((req, res) => {
  Element.find()
    .then(Element => res.json(Element))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const element = req.body.element;
  const cof_element = Number(req.body.cof_element);
  const cof_ds = Number(req.body.cof_ds);
  const cof_tp = Number(req.body.cof_element);
  const cof_exam = Number(req.body.cof_element);

  const newElement = new Filiere({
    element,
    cof_element,
    cof_ds,
    cof_tp,
    cof_exam
  });

  newElement
    .save()
    .then(() => res.json("Element added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Element.findById(req.params.id)
    .then(Element => res.json(Element))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  Element.findByIdAndDelete(req.params.id)
    .then(() => res.json("Element deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Element.findById(req.params.id)
    .then(Element => {
      Element.element = req.body.element;
      Element.cof_element = req.body.cof_element;
      Element.cof_ds = req.body.cof_ds;
      Element.cof_tp = req.body.cof_tp;
      Element.cof_exam = req.body.cof_exam;

      Element.save()
        .then(() => res.json("Element updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
