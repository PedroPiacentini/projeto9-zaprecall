import Header from './components/Header';
import cards from './cards';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Main cards={cards} />
      <Footer cards={cards} />
    </>
  )
}


