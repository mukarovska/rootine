import { useEffect, useState } from 'react';
import './App.css';
import { supabase } from './supabaseClient';

interface Plant {
  id: string;
  created_at: string;
  user_id: string;
  name: string;
  location: string;
}

function App() {
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    async function initialize() {
      await supabase.auth.signInWithPassword({
        email: import.meta.env.VITE_DEV_USER_EMAIL,
        password: import.meta.env.VITE_DEV_USER_PASSWORD,
      });

      const { data, error } = await supabase.from('Plants').select('*');

      if (error) {
        console.error('Chyba načítání:', error.message);
        return;
      }

      setPlants(data ?? []);
    }

    initialize();
  }, []);

  return (
    <main>
      <h1>Rootine – moje rostliny - test</h1>
      {plants && (
        <>
          {plants.map((plant) => {
            return <p key={plant.id}>{plant.name}</p>;
          })}
        </>
      )}
    </main>
  );
}

export default App;
