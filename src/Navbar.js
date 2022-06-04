import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Brilliant Pro</h1>
      <div className="links">
        <Link to="/">DashBoard</Link>

        <Link to="/Course2" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Courses</Link>

        

         

         <Link to="/Materials" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Materials</Link>

       

        <Link to="/Assessments" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Assessments</Link>


        <Link to="/Learners" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Learners</Link>


      </div>
    </nav>
  );
}
 
export default Navbar;