import { CarProps } from "@/types";


export async function fetchCars(): Promise<CarProps[]> {

  const requestedMakes: string[] = [
    "BMW",
    "Toyota",
    "Mercedes-Benz",
    "Audi",
    "Lexus",
    "Volkswagen", // for Golf
  ];

  
  async function fetchModelsForMake(make: string) {
    const url = `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(
      make
    )}?format=json`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [] as any[];
    const data = await res.json();
    return (data?.Results || []) as Array<{
      Make_ID: number;
      Make_Name: string;
      Model_ID: number;
      Model_Name: string;
    }>;
  }

  const resultsPerMake = await Promise.all(requestedMakes.map(fetchModelsForMake));

  
  const perMakeLimited = resultsPerMake.map((models, idx) => {
    const make = requestedMakes[idx];
    if (make.toLowerCase() === "volkswagen") {
      const golfOnly = models.filter(m => /golf/i.test(m.Model_Name));
      return golfOnly.slice(0, 3);
    }
    return models.slice(0, 3);
  });

  const flat = perMakeLimited.flat();

  
  const yearsCycle = [2017, 2019, 2022];
  const mpgCycle = [24, 30, 35];
  const driveCycle = ["fwd", "rwd", "awd"] as const;
  const transmissionCycle = ["a", "m", "a"] as const;
  const fuelCycle = ["Gas", "Electricity", "Gas"] as const;

  const sample: CarProps[] = perMakeLimited.flatMap((models, makeIdx) =>
    models.map((item, j) => {
      const year = yearsCycle[j % yearsCycle.length];
      const cityMpg = mpgCycle[j % mpgCycle.length];
      const drive = driveCycle[j % driveCycle.length];
      const transmission = transmissionCycle[j % transmissionCycle.length];
      const fuel_type = fuelCycle[j % fuelCycle.length];

      return {
        city_mpg: cityMpg,
        class: "Sedan",
        combination_mpg: cityMpg + 3,
        cylinders: 4,
        displacement: 2.0,
        drive,
        fuel_type,
        highway_mpg: cityMpg + 5,
        make: item.Make_Name,
        model: item.Model_Name,
        transmission,
        year,
      } as CarProps;
    })
  );

  
  const seen = new Set<string>();
  const unique = sample.filter((c) => {
    const key = `${c.make}-${c.model}-${c.year}`.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return unique;
}
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
  const url = new URL("https://cdn.imagin.studio/getimage");

  
  const make = car.make;
  const rawModel = car.model;
  const modelLower = rawModel.toLowerCase();
  let modelFamily = rawModel.split(" ")[0];

  if (/bmw/i.test(make)) {
    if (/x5/i.test(modelLower)) modelFamily = "X5";
    else if (/\b3\b|3-series|3 series/i.test(modelLower)) modelFamily = "3 Series";
    else if (/\b5\b|5-series|5 series/i.test(modelLower)) modelFamily = "5 Series";
  } else if (/audi/i.test(make)) {
    if (/a4/i.test(modelLower)) modelFamily = "A4";
    else if (/a6/i.test(modelLower)) modelFamily = "A6";
    else if (/q5/i.test(modelLower)) modelFamily = "Q5";
  } else if (/mercedes/i.test(make) || /mercedes-benz/i.test(make)) {
    if (/c[- ]?class|\bc\b/i.test(modelLower)) modelFamily = "C-Class";
    else if (/e[- ]?class|\be\b/i.test(modelLower)) modelFamily = "E-Class";
    else if (/gle/i.test(modelLower)) modelFamily = "GLE";
  } else if (/lexus/i.test(make)) {
    if (/rx/i.test(modelLower)) modelFamily = "RX";
    else if (/es/i.test(modelLower)) modelFamily = "ES";
    else if (/is\b/i.test(modelLower)) modelFamily = "IS";
  } else if (/volkswagen/i.test(make)) {
    if (/golf\s*r\b/i.test(modelLower)) modelFamily = "Golf R";
    else if (/gti/i.test(modelLower)) modelFamily = "Golf GTI";
    else if (/golf/i.test(modelLower)) modelFamily = "Golf";
  } else if (/toyota/i.test(make)) {
    if (/camry/i.test(modelLower)) modelFamily = "Camry";
    else if (/corolla/i.test(modelLower)) modelFamily = "Corolla";
    else if (/rav4/i.test(modelLower)) modelFamily = "RAV4";
  }
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", modelFamily);
  url.searchParams.append("modelYear", String(car.year));
  url.searchParams.append("zoomType", "fullscreen");
  if (angle) url.searchParams.append("angle", angle);
  return url.toString();
}
