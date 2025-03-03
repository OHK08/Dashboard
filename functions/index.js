const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
admin.initializeApp();
const omshree = express();
omshree.use(cors({origin: true}));

omshree.get("/home", (req, res) => {
    res.send("Welcome to our simple API!");
});

omshree.delete("/delete/age/:number", (req, res) => {
    const age = req.params.number;
    res.send(`You are deleting ${age}`);
});

omshree.post("/example", async (req, res) => {
    try {
        const {subject} = req.body;
        res.json(subject);
    }
    catch (error) {
        console.error("Error getting MCQs by subject: ", error);
        res.status(500).send("Internal server error");
    }
});

omshree.put("/update/age/:number", async (req, res) => {
    try {
        const {subject} = req.body;
        const age = req.params.number;
        res.json(`You are updating ${age} ${subject}`);
    } catch (error) {
        console.error("Error getting MCQs by subject: ", error);
        res.status(500).send("Internal server error");
    }
});

omshree.use((req, res) => {
    res.status(404).send("404 not found");
});

exports.omshree = functions.https.onRequest(omshree);