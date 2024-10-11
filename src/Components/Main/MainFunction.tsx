import React from "react";
import Bodys from "./Cards/Cards.view";
import Filters from "./Filters/Filters.view";
import OrderBy from "./OrderBy/OrderBy.view";
import useFetchPlanet from "../../Hooks/useFetch";
import "./MainFunction.css"

const MainFunction: React.FC = () => {
    const { planet, loading, error } = useFetchPlanet('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false'); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <Filters />
            <OrderBy />

            {planet && planet.map((body: any) => (
                <Bodys 
                    key={body.id} 
                    name={body.name} 
                    dens={body.density} 
                    grav={body.gravity} 
                    mass={body.mass?.massValue}
                />
            ))}
        </div>
    );
}

export default MainFunction;
