import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import SmallCard from "@/components/SmallCard";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";
import banner from '../images/banner.jpg'
import Records from "../db.json";
import Mrecords from "../dbs.json";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" type="" href="/icons8-airbnb.svg"></link>
      </Head>

      <Header></Header>
      <Banner></Banner>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull some data from a server - API endpoints */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Records &&
              Records.map((record) => {
                return (
                  <div key={record.img}>
                    <SmallCard
                      key={record.img}
                      img={record.img}
                      distance={record.distance}
                      location={record.location}
                    ></SmallCard>
                  </div>
                );
              })}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll overflow-y-hidden scrollbar-hide p-3 -ml-3">
            {Mrecords &&
              Mrecords.map((records) => {
                return (
                  <div key={records.img}>
                    <MediumCard
                      key={records.img}
                      img={records.img}
                      title={records.title}
                    ></MediumCard>
                  </div>
                );
              })}
          </div>
        </section>

        <LargeCard img={banner}
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb.'
          buttonText='Get Inspired'
        ></LargeCard>
      </main>
      <Footer></Footer>
    </div>
  );
}
