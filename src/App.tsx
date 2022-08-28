import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import routes from './routes';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          {routes.map(route => (
            <Route key={route.key} path={route.path} element={route.component}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
