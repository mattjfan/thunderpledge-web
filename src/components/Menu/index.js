import React from 'react';
import * as GlobalStyles from '../globalStyles';
import Logo from '../../assets/logo.png'
export default class Menu extends React.Component {
    render() {
        // return null;
        return <GlobalStyles.PaddedContainer style={{
            paddingTop: '2em',
            // paddingBottom: '1em',
        }}>
            <span>
                <img src={Logo} height="56px"/>
                <span style={{ paddingLeft: '.4em', fontSize: '2em', fontWeight: '600' }}>Thunderpledge</span>
                {/* <span style={{ paddingLeft: '.6em', fontSize: '1.2em'}}>building a better future together</span> */}
            </span>
            
        </GlobalStyles.PaddedContainer>
    }
}
