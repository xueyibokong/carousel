import React from "react";
import "./App.css";
import Carousel from "./components/Carousel/index";

function App() {
    return (
        <div className="App">
            <Carousel
                animatDuration={300}
                overDuration={3000}
                list={[
                    {
                        title: "Tablet",
                        dis: "这个手机售价$399",
                        img: require("./assets/tablet.png").default,
                        bgColor: "#ccc",
                        color: "black",
                        jumpUrl: "http://www.baidu.com"
                    },
                    {
                        title: "XPhone",
                        dis: "这个手机售价$399",
                        img: require("./assets/iphone.png").default,
                        bgColor: "#aaa",
                        color: "white",
                        jumpUrl: "http://www.baidu.com"
                    },
                    {
                        title: "airpods",
                        dis: "这个手机售价$399",
                        img: require("./assets/airpods.png").default,
                        bgColor: "#eee",
                        color: "black",
                        jumpUrl: "http://www.baidu.com"
                    },
                ]}
            />
        </div>
    );
}

export default App;
