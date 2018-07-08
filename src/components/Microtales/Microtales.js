import React from 'react';
import Microtale1 from './Microtale1';
import Microtale2 from './Microtale2';
import Microtale3 from './Microtale3';
import Microtale4 from './Microtale4';
import Microtale5 from './Microtale5';
import Microtale6 from './Microtale6';

class Microtales extends React.Component {

    
    render() {

        return (
        <div className='pt5'>
            {/* title */}
            <div className="vh-75 cover bg-center microtaleimage">
                        <p className="tc pt7">Microtales</p>
            </div>

           <Microtale1/>          
            <Microtale2/>
            <Microtale3/>
            <Microtale4/>
            <Microtale5/>    
            <Microtale6/>       
        </div>
        );
    }
  
}

export default Microtales;
