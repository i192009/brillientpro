import { Link } from 'react-router-dom';

const CourseList = ({ blogs }) => {
  return (
    <div className="course-list">
      {blogs.map(blog => (
        <div className="course-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.Course_Name }</h2>
            <p>Course Code: { blog.instructor }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default CourseList;