import React from 'react';
import '../styles/Header.module.scss';

export default function Header(): JSX.Element {
    return <> {
        <div className="logo mx-auto" >
            <div className="logo w-full h-full mx-auto hover:bg-pink-300" >
                <div className="title"><h1 className="fonts">Kevin Sajan</h1></div>
            </div>
        </div>

    } </>
}