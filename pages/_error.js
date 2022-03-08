import Router from 'next/router';
import { useEffect } from 'react';
import {BiArrowBack} from "react-icons/bi";

export default function FourOhFour() {

    const routerBackEvent = () => {
        Router.back();
    };

    const update = e => {
        var x = e.clientX || e.touches[0].clientX
        var y = e.clientY || e.touches[0].clientY
      
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
    };

    useEffect(() => {
        document.addEventListener('mousemove', update);
        document.addEventListener('touchmove', update);

        return () => {
            document.removeEventListener('mouse', update);
            document.removeEventListener('touchmove', update);
        };
    }, []);

    return (
        <div className="fof-container">
            <div className="fof-flex">
                <div className="fof-left-flex">
                    <span className="fof-message">
                        Nothing to see here
                    </span>
                    <button onClick={routerBackEvent}>
                        <BiArrowBack size={32}/>
                        <span className='fof-button-text'>Take me back</span>
                    </button>
                </div>
                <div className="fof-avatar-container">
                    <img alt="" width={400} height={400} src={`/images/characterNervousEyesOpen.svg`}></img>
                </div> 
            </div>
        </div>
    )
}