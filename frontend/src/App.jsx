import './App.css';
import NavBar from "./components/navbar/index";
import Footer from "./components/footer";
import Home from "./pages/home";
import PlantTypePage from "./pages/planTypePage";
import SpeciesListPage from './pages/speciesListPage';
import SpeciesPage from './pages/speciesPage';
import Dashboard from './pages/dashboard/dashboard2';
import ProtectedRoute from './components/protectedRoute';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bug from './pages/bug';
import GroupsListPage from './pages/groupsListPage';
import GetTemplate from './pages/addNewSpecies/getTemplatePage';

export default function App() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>

                    {/* 
                    Tạm thời điều hướng trang chủ là danh sách giống cây đậu
                    <Route path='/' element={<Home />} /> 
                    */}
                    
                    <Route path='/' element={<Navigate to="/species-type/1" replace />} />

                    <Route path='/get-template' element={<GetTemplate />} />

                    <Route path='/groups' element={<GroupsListPage />} />
                    <Route path='/bug' element={<Bug />} />
                    <Route path='/group/:groupID' element={<PlantTypePage />} />
                    <Route path='/species-type/:typeID' element={<SpeciesListPage />} />
                    {/* <Route path='/species/:speciesID' element={<SpeciesPage />} /> */}
                    <Route path='/login' element={<Login />} />
                    <Route path='/species/:speciesID' element={<SpeciesPage />} />

                    {/* Cần đăng nhập mới được phép:
                        1. Xem thông tin cây trồng 
                    <Route 
                        path='/species/:speciesID'
                        element={
                            <ProtectedRoute>
                                <SpeciesPage />
                            </ProtectedRoute>
                        }
                    />
                    */}

                    {/* Cần admin mới được phép:
                        1. Truy cập dashboard */}

                    <Route 
                        path='/dashboard'
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
                <ToastContainer />
            </Router>
            <Footer />
        </div>
    )
} 