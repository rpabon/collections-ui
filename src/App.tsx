import React from 'react';
import { SideBar } from './components/SideBar/SideBar';
import { CollectionTitle } from './components/CollectionTitle/CollectionTitle';
import { CollectionItems } from './components/CollectionItems/CollectionItems';

function App() {
  return (
    <main>
      <SideBar />

      <section className="main-layout">
        <CollectionTitle />
        <CollectionItems />
      </section>
    </main>
  );
}

export default App;
