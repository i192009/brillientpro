import Navbar from './Navbar';
import {  BrowserRouter as Router,Routes , Route } from 'react-router-dom';
import Course from './Course';
import CourseDetails from './CourseDetails';
import NotFound from './NotFound';
import DashBoard from './DashBoard';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Count from './Count';
import DropCourse from './DropCourse';
import Course2 from './Course2';


function App() {
  return (
    <div className="App">
      <Navbar />
      
        <Routes>

        <Route path="/" element={<Count />}>

        </Route>
        <Route path="/Course2" element={<Course2 />}>
          </Route>
          <Route path="/Course" element={<Course />}>
          </Route>
            
            <Route path="/blogs/:id" element={<CourseDetails />}>
            </Route>
            <Route path="*" element={<NotFound />}>
        </Route>

        </Routes>
    </div>
  );
}

export default App;