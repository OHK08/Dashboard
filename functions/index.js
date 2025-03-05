const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
admin.initializeApp();
const omshree = express();
omshree.use(cors({origin: true}));
const db = admin.firestore();

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

omshree.post("/api/addStudent", (req, res) => {
    (async () => {
        try {
            const {name, roll, phy, math, chem} = req.body;
            const total = phy + chem + math;
            const percentage = total/3;
            let grade;
            if (percentage >= 90) {
                grade = 'A';
            } else if (percentage >= 80) {
                grade = 'B';
            } else if (percentage >= 70) {
                grade = 'C';
            } else if (percentage >= 0) {
                grade = 'D';
            } else {
                grade = 'F';
            }
            await db.collection("students").doc().set({
                name, roll, phy, chem, math, total, percentage, grade,
            });
            return res.status(200).send({status: "success", msg: "Student data saved"});
        } catch(error) {
            console.error(error);
            res.status(500).send({status: "failure", msg: error.toString() });
        }
    })();
});

// omshree.put("/api/updateStudent", (req, res) => {
//     (async () => {
//         try {
//             const {id, name, roll, phy, chem}
//         }
//     })
// })

exports.omshree = functions.https.onRequest(omshree);