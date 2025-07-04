import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Header from './Header'
import Spinner from './Spinner';
import EventDetails from './EventDetail';
import ReservationForm from './ReservationForm';
import EventPlan from './EvenPlan';
import Test from './Test';
import ConferenceRoom from './ConferenceRoom ';
import TestApi from './TestApi';


const Event = lazy(() => import('./Event'));  
const Footer = lazy(() => import('./Footer')); 



function App() {
  return (
    <Router basename="/PGparks">
    <div className="container-fluid">
      <Header />
      <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:slug" element={<EventDetails />} />
        <Route path="/reservation" element={<EventPlan />} />
        <Route path="/reservation/form" element={<ReservationForm />} />
        <Route path="/test" element={<Test />} />
        <Route path="/reservation/book" element={<ConferenceRoom />} />
        <Route path="/api" element={<TestApi/>} />
      </Routes>
    </Suspense>
    <Suspense fallback={<div> Loding Footer...</div>}>
   <Footer />
   </Suspense>
    </div>
     </Router>
  );
}

export default App;
