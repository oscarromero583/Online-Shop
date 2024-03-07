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
                        <Product
                            id = "123"
                        title = "Lorem jr oho ojvhvr ijvh kjfhvi ijks iuh sir siuvhsi ihvve sjhvnir sijb si shjb iuhb sjbsfh  siubsi siujfbv ijbsuhsb s isi sis is  "
                       price = {11.93}
                        rating = {5}
                        image = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/22/545695/1.jpg?0441"
                        />
                        <Product
                        id = "124"
                        title = "jh bierhrbfjvhbe erivieriueis rrheiw rwbir wijbvrie ejvejber ekjbrvkwre er ejbviee ekjbe "
                        price = {14.6}
                        rating = {4}
                        image = "https://media.cnn.com/api/v1/images/stellar/prod/211020125715-bagorgleadcadence.jpg?q=x_0,y_0,h_1406,w_2500,c_fill"
                        />
                    </div>

                    <div className="home_row">
                        <Product
                            id = "125"
                            title = "jhcb be wiriwr wijcwiruw wijwir wiviru wijcir wijibviur wjbirue eijrue eiuciiaiq"
                            price = {199.6}
                            rating = {4}
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgphO0YJkDjT3VPxbsje7WZ8ZfXmtxSkYPCQ&usqp=CAU"
                        />
                        <Product
                            id = "126"
                            title = "riuhwur rhouek ennekjhf elkjruhlqrvbri rhwlr whhlfr oroihr rorhwocpwjc oih woihcw "
                            price = {5.2}
                            rating = {4}
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHi3O2Re3lMupKHwOjjNl4fp48UXj-cRy_Ig&usqp=CAU"
                        />
                        <Product
                            id = "127"
                            title = "jhb  jhcihr ijbi i jhw wiuwiuwrh ijrb i ihb wibiwrw wkkrn wbwirj ihviwru w owirhw owhkwvwir owoicru owrpwipr "
                            price = {27.8}
                            rating = {3}
                            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqFxa99NNPLTSwmVnhZJFnf0MCmUkh2FqRg&usqp=CAU"
                        />
                    </div>

                    <div className="home_row">
                        <Product
                            id = "128"
                            title = "vkb kjkjn kjkjkjb kkjh jkhrci ieriuhe 8 evh iehvn i iee ier ekjhiesjrhvb ijkbv iu ikjhhi uhviwi iuhi i iu i "
                            price = {14.6}
                            rating = {4}
                            image = "https://digi2l.in/wp-content/uploads/2023/05/television-houseplants-room-scene-generative-ai-jpg.webp"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
