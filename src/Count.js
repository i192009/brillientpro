import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Learner from './imgs/learner.png'
import {Card,CardImg,CardGroup, CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap'
import Courses from './imgs/courses.png'
import Book from './imgs/book.png'
import Mate from './imgs/mate.png'
import Fate from './imgs/fate.png'
import DropCourse from './DropCourse'


const Count = () => {
    const en_courses = 50;
    const en_learner = 1000;
    const material=2020;
    const certif = 150;
    return (
        <div className="Count"> 
        
<CardGroup>
  <Card className="Cards">
    <CardImg
      alt="Card image cap"
      src={Courses} 
      top
      height={180}
      width={30}
    />
    <CardBody>
      <CardTitle tag="h4">
        Enrolled Courses: 
        {en_courses}
      </CardTitle>
      
       
    </CardBody>
  </Card>
  <Card className="Cards">
  <CardImg
      alt="Card image cap"
      src={Book} 
      top
      height={180}
      width={30}
    />
    <CardBody>
      <CardTitle tag="h4">
        Enrolled Students:
        {en_learner}
      
      </CardTitle>
     
 
    </CardBody>
  </Card>
  <Card className="Cards">
  <CardImg
      alt="Card image cap"
      src={Mate} 
      top
      height={180}
      width={30}
    />
    <CardBody>
      <CardTitle tag="h4">
        Materials:
        {material}
      </CardTitle>
      
 
      
    </CardBody>
  </Card>
  <Card className="Cards">
  <CardImg
      alt="Card image cap"
      src={Fate} 
      top
      height={180}
      width={30}
    />
    
    <CardBody>
      <CardTitle tag="h4">
        Certicate Issued:
        {certif}
      </CardTitle>
     
      
 
    </CardBody>
  </Card>
 
</CardGroup>
    

<DropCourse/>

    </div>
     );
}
 
export default Count;
