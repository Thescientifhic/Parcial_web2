
import { useEffect, useState } from 'react';
import { Planet } from '../Types/Planet';

const useFetchPlanet = (url: string) => {
    const [planet, setPlanet] = useState<Planet | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPlanet = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPlanet(data.bodies);

            } catch (error) {
                setError('Error fetching planet data');
            } finally {
                setLoading(false);
            }
        };

        fetchPlanet();
    }, [url]);

    console.log(planet);

    return { planet, loading, error };
};

export default useFetchPlanet;
