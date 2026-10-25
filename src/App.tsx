import "./App.css";

import { useEffect, useState } from "react";

import type { TestPlant } from "./models/testPlant";
import { supabase } from "./supabaseClient";

interface Plant {
  id: string;
  created_at: string;
  user_id: string;
  name: string;
  location: string;
}

function App() {
  const [plants, setPlants] = useState<Plant[]>([]);

  const plant: TestPlant = {
    name: "Monstera",
    location: "obývák",
  };

  console.log(plant);

  useEffect(() => {
    async function initialize() {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: import.meta.env.VITE_DEV_USER_EMAIL,
        password: import.meta.env.VITE_DEV_USER_PASSWORD,
      });

      if (signInError) {
        console.error("Chyba přihlášení:", signInError.message);
        return;
      }

      const { data, error } = await supabase
        .from("Plants")
        .select("id, created_at, user_id, name, location");

      if (error) {
        console.error("Chyba načítání rostlin:", error.message);
        return;
      }

      setPlants(data ?? []);
    }

    void initialize();
  }, []);

  return (
    <main>
      <h1>Rootine moje rostliny test</h1>

      {plants.map((plant) => (
        <p key={plant.id}>{plant.name}</p>
      ))}
    </main>
  );
}

export default App;
