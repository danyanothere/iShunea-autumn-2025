import { CarProps } from "@/types";

export async function fetchCars() {
     const headers= {
        'x-rapidapi-key': 'd047ba1459mshdb1af88804330afp17fc43jsnfcfb45fe2fa7',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
     }

     const response = await fetch  ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera',
        { headers: headers,
});

const result = await response.json();

return result;

};
export const calculateCarRent = (city_mpg: number, year: number): string => {
const basePricePerDay = 50; // Base rental price per day in dollars
const mileageFactor = 0.1; // Additional rate per mile driven
const ageFactor = 0.05; // Additional rate per year of vehicle age

const mileageRate = city_mpg * mileageFactor;
const ageRate = (new Date().getFullYear() - year) * ageFactor;
const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: CarProps, angle? : string) => {


}
