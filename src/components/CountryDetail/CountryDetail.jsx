import CountryData from "../CountryData/CountryData";


const CountryDetail = (proops) => {
    return (
        <div>
            <h4>Country Details: </h4>
            <hr />
            <CountryData {...proops} >
            </CountryData>
        </div>
    );
};

export default CountryDetail;