import React, { useState, useEffect } from "react";

function PlanetData() {
    const [planets, setPlanets] = useState([]);
    const [inputValue, setInputValue] = useState({
        planetName: "",
        url: "",
        size: "",
        speed: "",
        galaxy: "",
        active: true,
    });

    const [planetData, setPlanetData] = useState({
        planetName: "",
        url: "",
        size: "",
        speed: "",
        galaxy: "",
        active: true,
    });

    const [planetId, setPlanetId] = useState(null);

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
                console.error(error);
            }
        };
        fetchPlanets();
    }, []);

    // Delete planet
    const deletePlanet = async (id) => {
        try {
            const response = await fetch(
                `https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/deletePlanet/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!response.ok) throw new Error("Failed to delete planet");

            setPlanets((prevPlanets) =>
                prevPlanets.filter((planet) => planet.id !== id)
            );
        } catch (err) {
            alert(err.message);
        }
    };

    // Handle change for add form
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: type === "radio" ? value === "true" : value,
        }));
    };

    // Handle change for update form
    const handleChangeU = (e) => {
        const { name, value, type } = e.target;
        setPlanetData((prevData) => ({
            ...prevData,
            [name]: type === "radio" ? value === "true" : value,
        }));
    };

    // Add planet
    const addPlanet = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/addPlanet",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(inputValue),
                }
            );
            if (!response.ok) throw new Error("Failed to add planet");
            const newPlanet = await response.json();
            setPlanets((prevPlanets) => [...prevPlanets, newPlanet]);
            setInputValue({
                planetName: "",
                url: "",
                size: "",
                speed: "",
                galaxy: "",
                active: true,
            });
        } catch (err) {
            alert(err.message);
        }
    };

    // Update planet
    const updatePlanet = async (e) => {
        e.preventDefault();
        if (!planetId) {
            alert("Please select a planet to update.");
            return;
        }
        try {
            const response = await fetch(
                `https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/updatePlanets/${planetId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(planetData),
                }
            );
            if (!response.ok) throw new Error("Failed to update planet");
            const updatedPlanet = await response.json();
            setPlanets((prevPlanets) =>
                prevPlanets.map((planet) =>
                    planet.id === planetId ? updatedPlanet : planet
                )
            );
            setPlanetId(null);
            setPlanetData({
                planetName: "",
                url: "",
                size: "",
                speed: "",
                galaxy: "",
                active: true,
            });
        } catch (err) {
            alert(err.message);
        }
    };

    // Function to update the planet in the database
    const updatePlanetAPI = async (planetId, updatedData) => {
        try {
            const response = await fetch(
                `https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/updatePlanets/${planetId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updatedData),
                }
            );
            if (!response.ok) throw new Error("Failed to update planet");
            return await response.json(); // Return updated planet from API
        } catch (err) {
            alert(err.message);
            return null;
        }
    };

    // Function to update the UI state
    // const updatePlanetState = (updatedPlanet) => {
    //     if (!updatedPlanet) return;
    //     setPlanets((prevPlanets) =>
    //         prevPlanets.map((planet) =>
    //             planet.id === updatedPlanet.id ? updatedPlanet : planet
    //         )
    //     );

    // Reset update form fields
    //     setPlanetId(null);
    //     setPlanetData({
    //         planetName: "",
    //         url: "",
    //         size: "",
    //         speed: "",
    //         galaxy: "",
    //         active: true,
    //     });
    // };

    return (
        <div className="container">
            <div className="row">
                {/* Add Planet Form */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <h2>Add Planet</h2>
                    <form onSubmit={addPlanet}>
                        <input
                            type="text"
                            placeholder="Planet Name"
                            name="planetName"
                            className="form-control mb-3"
                            value={inputValue.planetName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            name="url"
                            className="form-control mb-3"
                            value={inputValue.url}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder="Size"
                            name="size"
                            className="form-control mb-3"
                            value={inputValue.size}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            placeholder="Speed"
                            name="speed"
                            className="form-control mb-3"
                            value={inputValue.speed}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            placeholder="Galaxy"
                            name="galaxy"
                            className="form-control mb-3"
                            value={inputValue.galaxy}
                            onChange={handleChange}
                        />
                        <div>
                            <input
                                type="radio"
                                id="activeTrue"
                                name="active"
                                value="true"
                                checked={inputValue.active === true}
                                onChange={handleChange}
                            />
                            <label htmlFor="activeTrue">Active</label>
                            <input
                                type="radio"
                                id="activeFalse"
                                name="active"
                                value="false"
                                checked={inputValue.active === false}
                                onChange={handleChange}
                            />
                            <label htmlFor="activeFalse">Not Active</label>
                        </div>
                        <button type="submit" className="btn btn-sm btn-primary">
                            Add Planet
                        </button>
                    </form>
                </div>

                {/* Update Planet Form */}
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <h2>Update Planet</h2>
                    <form onSubmit={updatePlanet}>
                        <input
                            type="text"
                            placeholder="Planet Name"
                            name="planetName"
                            className="form-control mb-3"
                            value={planetData.planetName}
                            onChange={handleChangeU}
                        />
                        <input
                            type="url"
                            placeholder="Planet Image"
                            name="url"
                            className="form-control mb-3"
                            value={planetData.url}
                            onChange={handleChangeU}
                        />
                        <input
                            type="number"
                            placeholder="Planet Size"
                            name="size"
                            className="form-control mb-3"
                            value={planetData.size}
                            onChange={handleChangeU}
                        />
                        <input
                            type="number"
                            placeholder="Planet Speed"
                            name="speed"
                            className="form-control mb-3"
                            value={planetData.speed}
                            onChange={handleChangeU}
                        />
                        <input
                            type="text"
                            placeholder="Planet Galaxy"
                            name="galaxy"
                            className="form-control mb-3"
                            value={planetData.galaxy}
                            onChange={handleChangeU}
                        />
                        <div>
                            <input
                                type="radio"
                                id="activeTrueU"
                                name="active"
                                value="true"
                                checked={planetData.active === true}
                                onChange={handleChangeU}
                            />
                            <label htmlFor="activeTrueU">Active</label>
                            <input
                                type="radio"
                                id="activeFalseU"
                                name="active"
                                value="false"
                                checked={planetData.active === false}
                                onChange={handleChangeU}
                            />
                            <label htmlFor="activeFalseU">Not Active</label>
                        </div>
                        <button type="submit" className="btn btn-sm btn-warning">
                            Update Planet
                        </button>
                    </form>
                </div>

                {/* Planet List */}
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h2>Planets List</h2>
                    <table className="table table-striped table-success">
                        <thead>
                            <tr>
                                <th>Planet Name</th>
                                <th>Image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {planets.map((planet, index) => (
                                <tr key={planet.id || index}>
                                    <td>{planet.planetName}</td>
                                    <td>
                                        <img
                                            src={planet.url}
                                            alt={planet.planetName}
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-info"
                                            onClick={() => {
                                                setPlanetId(planet.id);
                                                setPlanetData(planet);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => deletePlanet(planet.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PlanetData;
