import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { EndUserPolicy } from "./pages/EndUserPolicy/EndUserPolicy";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService/TermsOfService";
import { SatisProLanding } from "./screens/SatisProLanding/SatisProLanding";

export const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SatisProLanding />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/end-user-policy" element={<EndUserPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};