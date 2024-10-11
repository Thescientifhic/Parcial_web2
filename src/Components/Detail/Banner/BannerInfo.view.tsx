
import "./BannerInfo.css"

interface BannerDetailProps {
    name: string;
    id: string;
    isPlanet: boolean;
    grav: number;
    mass: number;
}

const BannerInfo: React.FC <BannerDetailProps> = ({name, id, isPlanet, grav, mass}) => {

    return (
        <div className="Card-body">
            <h1>{name}</h1>
            <p>{id}</p>

            <div>
                <p>{isPlanet}</p>
                <p>{grav}</p>
                <p>{mass}</p>
            </div>
        </div>
        
    )
}

export default BannerInfo;