import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import searchResults from "../dbm.json";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Mapbox from "@/components/Mapbox";

function Search() {
  const router = useRouter();
  // ES6 Destructring
  const { location, startDate, endDate, noOfGuests } = router.query;

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  // const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <Header placeholder={`${location}  | ${noOfGuests}`}></Header>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Types of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
          {searchResults && searchResults.map((result) => {
            return(
              <InfoCard
                key={result.img}
                img={result.img}
                location={result.location}
                title={result.title}
                description={result.description}
                star={result.star}
                price={result.price}
                total={result.total}
              ></InfoCard>
            )}
          )}
          </div>
          
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px] overflow-hidden">
            <Mapbox searchResults={searchResults}></Mapbox>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Search;

