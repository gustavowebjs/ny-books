import "./index.css";
import { Layout } from "./components";
import { routes } from "./config/routes";
import { Route, Routes } from "react-router-dom";
import { QueryProvider } from "./providers/QueryProvider";

function App() {
  return (
    <QueryProvider>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Layout>
    </QueryProvider>
  );
}

export default App;
