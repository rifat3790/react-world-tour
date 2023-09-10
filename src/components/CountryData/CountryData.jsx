

const CountryData = (props) => {
    const {country, handleVisitedCountry, handleVisitedFlag} = props;
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;