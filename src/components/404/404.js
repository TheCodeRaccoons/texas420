import React, {useCallback, useEffect} from 'react';
import './404.scss'
import domesvg from '../../media/Adornments/RustAdornmentDome.svg';
import {useNavigate} from 'react-router-dom'
const PageNotFound = (props) =>{  
    
    useEffect(() => {
        props.HideNav(true);
      },[props]);

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/', {replace: true}), [navigate]);
 
        return(
            <div className='pnfContainer'>
                <aside><img src={domesvg} alt="404 dome" />
                </aside>
                <main>
                <h1>Sorry!</h1>
                <p>
                    Either you aren't cool enough to visit this page or it doesn't exist<br /> <em>. . . Or maybe is under Bradley's protection, who knows.</em>
                </p>
                <button onClick={handleOnClick}>You can go now!</button>
                </main>
            </div>
        )
}

export default PageNotFound;