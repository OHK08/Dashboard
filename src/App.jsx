// import React from 'react';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import { AuthProvider } from './users/AuthContext';
// import ProtectedRoute from './users/ProtectedRoute';
// import About from './users/About';
// import Contact from './users/Contact';
// import UserProfile from './users/UserProfile';
// import Login from './users/Login';
// import Signup from './users/Signup';
// import History from './users/History';
// import Team from './users/Team';

// export default function App() {
//     return (
//             <AuthProvider>
//                 <Routes>
//                     <Route path='/signup' element={<Signup />} />
//                     <Route path='/login' element={<Login />} />

//                     {/* Nested Routes */}
//                     <Route path="/about" element={<About />}>
//                         <Route path="history" element={<History />} />
//                         <Route path="team" element={<Team />} />
//                     </Route>

//                     {/* Protected Routes */}
//                     <Route path="/contact" element={
//                         <ProtectedRoute>
//                             <Contact />
//                         </ProtectedRoute>
//                     } />

//                     <Route path="/profile" element={
//                         <ProtectedRoute>
//                             <UserProfile />
//                         </ProtectedRoute>
//                     } />
//                 </Routes>
//             </AuthProvider>
//     );
// }




// import React, {useState} from 'react';
// import {Routes, Route, BrowserRouter} from 'react-router-dom';

// import { AuthProvider } from './users/AuthContext';
// import DashboardPage from './ExampleAuthContext/DashboardPage';

// import Admin from './Admin';
// import DarkModeToggle from './demo/DarkModeToggle';
// import ArrayExample1 from './demo/ArrayExample1';
// import StudentList from './demo/StudentList';
// import StudentData from './studentDetails/StudentData';
// import EmployeeData from './demo/EmployeeData';
// import StudentData from './studentDetails/StudentData';
// import StudentData from './studentInformation/StudentData';
// import Form from './form/Form';
// import UserMain from './UserInformation/UserMain';
// import FormMain from './form/FormMain';
// import PlanetData from './planets/PlanetData';

// import CompanyData from './companyForm/CompanyData';
// import CompanyTable from './companyForm/CompanyTable';
// import CompanyUserProfile from './companyForm/CompanyUserProfile';


// import About from './users/About';
// import Contact from './users/Contact';
// import UserProfile from './users/UserProfile';
// import Login from './users/Login';
// import Signup from './users/Signup';
// import History from './users/History';
// import Team from './users/Team';

// export default function App() {
//   return (
//     <>
//   <DemoCompo/>
//   <HelloClass />

{/* <ArrayExample1 /> */ }
{/* <Admin /> */ }
{/* <DarkModeToggle/> */ }
{/* <StudentData/> */ }
{/* <StudentList/> */ }
{/* <FilterArray/> */ }
{/* <EmployeeData/> */ }
{/* <StudentData/> */ }
{/* <StudentData/> */ }
{/* <Form/> */ }
{/* <UserMain/> */ }
{/* <FormMain/> */ }
{/* <PlanetData/> */ }
{/* <CompanyData /> */ }
{/* <AuthProvider>
        <Routes>
          <Route path='/signup' element={<Signup />} /> 
          <Route path='/login' element={<Login />} /> 
          <Route path="/about" element={<About />}> 
            <Route path="history" element={<History/>}/>
            <Route path="team" element={<Team/>}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </AuthProvider> */}

{/* <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='dashboard' 
            element={
              <ProtectedRoute>
                <DashboardPage/>
              </ProtectedRoute>
            }/>
          </Routes>
        </BrowserRouter>
      </AuthProvider> */}

//     </>
//   );
// }



import DemoCompo from './classcomponents/DemoCompo';
import HelloClass from './classcomponents/HelloClass';
import ToggleMood from './classcomponents/ToggleMood';
import Timer from './classcomponents/Timer';
import Counter from './classcomponents/Counter';

export default function App() {
  return (
    <>
      <DemoCompo />
      <HelloClass />
      <br />
      <br />
      <ToggleMood />
      <br />
      <br />
      <br />
      <Timer />
      <br />
      <br />
      <Counter />
    </>
  );
}