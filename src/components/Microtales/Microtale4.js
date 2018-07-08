import React from 'react';


class Microtale1 extends React.Component {

    constructor() {
        super();
        this.state = {
            id: '4',
            liked: false,
            count: '',
        };

        fetch('http://localhost:3003/im',{                      
            method: 'put',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
            })
        })
        .then(response => response.json() )
        .then(update =>this.setState({count : update}) )    

        this.handleClick = this.handleClick.bind(this);
      } 
      

      


    handleClick = () => {
        this.setState({
          liked: !this.state.liked,
        });
        if(this.state.liked === false){
            //this.setState({count : this.state.count+1})            
            fetch('http://localhost:3003/image',{                      
                method: 'put',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: this.state.id,
                })
            })
            .then(response => response.json() )
            .then(update =>this.setState({count : update[0]}) )    
                      
        }

        console.log(Number(this.state.count))
        if(this.state.liked === true){
            // this.setState({count : this.state.count-1})
            fetch('http://localhost:3003/img',{                      
                method: 'put',
                headers:{'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    id: this.state.id,
                })
            })
            .then(response => response.json() )
            .then(update =>this.setState({count : update[0]}) )    

        }
        
    }
    
    render() {

        return (
        <div className='pt3'>
            <section className="tc pa3 pa5-ns">
                <article className="hide-child relative ba b--black-20 wide center">
                    <img src={require('../../Media/IMG_20180707_150903_657.JPG')} className="db" alt="quote" />
                    <div className="row">
                    <div className="col-4 pt2 pb2">
                        {(this.state.liked) 
                        ?  
                        <div>                      
                        <img alt="like" id='love' className='love pointer' src={require('../../Media/like (1).png')} onClick={this.handleClick} />
                        </div>
                        :                        
                        <img alt="like" id='love' className='love pointer' src={require('../../Media/like.png')} onClick={this.handleClick} />
                        
                        }
                    </div>
                    <p className="col-6 pt2 pb2 likes">{this.state.count} likes</p>
                    </div>
                </article>
            </section>
        </div>
        );
    }
  
}

export default Microtale1;
