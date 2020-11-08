import React from 'react';
import { withRouter } from "react-router";
import * as GlobalStyles from '../globalStyles';
import Logo from '../../assets/logo.png'
class Menu extends React.Component {
    goHome = () => {
        this.props.history.push('/');
    }
    render() {
        // return null;
        return <GlobalStyles.PaddedContainer style={{
            paddingTop: '2em',
            // paddingBottom: '1em',
        }}>
            <span onClick={this.goHome} style={{ cursor: 'pointer' }}>
                <img src={Logo} height="56px" alt=''/>
                <span style={{ paddingLeft: '.4em', fontSize: '2em', fontWeight: '600' }}>Thunderpledge</span>
                {/* <span style={{ paddingLeft: '.6em', fontSize: '1.2em'}}>building a better future together</span> */}
            </span>
            
        </GlobalStyles.PaddedContainer>
    }
}

export default withRouter(Menu);
