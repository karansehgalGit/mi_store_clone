import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
/*
const Slider = () => {
    return (
        
        <Carousel>
    
        <Carousel.Item>
                
            <img 
               className="d-block w-100" 
               src="https://i02.appmifile.com/173_operator_in/09/06/2021/fde866737ea0357305c2d1c852541460.gif" 
               alt="First slide" 
            />
    
            </Carousel.Item>     

        </Carousel>
    )
} 
*/
const Slider = ({ start }) => {
    return (

        <Carousel fade>



            {start.map((item, i) => (

                <Carousel.Item key={i} >
                    <img
                        className='d-block w-100'
                        src={item}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}

        </Carousel>
    )
}



export default Slider

