import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@routes/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <React.Suspense fallback="Loading. . .">
              <Home />
            </React.Suspense>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
