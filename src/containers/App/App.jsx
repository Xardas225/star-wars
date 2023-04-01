// Library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@routes/routesConfig";
// Components
import Header from "../Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        {routes.map((route, index) => {
          return <Route
            key={index}
            path={route.path}
            element={route.element}
            exact={route.exact}
          />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
