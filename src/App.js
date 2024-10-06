import React, { useState, useEffect } from "react";
import "./App.css";
import PartList from "./PartList";
import Avatar from "./Avatar";

function App() {
  const [avatar, setAvatar] = useState([
    {
      cat: "body",
      subcat: "",
      image: 1,
      z_index: 0,
    },
    {
      cat: "eyes",
      subcat: "",
      image: 1,
      z_index: 1,
    },
    {
      cat: "hair",
      subcat: "",
      image: 1,
      z_index: 2,
    },
    {
      cat: "mouths",
      subcat: "",
      image: 1,
      z_index: 3,
    },
    {
      cat: "noses",
      subcat: "",
      image: 1,
      z_index: 4,
    },
    {
      cat: "eyebrows",
      subcat: "",
      image: 1,
      z_index: 5,
    },
    {
      cat: "glasses",
      subcat: "accessories",
      image: 1,
      z_index: 6,
    },
    {
      cat: "layer_1",
      subcat: "clothes",
      image: 1,
      z_index: 7,
    },
    {
      cat: "layer_2",
      subcat: "clothes",
      image: 1,
      z_index: 8,
    },
    {
      cat: "layer_3",
      subcat: "clothes",
      image: 1,
      z_index: 9,
    },
  ]);

  const collections = [
    {
      title: "Body",
      cat: "body",
      subcat: "",
      ids: Array.from(Array(17), (_, i) => i + 1),
      height: 60,
      top: "50%",
    },
    {
      title: "Eyes",
      cat: "eyes",
      subcat: "",
      ids: Array.from(Array(24), (_, i) => i + 1),
      height: 150,
      top: "35px",
    },
    {
      title: "Hair",
      cat: "hair",
      subcat: "",
      ids: Array.from(Array(73), (_, i) => i + 1),
      height: 60,
      top: "50%",
    },
    {
      title: "Mouths",
      cat: "mouths",
      subcat: "",
      ids: Array.from(Array(24), (_, i) => i + 1),
      height: 120,
      top: "50%",
    },
    {
      title: "Eyebrows",
      cat: "eyebrows",
      subcat: "",
      ids: Array.from(Array(15), (_, i) => i + 1),
      height: 60,
      top: "50%",
    },
    {
      title: "Glasses",
      cat: "glasses",
      subcat: "accessories",
      ids: Array.from(Array(15), (_, i) => i + 1),
      height: 60,
      top: "50%",
    },
    {
      title: "Clothing (L1)",
      cat: "layer_1",
      subcat: "clothes",
      ids: Array.from(Array(5), (_, i) => i + 1),
      height: 60,
      top: "50%",
    },
    {
      title: "Clothing (L2)",
      cat: "layer_2",
      subcat: "clothes",
      ids: Array.from(Array(5), (_, i) => i + 1),
      height: 60,
      top: "50%",
    },
    {
      title: "Clothing (L3)",
      cat: "layer_3",
      subcat: "clothes",
      ids: Array.from(Array(9), (_, i) => i + 1),
      height: 120,
      top: "-15px",
    },
  ];

  useEffect(() => {
    handleRandomize();
  }, []);

  const handleClickPart = (cat, image) => {
    const position = avatar.findIndex((item) => item.cat === cat);
    const newPart = avatar.filter((item, index) => index === position)[0];
    newPart.image = image;
    avatar[position] = newPart;
    const newAvatar = [...avatar];
    setAvatar(newAvatar);
  };

  const handleRandomize = () => {
    const randomPart = [];
    collections.map((el, index) => {
      randomPart[index] = el.ids[Math.floor(Math.random() * el.ids.length)];
    });
    randomPart.splice(4, 0, 1); // Add noses to the avatar index #4 with default value=1
    const newAvatar = avatar.map((el, index) => {
      el.image = randomPart[index];
      return el;
    });
    setAvatar(newAvatar);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>CHARACTER</h1>
        <h2>🛠️CUSTOMIZATION🛠️</h2>
        <span className="divider"></span>
      </div>
      <div className="main">
        <div className="avatar-wrapper">
          <div className="avatar-group">
            <Avatar avatar={avatar} />
            <button className="random-btn" onClick={handleRandomize}>
              RANDOMIZE
            </button>
          </div>
        </div>
        <div className="settings">
          {collections.map((item, index) => {
            return (
              <PartList
                key={`${item.cat}_${index}`}
                part={item}
                handleClickPart={handleClickPart}
                selectedPart={
                  avatar[avatar.findIndex((el) => el.cat === item.cat)].image
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
