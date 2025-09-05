import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars(); 

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
      <main className="overflow-hidden pb-20"> 
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Каталог автомобилей</h1>
            <p className="text-gray-600 mt-2">Машины, которые вам точно понравятся</p>
          </div>

          <div className="home__filters mt-8">
            <div className="home__filter-container flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="w-full md:flex-1">
                <SearchBar />
              </div>
              
              <div className="flex gap-4">
                <CustomFilter title="fuel" />
                <CustomFilter title="year" />
              </div>
            </div>
          </div>

          {!isDataEmpty ? (
            <section>
            <div className="home__cars-wrapper mt-10">
              {allCars?.map((car, index) => (
                <CarCard key={`${car.make}-${car.model}-${car.year}-${index}`} car={car} />
              ))}
              
            </div>

            </section>

          ):(
            <div className="home__error-container">
              <h2 className= "text-black text-xl font-bold">
                Oops, no results </h2>
              <p>{allCars?.message}</p>
            </div>
          ) }


        </div>
      </main>
  )
}
