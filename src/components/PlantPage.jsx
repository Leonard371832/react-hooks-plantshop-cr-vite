
import { useState, useEffect } from "react";
import PlantList from "./PlantList";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm.jsx";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuerry, setSearchQuerry] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => setPlants(data));
  }, []);

   function addPlant(newPlant) {
    setPlants((currentPlants) => [...currentPlants, newPlant]);
   }

   const filteredPlants = plants.filter((plant) => 
       plant.name.toLowerCase().includes(searchQuerry.toLowerCase())
  );

  return (
     <main>
       <NewPlantForm onAddPlant={addPlant} />
       <Search
           searchQuerry={searchQuerry}
           onSearchChange={setSearchQuerry}       
       />
       <PlantList plants={filteredPlants} />
     </main>
  );
}

export default PlantPage;

