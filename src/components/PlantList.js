import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants}) {
  return (
    <ul className="cards">
      {plants.map(plant => {
        return <PlantCard plant={plant} key={plant.id}/>
      })}
    </ul>
  );
}

export default PlantList;
