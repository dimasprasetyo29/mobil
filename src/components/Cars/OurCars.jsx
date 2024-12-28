import React from "react";
import CarsCard from "./CarsCard";
import mobil1 from "/src/assets/img/corvette.jpg";
import car2 from "/src/assets/img/bmw.jpg";
import car1 from "/src/assets/img/pagani.jpg";

const OurCars = () => {
  const carsData = [
    {
      id: 0,
      img: mobil1,
      name: "corvette",
      price: "22,440",
    },
    {
      id: 1,
      img: car2,
      name: "BMW 3 Series",
      price: "34,666",
    },
    {
      id: 2,
      img: car1,
      name: "pagani",
      price: "22,220",
    },
    {
      id: 3,
      img: car2,
      name: "BMW M4 ",
      price: "55,440",
    },
    {
      id: 4,
      img: car1,
      name: "koenigseeg",
      price: "65,340",
    },
    {
      id: 5,
      img: car2,
      name: " Sport car",
      price: "77,340",
    },
    {
      id: 6,
      img: mobil1,
      name: "LA ferrari",
      price: "22,340",
    },
    {
      id: 7,
      img: car1,
      name: "Sedan Sport",
      price: "65,340",
    },
    {
      id: 8,
      img: mobil1,
      name: "Police car",
      price: "75,340",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-purple-700 to-black text-white" style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>
          our <span style={styles.highlight}>cars</span>
        </h1>
      </div>
      <div style={styles.grid}>
        {carsData.map((item) => (
          <CarsCard
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Roboto', sans-serif",
    minHeight: "100vh", // Ensures the container takes up full height
  },
  header: {
    textAlign: "center",
    marginBottom: "50px", // Increased margin-bottom for more space after the title
    paddingTop: "60px", // Increased padding-top to move content further down
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#fff",
  },
  highlight: {
    color: "#00796b", // Teal color to match the theme
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    paddingTop: "30px", // More padding at the top of the grid
  },
};

export default OurCars;
