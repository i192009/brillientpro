import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Course2 from "./Course2";

const Course = () => {
  const [Course_Name, setTitle] = useState('');
  const [Course_Code, setBody] = useState('');
  const [instructor, setAuthor] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { Course_Name, Course_Code, instructor};

    fetch('http://localhost:9000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="Course">
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <label>Course Name:</label>
        <input 
          type="text" 
          required 
          value={Course_Name}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Course Code:</label>
        <textarea
          required
          value={Course_Code}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Course Instructor:</label>
        <textarea
          value={instructor}
          onChange={(e) => setAuthor(e.target.value)}
        >
        <label>Course Instructor:</label>

        </textarea>
        <br></br>
        <button>Add Course</button>
      </form>
      
    </div>
    
  );
}
 
export default Course;