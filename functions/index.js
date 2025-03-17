const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
const omshree = express();
omshree.use(cors({ origin: true }));
const db = admin.firestore();

omshree.get("/home", async (req, res) => {
  try {
    res.json({
      message: "Welcome home",
    });
  } catch (error) {
    console.error("Error fetching :", error);
  }
});

omshree.get("/name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    res.json({
      message: "Welcome " + name,
    });
  } catch (error) {
    console.error("Error fetching :", error);
  }
});

omshree.get("/getPlanets", async (req, res) => {
  try {
    const snapshot = await db.collection("planets").get();
    const pl = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(pl);
  } catch (error) {
    console.error("Error getting MCQs:", error);
    res.status(500).send("Internal Server Error");
  }
});

omshree.put("/updatePlanets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const docRef = db.collection("planets").doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "planet not found" });
    }

    await docRef.update(updateData);
    res.json({ message: "Planet updated successfully" });
  } catch (error) {
    console.error("Error getting planet data:", error);
    res.status(500).json({ error: "Error", details: error.message });
  }
});

omshree.post("/addPlanet", async (req, res) => {
  try {
    const { planetName, url, size, speed, galaxy, active } = req.body;

    if (!planetName || !url || !size || !speed || !galaxy) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const newPlanet = {
      planetName,
      url,
      size,
      speed,
      galaxy,
      active,
    };

    const docRef = await db.collection("planets").add(newPlanet);

    res.json({
      success: true,
      message: "Planet added successfully.",
      planetId: docRef.id,
      planetData: newPlanet,
    });
  } catch (error) {
    console.error("Error adding planet:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      details: error.message,
    });
  }
});

omshree.delete("/deletePlanet/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Planet ID is required.",
      });
    }

    const docRef = db.collection("planets").doc(id);
    const doc = await docRef.get();
    if (!doc.exists) {
      return res.status(404).json({
        success: false,
        message: "Planet not found.",
      });
    }

    await docRef.delete();

    res.json({
      success: true,
      message: "Planet deleted successfully.",
    });
  } catch (error) {
    console.error("Error deleting planet:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      details: error.message,
    });
  }
});

exports.omshree = functions.https.onRequest(omshree);