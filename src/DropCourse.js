import {Card,CardImg,CardGroup, CardText,CardBody,CardTitle,CardSubtitle,Button,DropdownToggle,DropdownMenu,DropdownItem,Dropdown} from 'reactstrap'

import DashBoard from './DashBoard';
const DropCourse = () => {
    return ( 
        <div  className="DropCourse">
            <CardGroup>
  <Card className="Cards">
    
    <CardBody>
      <CardTitle tag="h4">
          Courses
          <DashBoard/>
        
      </CardTitle>

      
       
    </CardBody>
  </Card>
  <Card className="Cards">
  
    <CardBody>
      <CardTitle tag="h4">
        Course Updates:
  
      </CardTitle>
     
 
    </CardBody>
  </Card>
  
 
</CardGroup>
    
        </div>
        

     );
}
 
export default DropCourse;