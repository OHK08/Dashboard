import React from 'react'

export default function PlanetForm({isEditing, inputValue, handleChange, handleAddPlanet, handleUpdatePlanet, isValid}) {
  return (
    <>
    <p className="h3 text-center text-decoration-underline">
        {isEditing ? "Planet Update Form" : "Planet Add Form"}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          isEditing ? handleUpdatePlanet() : handleAddPlanet();
        }}
        className="border border-dark-subtle p-3 mb-4"
      >
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <input
              type="text"
              name="planetName"
              placeholder="Planet Name"
              value={inputValue.planetName}
              onChange={handleChange}
              className="form-control mt-3"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <input
              type="text"
              name="url"
              id="url"
              placeholder="Image URL"
              value={inputValue.url}
              onChange={handleChange}
              className="form-control mt-3"
            />
          </div>
          <div className="col-sm-2 col-md-2 col-lg-2">
            {inputValue.url && <img src={inputValue.url} width="50" alt="Preview" />}
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <input
              type="text"
              name="speed"
              placeholder="Speed"
              value={inputValue.speed}
              onChange={handleChange}
              className="form-control mt-3"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <input
              type="text"
              name="size"
              placeholder="Size"
              value={inputValue.size}
              onChange={handleChange}
              className="form-control mt-3"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <input
              type="text"
              name="galaxy"
              placeholder="Galaxy"
              value={inputValue.galaxy}
              onChange={handleChange}
              className="form-control mt-3"
            />
          </div>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="active"
              value="true"
              checked={inputValue.active === true}
              onChange={handleChange}
              className="mt-3"
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="active"
              value="false"
              checked={inputValue.active === false}
              onChange={handleChange}
              className="mt-3"
            />
            Inactive
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-sm mt-3"
          disabled={!isValid}
        >
          {isEditing ? "Update Planet" : "Add Planet"}
        </button>
      </form>
    </>
  )
}
