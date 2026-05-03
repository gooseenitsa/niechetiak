import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home, About, NotFound } from "./pages/core";
import { Rooms, RoomDetail, Booking } from "./pages/rooms";
import { Services, Gallery, Offers } from "./pages/features";
import { Login, Signup, Account } from "./pages/auth";
import { UIKit } from "./pages/uikit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:roomId" element={<RoomDetail />} />
          <Route path="booking" element={<Booking />} />
          
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="offers" element={<Offers />} />
          
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account" element={<Account />} />
          
          <Route path="ui-kit" element={<UIKit />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
