const Property = require("../models/property");
const User = require("../models/users");

const createProperty = async (req, res) => {
  try {
    const { title, price, text, location, subLocation, type, status, bedroom, bathroom, garage, area, kitchen, livingRoom, video, image, userId } = req.body;

    const newProperty = await Property.create({
      title,
      price,
      text,
      location,
      subLocation,
      type,
      status,
      bedroom,
      bathroom,
      garage,
      area,
      kitchen,
      livingRoom,
      video,
      image,
      userId
    });

    await User.findByIdAndUpdate(
      userId,
      { $push: { properties: newProperty._id } },
      { new: true }
    );

    res.status(201).json({ message: 'Property created successfully', newProperty });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {createProperty}