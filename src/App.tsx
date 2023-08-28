// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './App.css';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import Footer from 'components/footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from 'components/about/About';

// function User({ member }: any) {
//   return (
//     <div>
//       <b>{member.name}</b> <span>({member.id})</span>
//     </div>
//   );
// }

function App() {
  // script 
  // const [member, setMember] = useState<any>();

  // useEffect(() => {
  //   axios.get('/api/member').then((res) => setMember(res))
  //   .catch(e => console.log(e));
  // }, []);

  // dom
  // const memberList = member.map((m: any) => <p>{m.name}</p>);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" Component={About} />
      </Routes>
      {/* { memberList } */}
      <Main />
      <Footer />
    </div>
  );
}

export default App;


