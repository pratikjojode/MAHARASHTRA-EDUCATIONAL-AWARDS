// pages/Home.jsx
import React from "react";
import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import EventInfo from "../component/EventInfo/EventInfo";
import Overview from "../component/Overview/Overview";
import ChiefGuest from "../component/Chief-Guest/Chief-Guest";
import Sponsors from "../component/Sponsors/Sponsors";
import Categories from "../component/Categories/Categories";
import Jobizza from "../component/Jobizza/Jobizza";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/Navbar";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <EventInfo />
      <Overview />
      <ChiefGuest />
      <Sponsors />
      <Categories />
      <Jobizza />
      <Footer />
    </div>
  );
};

export default Home;
