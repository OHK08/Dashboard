import React, { useState, useEffect } from "react";
import PlanetForm from "./PlanetForm";
import PlanetList from "./PlanetList";

export default function PlanetData() {

    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        const fetchPlanets = async () => {
            try {
                const response = await fetch(
                    "https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/getplanets"
                );
                if (!response.ok) throw new Error("Failed to fetch planets");
                const data = await response.json();
                setPlanets(data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchPlanets();
    }, []);

    const [inputValue, setInputValue] = useState({
        id: "",
        planetName: "",
        url: "",
        speed: "",
        size: "",
        galaxy: "",
        active: null,
    });
    const [editIndex, setEditIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === "active" ? value === "true" : value;

        setInputValue((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));
        if (name === "url") checkImageURL(value);
        if (name === "speed" || name === "size") checkNum(value);
    };

    const validateForm = () => {
        const { planetName, url, speed, size, galaxy, active } = inputValue;
        setIsValid(
            planetName.trim() !== "" &&
            url.trim() !== "" &&
            speed > 0 &&
            size > 0 &&
            galaxy.trim() !== "" &&
            active !== null
        );
        if(speed < 0) {
            alert("Value must be greater than zero.")
        }
    };

    useEffect(() => {
        validateForm();
    }, [inputValue]);

    const checkImageURL = (url) => {
        if (!url) {
            return false;
        };
        const img = new Image();
        img.onload = () => {
            alert("The URL is a valid image.");
            return true;
        }
        img.onerror = () => {
            alert("The URL is not an image.");
            return false;
        }
        img.src = url;
    };

    const checkNum = (num) => {
        if (num <= 0) {
          alert("Cannot be less than 0.");
          return false;
        }
        else {
          return true;
        }
      };    

      const handleAddPlanet = async () => {
        await addPlanet(inputValue);
        setPlanets([...planets, inputValue]);
        setInputValue({
          id: "",
          planetName: "",
          url: "",
          speed: "",
          size: "",
          galaxy: "",
          active: null,
        });
      };

    const handleEdit = (index) => {
        setIsEditing(true);
        setInputValue(planets[index]);
        setEditIndex(index);
    };

    const handleUpdatePlanet = async () => {
        if (editIndex !== null) {
            const planetId = planets[editIndex]?.id;
            if (!planetId) {
                alert("Error: Cannot update. Missing Planet ID.");
                return;
            }

            await updatePlanet(planetId, inputValue);

            const updatedPlanets = [...planets];
            updatedPlanets[editIndex] = { ...inputValue, id: planetId };
            setPlanets(updatedPlanets);
            setEditIndex(null);
            setIsEditing(false);
            setInputValue({
                id: "",
                planetName: "",
                url: "",
                speed: "",
                size: "",
                galaxy: "",
                active: null,
            });
        }
    };


    const handleDelete = async (index) => {
        await deletePlanet(planets[index].id);
        const updatedPlanets = planets.filter((_, i) => i !== index);
        setPlanets(updatedPlanets);
    };

    const deletePlanet = async (id) => {
        try {
            const response = await fetch(
                `https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/deletePlanet/${id}`,
                {
                    method: "DELETE",
                }
            );
            if (!response.ok) {
                throw new Error("Failed to delete planet");
            }
            setPlanets((prevPlanets) =>
                prevPlanets.filter((planet) => planet.id !== id)
            );
        } catch (err) {
            alert(err.message);
        }
    };

    const addPlanet = async (planetData) => {
        try {
            const response = await fetch(
                "https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/addPlanet",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(planetData),
                }
            );
            if (!response.ok) throw new Error("Failed to add planet");
            const newPlanet = await response.json();
            setPlanets((prevPlanets) => [...prevPlanets, newPlanet]);
        } catch (err) {
            alert(err.message);
        }
    };

    const updatePlanet = async (id, planetData) => {
        try {
            const response = await fetch(
                `https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/updatePlanets/${id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(planetData),
                }
            );
            if (!response.ok) throw new Error("Failed to update planet");
            const updatedPlanet = await response.json();
            setPlanets((prevPlanets) =>
                prevPlanets.map((planet) => (planet.id === id ? updatedPlanet : planet))
            );
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <>
        <div className="container">
            <PlanetForm
                isEditing={isEditing}
                inputValue={inputValue}
                handleChange={handleChange}
                handleAddPlanet={handleAddPlanet}
                handleUpdatePlanet={handleUpdatePlanet}
                isValid={isValid}
            />
            <PlanetList
                planets={planets}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            </div>
        </>
    )
}
