import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [searchedPlant, setSearchedPlant] = useState("")
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(items => setPlants(items))
  }, [])

  function addNewPlant(newPlant){
    setPlants([...plants, newPlant])
  }

    const displayedPlants = plants.filter((plant) => {
      return plant.name.toLowerCase().includes(searchedPlant.toLowerCase());
    });

  return (
    <main>
      <NewPlantForm setPlants={setPlants} addNewPlant={addNewPlant}/>
      <Search searchedPlant={searchedPlant} setSearchedPlant={setSearchedPlant} />
      <PlantList plants={displayedPlants} setPlants={setPlants} />
    </main>
  );
}
export default PlantPage;