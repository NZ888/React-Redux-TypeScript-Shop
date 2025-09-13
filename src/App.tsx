import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes.tsx";

interface AppProps {
  
}

const App: React.FC<AppProps> = ({  }) => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
