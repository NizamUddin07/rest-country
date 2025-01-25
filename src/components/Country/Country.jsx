import Countries from "../Countries/Countries";
import'./country.css'

const Country = ({country}) => {
    const {name} = country;
    return (
        <div className="country">
            <h3>Country Name : {name}</h3>
        </div>
    );
};

export default Country;