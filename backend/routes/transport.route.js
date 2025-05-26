import express from "express";
import {  sendInquiry } from "../controller/transport.controller.js";


const transport = express.Router();

transport.post("/submit", sendInquiry);

export default transport;
