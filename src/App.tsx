import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import VerifyAccount from "./pages/AuthPages/VerifyAccount";
import ResetCode from "./pages/AuthPages/ResetCode";
import NewPassword from "./pages/AuthPages/NewPassword";
import StockOverview from "./pages/inventory/Innerpage/StockOverview";
import InventoryLayout from "./pages/inventory/InventoryLayout";
import ReorderSuggestion from "./pages/inventory/Innerpage/ReorderSuggestion";
import StockTransfer from "./pages/inventory/Innerpage/StockTransfer";
import AuditLog from "./pages/inventory/Innerpage/AuditLog";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Inventory Routes */}
            <Route path="/inventoryManagement" element={<InventoryLayout />}>
              <Route index element={<StockOverview />} /> {/* Default route */}
              <Route path="stock-overview" element={<StockOverview />} />
              <Route
                path="reorder-suggestion"
                element={<ReorderSuggestion />}
              />
              <Route path="stock-transfer" element={<StockTransfer />} />
              <Route path="audit-log" element={<AuditLog />} />
            </Route>

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verifyAccount" element={<VerifyAccount />} />
          <Route path="/resetCode" element={<ResetCode />} />
          <Route path="/newPassword" element={<NewPassword />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
