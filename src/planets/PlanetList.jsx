import React, { useState, useEffect } from "react";

function PlanetList() {
    const [planet, setPlanet] = useState([]);

    useEffect(() => {
        const fetchPlanets = async () => {
            const response = await fetch('https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/getplanets');
            const data = await response.json();
            setPlanet(data);
        };
        fetchPlanets();
    }, []);
    const deletePlanet = async (id) => {
        try {
            const response = await fetch(`https://us-central1-flutter-chedo.cloudfunctions.net/chedoImsApi/deletePlanet/${id}`, {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('Failed to delete planet');
            }
    
            // Option 1: Refetch the list of planets (if needed)
            // await fetchPlanets();
    
            // Option 2: Optimistically update state
            setPlanet((prevPlanets) => prevPlanets.filter((planet) => planet.id !== id));
    
            console.log(`Planet with ID ${id} deleted successfully`);
        } catch (err) {
            alert(err.message);
        }
    };
    

    return (
        <>
            <h2>Planets List</h2>
            <table className="table table-striped table-success container">
                <thead>
                    <tr>
                        <th>Planet Name</th>
                        <th>Planet Image</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {planet.map(planet => (
                        <tr key={planet.id}>
                            <td>
                                {planet.planetName}
                            </td>
                            <td>
                                <img src={planet.url}
                                    style={{ width: "50px", height: "50px", borderRadius: "8px", padding: "3px" }} />
                            </td>
                            <td>
                                <button type="button" className="btn btn-sm btn-danger" onClick={() => deletePlanet(planet.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
export default PlanetList;