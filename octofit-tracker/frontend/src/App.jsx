import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <main className="container py-5">
      <div className="p-5 bg-light rounded-3">
        <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
        <p className="lead">
          A modern multi-tier fitness tracker for teams, workouts, and leaderboards.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
