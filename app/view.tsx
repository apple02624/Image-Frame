"use client";

import { NextPage } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Description from "../components/Description";
import ImageFrame from "../components/ImageFrame";
import { ReactNode, createContext, useContext, useState } from "react";

export const PositionContext = createContext({
  x: 0,
  y: 0,
  setX: (x: number) => {},
  setY: (y: number) => {},
});

interface PositionProviderProps {
  children: ReactNode;
}

export const PositionProvider: React.FC<PositionProviderProps> = ({ children }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  return (
    <PositionContext.Provider value={{ x, y, setX, setY }}>
      {children}
    </PositionContext.Provider>
  );
};
const View: NextPage = () => {
  const images = ["img/Blockchain.jpg"];
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <PositionProvider>
        <Header />
        <div className="relative flex-1 py-10 px-4">
          <ImageFrame images={images} />
          <Description
            title="BlockChain Symbol Image"
            description="Blockchain is the technology that enables the existence of cryptocurrency (among other things). Bitcoin is the name of the best-known cryptocurrency, the one for which blockchain technology, as we currently know it, was created."
          />
        </div>
        <Footer />
      </PositionProvider>
    </div>
  );
};

export default View;
