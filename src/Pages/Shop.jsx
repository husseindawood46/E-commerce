import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewColections from "../components/NewCollections/NewColections";
import NewsLetter from "../components/NewsLetter/NewsLetter";

export default function Shop() {
  return <div >
    <Hero/>
    <Popular/>
    <Offers/>
    <NewColections/>
    <NewsLetter/>
  </div>;
}
