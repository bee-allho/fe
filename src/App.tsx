import Header from 'components/header/Header';
import './App.css';
import Main from 'components/main/Main';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from 'components/footer/Footer';

const redirectToMainPage = () => {
  if (false) {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/" />;
  }
};

function App() {
  return (
    <>
    <Header />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={redirectToMainPage()} />
      <Route path="/*" element={<Main />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;


