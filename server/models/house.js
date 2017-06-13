const mongoose = require('mongoose')
const Schema = mongoose.Schema

var houseSchema = new Schema ({
  createdAt: {
    type: Date,
    required: [true, '{PATH} is required']
  },
  type: {
    type: String,
    required: [true, '{PATH} is required'],
    enum: {values: ['land', 'apartment', 'villa'], message: '{PATH} should not be outside of the allowed values'}
  },
  image: {
    type: String,
    required: [true, '{PATH} is required']
  },
  title: {
    type: String,
    required: [true, '{PATH} is required']
  },
  description: {
    type: String,
    required: [true, '{PATH} is required']
  },
  price: {
    type: Number,
    required: [true, '{PATH} is required']
  },
  area: {
    type: Number,
    required: [true, '{PATH} is required']
  },
  width: {
    type: Number,
  },
  length: {
    type: Number,
  },
  locName: {
    type: String,
    required: [true, '{PATH} is required']
  },
  locLat: {
    type: Number,
    required: [true, '{PATH} is required']
  },
  locLng: {
    type: Number,
    required: [true, '{PATH} is required']
  },
  bedrooms: {
    type: Number
  },
  livingrooms: {
    type: Number
  },
  bathrooms: {
    type: Number
  },
  features: {
    type: [String]
  },
  contactName: {
    type: String,
    required: [true, '{PATH} is required']
  },
  contactPhone: {
    type: String,
    required: [true, '{PATH} is required']
  }
})

var House = mongoose.model('house', houseSchema)
module.exports = House
