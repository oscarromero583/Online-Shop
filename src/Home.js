import React from "react";
import "./Home.css";
import Product from "./Product";
import RomeroImage from "./Romero.png";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="home_container">
                    <img src={RomeroImage} alt="Home Image" className="home_image"/>

                    <div className="home_row">
                        <Product />
                        <Product />
                    </div>

                    <div className="home_row">
                        <Product />
                        <Product />
                        <Product />
                    </div>

                    <div className="home_row">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
