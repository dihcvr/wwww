const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ElementSchema = new Schema(
  {
    element: { type: String, required: true },
    cof_element: { type: Number, required: true },
    cof_ds: { type: Number, required: true },
    cof_tp: { type: Number, required: true },
    cof_exam: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Element = mongoose.model("Element", ElementSchema);

module.exports = Element;
