import React from 'react';
import { SideBar } from './components/SideBar/SideBar';
import { CollectionTitle } from './components/CollectionTitle/CollectionTitle';
import { CollectionItems } from './components/CollectionItems/CollectionItems';

function App() {
  return (
    <>
      <SideBar />

      <section className="main-layout">
        <CollectionTitle />
        <CollectionItems />
      </section>
    </>
  );
}

export default App;
