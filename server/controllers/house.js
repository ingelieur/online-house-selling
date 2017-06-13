const House = require('../models/house')

var create = ((req, res) => {
  let newHouse = new House ({
    createdAt: new Date(),
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    area: req.body.area,
    width: req.body.width,
    length: req.body.length,
    locName: req.body.locName,
    locLat: req.body.locLat,
    locLng: req.body.locLng,
    bedrooms: req.body.rooms,
    livingrooms: req.body.rooms,
    bathrooms: req.body.rooms,
    features: req.body.features,
    contactName: req.body.contactName,
    contactPhone: req.body.contactPhone,
    type: req.body.type
  })
  newHouse.save((err, createdHouse) => {
    res.send(err ? err : createdHouse)
  })
})

var showAll = ((req, res) => {
  House.find((err, houses) => {
    res.send(err ? err : houses)
  })
})

var showOne = ((req, res) => {
  House.findById(req.params.id, (err, house) => {
    res.send(err ? err : house)
  })
})

var update = ((req, res) => {
  House.findById(req.params.id, (err, house) => {
    if(err) res.send(err)
    else {
      house.title = req.body.title || house.title
      house.description = req.body.description || house.description
      house.price = req.body.price || house.price
      house.area = req.body.area || house.area
      house.width = req.body.width || house.width
      house.length = req.body.length || house.length
      house.locName = req.body.locName || house.locName
      house.locLat = req.body.locLat || house.locLat
      house.locLng = req.body.locLng || house.locLng
      house.bedrooms = req.body.rooms || house.bedrooms
      house.livingrooms = req.body.rooms || house.livingrooms
      house.bathrooms = req.body.rooms || house.bathrooms
      console.log(req.body.features)
      house.features = req.body.features || house.features
      house.contactName = req.body.contactName || house.contactName
      house.contactPhone = req.body.contactPhone || house.contactPhone
      house.save((errSaving, house) => {
        res.send(err ? err : house)
      })
    }
  })
})

var destroy = ((req, res) => {
  House.findByIdAndRemove(req.params.id, (err, house) => {
    res.send(err ? err : house)
  })
})

module.exports = {
  create,
  showAll,
  showOne,
  update,
  destroy
}
