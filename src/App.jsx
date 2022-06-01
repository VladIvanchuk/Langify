import React from "react";
import Main from "./Main/Main";
import News from "./News/News";
import Login from "./Login/Login";
import Contacts from "./Contacts/Contacts";
import Teachers from "./Teachers/Teachers";
import Courses from "./Courses/Courses";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/langify" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
