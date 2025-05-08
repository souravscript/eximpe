import './App.css';
import Header from './components/layout/Header';
import AppRoutes from './routes/AppRoutes';


function App() {
 return (
   <div className="app-container">
     <Header />
     <main className="container mx-auto p-4">
       <AppRoutes />
     </main>
   </div>
 );
}


export default App;