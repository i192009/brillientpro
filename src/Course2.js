import CourseList from "./CourseList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Course from "./Course";


import DashBoard from "./DashBoard";
const Course2 = () => {
    const { error, isPending, data: blogs } = useFetch('http://localhost:9000/blogs')
  
    return (
      <div className="Course2">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blogs && <CourseList blogs={blogs} /> }
  
        <Link to="/Course" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Add New Course</Link>

      </div>
      
    );
  }
 
export default Course2;