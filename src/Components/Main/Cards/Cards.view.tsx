import "./Cards.css";

interface BodyProps {
    name: string;
    dens: number;
    grav: number;
    mass: number;
}

const Bodys: React.FC<BodyProps> = ({ name, dens, grav, mass }) => {
    return (
        <div className="Card-body">
                <h1>{name}</h1>
                
                <label>dens.</label>
                <input
                    type="range"
                    value={dens}
                    min={0}
                    max={20}
                />

                <label>grav.</label>
                <input
                    type="range"
                    value={grav}
                    
                />

                <label>mass.</label>
                <input
                    type="range"
                    value={mass}
                    min={0}
                    max={20}
                />
        </div>
    );
};

export default Bodys;
