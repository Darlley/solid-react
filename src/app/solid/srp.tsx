'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SRP() {
  /**
   * INCORRECT SRP ❌
   
    const [data, setData] = useState<
      Array<{
        cell: string;
        name: {
          first: string;
        };
      }>
    >([]);

    async function handleData() {
      const response = await axios.get('https://randomuser.me/api?results=20');
      setData(response.data.results);
    }

    useEffect(() => {
      handleData();
    }, []);
    
  */

  /**
   * CORRECT SRP ✅
   */
  const { data, isLoading } = customHook();

  function handleSelectColorByGender(gender: string): string {
    return gender === 'male' ? '#8abdff' : '#ff96e3';
  }

  return (
    <div className='flex flex-col p-6'>
      <h2>Single Responsability Principle</h2>

      <div className="flex gap-4">
        <ul className="flex flex-col gap-0.5">
          <h3 className="font-bold my-4">NOME:</h3>
          {isLoading && data.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            data.map((user) => (
              <li 
                key={user.cell}
                style={{
                  color: handleSelectColorByGender(user.gender)
                }}
              >
                <p>{user.name.first}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

function customHook() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<
    Array<{
      cell: string;
      name: {
        first: string;
      };
      gender: string;
    }>
  >([]);

  async function handleData() {
    const response = await axios.get('https://randomuser.me/api?results=20');
    setData(response.data.results);
  }

  useEffect(() => {
    try {
      setIsLoading(true);
      handleData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
  };
}
