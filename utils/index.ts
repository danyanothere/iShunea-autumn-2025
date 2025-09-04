export async function fetchCars() {
     const headers= {
        'x-rapidapi-key': 'd047ba1459mshdb1af88804330afp17fc43jsnfcfb45fe2fa7',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
     }

     const response = await fetch  ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        { headers: headers,
});

const result = await response.json();

return result;

};