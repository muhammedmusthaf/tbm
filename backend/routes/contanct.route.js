import express from 'express';
import { handleContactForm } from '../controller/transport.controller.js';

const contact = express.Router();

contact.post('/contact-submit', handleContactForm);

export default contact;






