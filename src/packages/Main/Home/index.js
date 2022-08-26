import React from "react";

import Nav from "./Nav";
import Banner from "./Banner";


const Home = () => {
  return (
    <div>
      <Nav />
      <Banner
        id="Banner0_0"
        key="Banner0_0"
        // dataSource={Banner00DataSource}
        isMobile={false}
      />
    </div>
  )
}

export default Home