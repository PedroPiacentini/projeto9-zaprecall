import Header from './components/Header';
import cards from './cards';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Header />
      <Main cards={cards} setCounter={setCounter} counter={counter} />
      <Footer cards={cards} counter={counter} />
    </>
  )
}


