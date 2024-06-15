import React from "react";
import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Categories from "./components/Categories";
import Filter from "./components/Filter";
import Content from "./components/Content";

export default function App() {
  return (
    <main className="w-full min-h-screen p-4 grid grid-cols-1 md:grid-cols-[25%_1fr] grid-rows-[auto_1fr] gap-y-8">
      <NavBar className="col-span-2" />
      {/* Ocultar el Aside en dispositivos pequeños (móviles) */}
      <Aside className="hidden md:block" />
      <div className="">
        <Categories />
        <Filter />
        <Content />
      </div>
    </main>
  );
}




