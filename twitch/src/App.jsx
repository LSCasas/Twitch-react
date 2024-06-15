import React from 'react';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import Filter from './components/Filter';
import Content from './components/Content';
import Aside from './components/Aside'; // Asegúrate de importar Aside desde su ubicación correcta

export default function App() {
  return (
    <main className="w-full min-h-screen p-4 grid gap-8 md:grid-cols-[25%_1fr] md:grid-rows-[auto_1fr]">
      <NavBar className="md:col-span-2" />
      <div className="md:hidden">
        <Categories />
        <Filter />
      </div>
      <div className="hidden md:block">
        <Aside />
      </div>
      <Content />
    </main>
  );
}

