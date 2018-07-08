import React from 'react';

const Poems = () => {
    return(
        <div className='pt5' >
            {/* title */}
            <div class="vh-75 cover bg-center poemimage">
                    <p className="tc pt7">Poems</p>
            </div>

            {/* poems 1*/}
            <div className='container-fluid contentimage'>
                <div className='container row center tc pt4 f3'>
                    <div className='col-4 poetess tc'>                    
                        <h1 className="f2 tc"><b> Meet the Poetess</b></h1> 
                            <p className="f3 tc">Priyanka Hazra</p>
                            <a class="link pt4  grow hover-silver near-black dib mh3 tc" href="https://www.instagram.com/p_r_i_y_a_n_k_a_1_8_t/" title="Instagram" target="_blank" rel="noopener noreferrer">
                                <svg class="dib h3 w3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
                                <span class="f6 db">Instagram</span>
                            </a>
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
    );
}

export default Poems;