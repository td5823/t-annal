import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "300px",
  paddingInline: 100,
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
};

const App: React.FC = () => (
  <Carousel autoplay style={{ margin: 0 }}>
    <div>
      <h3 style={contentStyle}>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          style={{ objectFit: "cover", width: 500, height: 300 }}
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      </h3>
    </div>
  </Carousel>
);

export default App;
