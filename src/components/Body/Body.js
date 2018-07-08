import React from 'react';
import './Body.css';
import Microtale1 from '../Microtales/Microtale1';
import Microtale5 from '../Microtales/Microtale5';
import Microtale6 from '../Microtales/Microtale6';


const Body = ( ) => {
    return (
        <div>
            
            <main>
                <article class="bg-white">
                <div class="vh-100 cover bg-center headimage">
                    <p className="tc pt7">Creative frenzy</p>
                </div>
                    <div class="ph4 ph5-m ph6-l">
                    <div class="pv5 f2-ns measure center">
                        <h1 className="fw6 blue f1 tc w-100 black-70 mt0 mb3 avenir">Willkommen!</h1>
                        <p  className="fw6 f3 tc  fl w-100 black-70 mt0 mb3 avenir">that's welcome in German </p>
                        <p className="db lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">
                        Let me take you to an eternal journey to the centre of my heart ! Sit back, take a deep breath, and let the intertwined words do the magic for you. 
                        </p>
                    </div>
                    <h1 className="db center lh-copy black-70 serif fw1 mv0 f4 f3-m f2-l measure baskerville">Featured Posts</h1>
                 
                    <div className='container-fluid contentimage'>
                <div className='container row center tc pt4 f3'>
                    <div className='col-4 poetess tc'>                    
                        <h1 className="f3 tc"><b> Meet the Poetess</b></h1> 
                            <p className="f4 tc">Priyanka Hazra</p>
                    </div>
                    <div className='col-8 poems'>
                        <p className="f1">Questions</p>   
                        <img src="https://favim.com/610/201109/08/Favim.com-alone-blue-girl-pain-sad-140253.jpg" alt="pain" width={"auto"} height={"400px"}/><br/>
                        <br/>
                        She asked "Is it a rule to trample the weak?"<br/>
                        They said "Then why don't you speak?"<br/>
                        Not every aspects can be given mere words,<br/>
                        They laughed, then fight with a sword!<br/>
                        Where have all your emotions gone?<br/>
                        Emotions don't matter you thoughtless moron.<br/>
                        You have all become simply blind,<br/>
                        I warn you don't be so kind.<br/>
                        Love, laughter, kindness will cease to exist,<br/>
                        What more you expect from the emotionless beast?<br/>
                        Listlessness is heavily surrounding me,<br/>
                        Only you can make yourself free.<br/>
                        Is there no one to stand by me?<br/>
                        Only the nature, the sun, the moon and the tree.<br/>
                        They are not humans to share my feeling,<br/>
                        They atleast are honest to respect your thinking.<br/>
                        What if with the world I don't accede?<br/>
                        Then don't do the same mistake I repeat.<br/>
                        Am I born to be all alone?<br/>
                        That is what decided to be a mighty Falon.<br/>
                        So gear up with all your strength, to achieve what you want, <br/>
                        And stop being a thoughtless moron.<br/>
                    </div>
                </div>
            </div>  
                    </div>
                </article>
                <Microtale1/>
                <Microtale5/>
                <Microtale6/>
                
            </main>


        </div>
    );
}

export default Body;
