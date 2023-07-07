import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
// import TableCustomer from './pages/PagesTablePelanggan';
import TablePelanggan from './component/TablePelanggan';
import NavigationDashboard from './component/navbar/navigation';
import PageHome from './pages/PageHome';
import PageKaryawan from './pages/PageKaryawan';

//
import RegisterPage from '../src/pages/RegisterPage';
import LoginPage from '../src/pages/LoginPage';
import { getUserLogged, putAccessToken } from '../src/utils/api';

import './style/style.css';

// class component
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       authedUser: null,
//     };
//     this.onLoginSuccess = this.onLoginSuccess.bind(this);
//   }

//   async onLoginSuccess({ accessToken }) {
//     putAccessToken(accessToken);
//     const { data } = await getUserLogged();

//     this.setState(() => {
//       return {
//         authedUser: data,
//       };
//     });
//   }

//   render() {
//     if (this.state.authedUser === null) {
//       return (
//         <Container>
//           <main>
//             <Routes>
//               <Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
//               <Route path='/registrasi' element={<RegisterPage />} />
//             </Routes>
//           </main>
//         </Container>
//       );
//     }
//     return (
//       <Container>
//         <header>
//           <NavigationDashboard />
//         </header>
//         <main>
//           <Routes>
//             <Route path='/' element={<PageHome />} />
//             <Route path='/datacustomer' element={<TablePelanggan />} />
//             <Route path='/datakaryawan' element={<PageKaryawan />} />
//           </Routes>
//         </main>
//       </Container>
//     );
//   }
// }

// functional component
function App() {
  const [authedUser, setauthedUser] = React.useState(null);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setauthedUser(data);
  };

  if (authedUser === null) {
    return (
      <div>
        <Container>
          <main>
            <Routes>
              <Route path='/' element={<LoginPage loginSuccess={onLoginSuccess} />} />
              <Route path='/registrasi' element={<RegisterPage />} />
            </Routes>
          </main>
        </Container>
      </div>
    );
  }

  return (
    <Container>
      <header>
        <NavigationDashboard />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<PageHome />} />
          <Route path='/datacustomer' element={<TablePelanggan />} />
          <Route path='/datakaryawan' element={<PageKaryawan />} />
        </Routes>
      </main>
    </Container>
  );
}

export default App;
