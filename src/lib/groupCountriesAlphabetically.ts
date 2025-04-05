export const groupCountriesAlphabetically = (countries: any[]) => {
    return countries.reduce((acc, country) => {
        const firstLetter = country.name[0].toUpperCase();
        if (!acc[firstLetter]) {
            acc[firstLetter] = [];
        }
        acc[firstLetter].push(country);
        return acc;
    }, {});
};