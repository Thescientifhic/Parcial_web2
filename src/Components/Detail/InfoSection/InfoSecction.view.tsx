
import "./Cards.css"

interface BodyProps {
    englishName: string;
    isPlanet: boolean;
    moons: Array<string>;
    semimajorAxis: number;
    perihelion: number;
    aphelion: number;
    eccentricity: number;
    inclination: number;
    dens: number;
    grav: number;
    mass: number;
}

const InfoSecction: React.FC <BodyProps> = ({isPlanet, moons, semimajorAxis, perihelion, aphelion, eccentricity,inclination,englishName, dens, grav, mass}) => {

    return (
        <div className="Card-body">
            <div>
            <label>dens. {dens}</label>
            <input
                type="range"
                value={dens}
            />
            <label>grav. {grav}</label>
            <input
                type="range"
                value={grav}
            />
            </div>
            <div>
                <p>{englishName}</p>
                <p>{isPlanet}</p>
                <p>{isPlanet}</p>
                <p>{moons}</p>
                <p>{semimajorAxis}</p>
                <p>{perihelion}</p>
                <p>{aphelion}</p>
                <p>{eccentricity}</p>
                <p>{inclination}</p>
            </div>
            <div>
            <label>mass. {mass}</label>
            <input
                type="range"
                value={mass}
            />            </div>
        </div>
        
    )
}

export default InfoSecction;