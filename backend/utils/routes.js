import express from 'express';
import path, { join } from 'path'; // Add { join } here
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path'; // Remove join from here
import Contact from './contact.models.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Serve frontend files from the root route
const publicPath = path.join(__dirname, 'public');
router.use(express.static(publicPath));

// Route to serve index.html at the root route
router.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Route to save a new contact
router.post('/api/save', async (req, res) => {
    const { first_name, last_name, email, phone, message } = req.body;

    try {
        const newContact = new Contact({
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            message: message
        });

        await newContact.save();
        console.log('Contact saved successfully');
        res.status(200).send('Message saved successfully');
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).send('Error saving contact');
    }
});

// Route to display all contact data
router.get('/display', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.render('display', { contacts: contacts });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).send('Error fetching contacts');
    }
});

// Route to delete a contact
router.post('/delete/:id', (req, res) => {
    const contactId = req.params.id;
    Contact.findByIdAndDelete(contactId)
        .then(() => {
            console.log('Contact deleted successfully');
            res.redirect('/display');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting contact');
        });
});

export default router;
