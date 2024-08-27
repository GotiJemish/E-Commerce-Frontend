import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Career from "./pages/Career";
import FAQS from "./pages/FAQS";
import Help from "./pages/Help";
import Register from "./pages/authentication/register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/authentication/login";
import ProtectedRoute from "./components/routs/protectedRoutes";
import ForgetPassword from "./pages/authentication/forgetpassword";
import OtpVarify from "./pages/authentication/otpvarification";
import ResetPassword from "./pages/authentication/resetpassword";
import AdminRoute from "./components/routs/adminRoutes";
import AdminHomepage from "./pages/admin/adminHome";
import AddCategory from "./pages/admin/addCategory";
import AddProduct from "./pages/admin/addProduct";
import UsersList from "./pages/admin/usersList";
import UserHome from "./pages/user/userHome";
import UserOrder from "./pages/user/userOrder";
import UserProfile from "./pages/user/userProfile";
import Extra from "./pages/admin/extra";
import ProductsList from "./pages/admin/productsList";
import UpdateProduct from "./components/admin/Product-update";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/forget-password" element={<ForgetPassword />} />

        <Route path="/otp-varification" element={<OtpVarify />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />

        <Route path="/career" element={<Career />} />
        <Route path="/faqs" element={<FAQS />} />

        <Route path="/help" element={<Help />} />

        {/* protected routs for users */}
        <Route path="/user-dashboard" element={<ProtectedRoute />}>
          <Route path="" element={<UserHome />} />
          <Route path="/user-dashboard/user-orders" element={<UserOrder />} />
          <Route
            path="/user-dashboard/user-profile"
            element={<UserProfile />}
          />
        </Route>

        <Route path="/admin-dashboard" element={<AdminRoute />}>
          <Route path="" element={<AdminHomepage />} />
          <Route
            path="/admin-dashboard/add-category"
            element={<AddCategory />}
          />
          <Route path="/admin-dashboard/add-product" element={<AddProduct />} />
          <Route path="/admin-dashboard/user-list" element={<UsersList />} />
          <Route
            path="/admin-dashboard/products-list"
            element={<ProductsList />}
          />
                  
                  <Route path="/admin-dashboard/update-product/:productslug" element={<UpdateProduct />} />
          <Route path="/admin-dashboard/extra" element={<Extra />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// import * as React from 'react';
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';

// export default function OutlinedAlerts() {
//   return (
//     <Stack sx={{ width: '100%' }} spacing={2}>
//       <Alert variant="outlined" severity="success">
//         This is an outlined success Alert.
//       </Alert>
//       <Alert variant="outlined" severity="info">
//         This is an outlined info Alert.
//       </Alert>
//       <Alert variant="outlined" severity="warning">
//         This is an outlined warning Alert.
//       </Alert>
//       <Alert variant="outlined" severity="error">
//         This is an outlined error Alert.
//       </Alert>
//     </Stack>
//   );
// }
