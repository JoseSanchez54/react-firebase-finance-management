import { BrowserRouter, Routes, Route } from "react-router-dom";
import useUser from "./hooks/useUser";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import SectionType from "./components/SectionType";
import SectionSummary from "./components/SectionSummary";

export default function App() {
  const user = useUser(),
    isUserSignedIn = user !== null;
  return (
    <BrowserRouter>
      <Header />

      <main>
        <h1 className="txt-center">Gestor patrimonial Beta 0.1.0</h1>

        {isUserSignedIn ? (
          <Routes>
            <Route
              path="/"
              element={[
                <SectionType type="fun" />,
                <SectionType type="life" />,
                <SectionType type="rent" />,
              ]}
            />
            <Route
              path="/investments"
              element={[
                <SectionType type="investments" />,
                <SectionType type="roi" />,
              ]}
            />
            <Route
              path="/earnings"
              element={[
                <SectionType type="earnings" />,
                <SectionType type="job" />,
              ]}
            />
            <Route path="/bank" element={<SectionType type="bank" />} />
            <Route path="/summary" element={<SectionSummary />} />
            <Route
              path="/*"
              element={
                <h1 className="txt-center">404 Error - Page Not Found</h1>
              }
            />
          </Routes>
        ) : (
          <p className="txt-center">Entra con tu cuenta de google</p>
        )}
      </main>

      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
}
