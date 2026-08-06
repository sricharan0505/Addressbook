const contactModel = require("../models/contactModel");

// GET all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await contactModel.getAllContacts();
        res.status(200).json(contacts);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: err.message});
    }
}

// GET contact by ID
const getContactById = async (req, res) => {
    try {
        const {id} = req.params;
        const contact = await contactModel.getContactById(id);
        if (contact.length === 0) {
            return res.status(404).json({
                message: "Contact not found"
            })
        }
        res.status(200).json(contact[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}

// CREATE contact
const createContact = async (req, res) => {
    try {
        const newContact = await contactModel.createContact(req.body);
        res.status(201).json(newContact);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

// UPDATE contact
const updateContact = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedContact = await contactModel.updateContact(id, req.body);
        if (!updatedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }
        res.status(200).json(updatedContact);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        });
    }
};

// DELETE contact
const deleteContact = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedContact = await contactModel.deleteContact(id);
        if (!deletedContact) {
            return res.status(404).json({
                message: "Contact not found"
            });
        }
        res.status(200).json({
            message: "Contact deleted successfully",
            deletedContact
        });
    } catch (err) {
        console.error(err);

        res.status(500).json({
            message: err.message
        });
    }
};

module.exports = {
    getContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};