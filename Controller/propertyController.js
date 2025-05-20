const Property = require("../Models/propertyModel");
console.log("Property model imported", Property);
// Create a new property
exports.createProperty = async (req, res) => {
    try {
        const { title, description, price } = req.body;
        const userId = req.user.id; // Assuming `req.user` contains the logged-in user's info
        console.log("User ID from request:", userId);
        const property = await Property.create({ title, description, price, userId });
        console.log("Property created:", property);
        res.status(201).json({ success: true, data: property });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all properties (only for the logged-in user)
exports.getProperties = async (req, res) => {
    try {
        const userId = req.user.id;
        const properties = await Property.findAll({ where: { userId } });
        res.status(200).json({ success: true, data: properties });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a property (only if it belongs to the logged-in user)
exports.updateProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price } = req.body;
        const userId = req.user.id;

        const property = await Property.findOne({ where: { id, userId } });
        if (!property) {
            return res.status(404).json({ success: false, message: "Property not found or not authorized" });
        }

        property.title = title || property.title;
        property.description = description || property.description;
        property.price = price || property.price;
        await property.save();

        res.status(200).json({ success: true, data: property });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a property (only if it belongs to the logged-in user)
exports.deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        const property = await Property.findOne({ where: { id, userId } });
        if (!property) {
            return res.status(404).json({ success: false, message: "Property not found or not authorized" });
        }

        await property.destroy();
        res.status(200).json({ success: true, message: "Property deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}; 