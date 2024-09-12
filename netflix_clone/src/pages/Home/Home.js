import React from "react";
import Header from "../../componets/Header/Header.js";
import Footer from "../../componets/Footer/Footer.js";
import Banner from "../../componets/Banner/Banner.js";
import RowList from "../../componets/Rows/RowList.js";
function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}
export default Home;
