import Form from "./components/Form";
import Welcome from "./components/Welcome";
import Thankyou from "./components/Thankyou";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      
      <Routes>
        <Route exact path='/' element={<Welcome/>}></Route>
        <Route exact path='/form' element={<div className="h-screen">
        <Form name="Android Developer" />
      </div>}></Route>
      <Route exact path='/end' element={<Thankyou/>}></Route>
      </Routes>
    </Router>

    
  );
}

export default App;
