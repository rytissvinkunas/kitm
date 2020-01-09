import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App container">
      {/* <header className="row bg-info p-2"> */}
        <Header />
      {/* </header> */}
      <nav className="row bg-warning p-2">
        <Nav />
      </nav>
      <main className="row bg-light">
        <Main />
      </main>
      <footer className="row bg-info p-2">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
