const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

productsSchema.index({ code: 1 }, { unique: true });

module.exports = mongoose.model("products", productsSchema);
