import CourseList from "./CourseList";
import useFetch from "./useFetch";
import Count from "./Count";

const DashBoard = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="DashBoard">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <CourseList blogs={blogs} /> }

      
    </div>
  );
}
 
export default DashBoard;