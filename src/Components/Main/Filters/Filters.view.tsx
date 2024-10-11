import "./Filters.css"

const Filters: React.FC = () => {

    return (
        <div className="Filters-body">
            <input type="button" value="dens." />
            <input type="button" value="grav." />
            <input type="button" value="mass." />
        </div>
        
    )
}

export default Filters;