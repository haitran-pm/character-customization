import React, { useState, useEffect } from "react";
import "./App.css";
import PartList from "./components/PartList";
import Avatar from "./components/Avatar";
import Header from "./components/Header";

const preset = {
  body: {
    title: "Body",
    folder: "./character/body/",
    length: 17,
    height: 60,
    top: "50%",
  },
  eyes: {
    title: "Eyes",
    folder: "./character/eyes/",
    length: 24,
    height: 150,
    top: "35px",
  },
  hair: {
    title: "Hair",
    folder: "./character/hair/",
    length: 73,
    height: 60,
    top: "50%",
  },
  mouths: {
    title: "Mouths",
    folder: "./character/mouths/",
    length: 24,
    height: 120,
    top: "50%",
  },
  eyebrows: {
    title: "Eyebrows",
    folder: "./character/eyebrows/",
    length: 15,
    height: 60,
    top: "50%",
  },
  glasses: {
    title: "Glasses",
    folder: "./character/accessories/glasses/",
    length: 15,
    height: 60,
    top: "50%",
  },
  layer_1: {
    title: "Clothing (L1)",
    folder: "./character/clothes/layer_1/",
    length: 5,
    height: 60,
    top: "50%",
  },
  layer_2: {
    title: "Clothing (L2)",
    folder: "./character/clothes/layer_2/",
    length: 5,
    height: 60,
    top: "50%",
  },
  layer_3: {
    title: "Clothing (L3)",
    folder: "./character/clothes/layer_3/",
    length: 9,
    height: 60,
    top: "-15px",
  },
};

function App() {
  const [avatar, setAvatar] = useState({
    body: {
      folder: "./character/body/",
      image: 1,
      z_index: 0,
    },
    eyes: {
      folder: "./character/eyes/",
      image: 1,
      z_index: 1,
    },
    hair: {
      folder: "./character/hair/",
      image: 1,
      z_index: 2,
    },
    mouths: {
      folder: "./character/mouths/",
      image: 1,
      z_index: 3,
    },
    noses: {
      folder: "./character/noses/",
      image: 1,
      z_index: 4,
    },
    eyebrows: {
      folder: "./character/eyebrows/",
      image: 1,
      z_index: 5,
    },
    glasses: {
      folder: "./character/accessories/glasses/",
      image: 1,
      z_index: 6,
    },
    layer_1: {
      folder: "./character/clothes/layer_1/",
      image: 1,
      z_index: 7,
    },
    layer_2: {
      folder: "./character/clothes/layer_2/",
      image: 1,
      z_index: 8,
    },
    layer_3: {
      folder: "./character/clothes/layer_3/",
      image: 1,
      z_index: 9,
    },
  });

  useEffect(() => {
    handleRandomize();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClickPart = (cat, image) => {
    const newAvatar = { ...avatar };
    newAvatar[cat].image = image;
    setAvatar(newAvatar);
  };

  const handleRandomize = () => {
    const newAvatar = { ...avatar };
    Object.entries(preset).forEach(([cat, values]) => {
      newAvatar[cat].image = Math.ceil(Math.random() * values.length);
    });
    setAvatar(newAvatar);
  };

  return (
    <div className="container">
      <Header />
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
          {Object.entries(preset).map(([cat, values]) => {
            return (
              <PartList
                key={`${cat}`}
                part={{ cat, ...values }}
                handleClickPart={handleClickPart}
                selectedPart={avatar[cat].image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
