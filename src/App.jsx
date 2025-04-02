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
import Header from './classcomponents/Header';
import Content from './classcomponents/Content';
import { DarkModeProvider } from './classcomponents/DarkModeContext';
import ExpensiveCalculationDemo from './ExpensiveCalculationDemo';
import UserCrud from './UserCrud';
import ExampleUseMemo from './ExampleUseMemo';
import Memo_Effect from './Memo_Effect';
import CombinedHooksDemo from './CombinedHooksDemo';
import ExampleUseCallback from './ExampleUseCallback';

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
      <br />
      <br />
      <DarkModeProvider>
        <Header />
        <Content />
      </DarkModeProvider>
      <br />
      <br />
      <UserCrud />
      <br />
      <br />
      <br />
      <ExpensiveCalculationDemo data={['apple', 'banana', 'cherry', 'orange', 'grapes', 'berry']} />
      <ExampleUseMemo a={5} b={10} />
      <br />
      <br />
      <br />
      <Memo_Effect />
      <br />
      <br />
      <br />
      <CombinedHooksDemo />
      <br />
      <br />
      <br />
      <ExampleUseCallback />
    </>
  );
}



// useReducer in reactjs 
// import { useReducer } from 'react';
// function reducer(state, action) {
//   switch (action.type) {
//     case 'NEXT_PAGE':
//       return {
//         count: state.count + 1,
//         pageName: `Page ${state.count + 1}`
//       };
//     case 'PREVIOUS_PAGE':
//       return {
//         count: state.count > 1 ? state.count - 1 : 1,
//         pageName: `Page ${state.count > 1 ? state.count - 1 : 1}`
//       };
//     default:
//       return state;
//   }
// }
// function App() {
//   const initialState = { count: 1, pageName: 'Page 1' };
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1>Page Counter</h1>
//       <p>Current Page: {state.pageName}</p>
//       <p>Page Number: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'PREVIOUS_PAGE' })}>
//         Previous
//       </button>
//       <button onClick={() => dispatch({ type: 'NEXT_PAGE' })}>
//         Next
//       </button>
//     </div>
//   );
// }
// export default App;