import React from "react";

export default function PlanetList({ planets, handleDelete, handleEdit }) {
  return (
    <>
      <p className="h3 text-center text-decoration-underline">Planet Table</p>
      <table className="table table-striped table-light mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Planet Name</th>
            <th>Image</th>
            <th>Speed</th>
            <th>Size</th>
            <th>Galaxy</th>
            <th>Active</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => (
            <tr key={planet.id}>
              <td>{index + 1}</td>
              <td>{planet.planetName}</td>
              <td>
                <img src={planet.url} alt={planet.planetName} width="50" />
              </td>
              <td>{planet.speed}</td>
              <td>{planet.size}</td>
              <td>{planet.galaxy}</td>
              <td>{planet.active ? "Active" : "Inactive"}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
  );
}