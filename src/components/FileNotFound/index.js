import React from 'react';
import * as GlobalStyles from '../globalStyles';
import * as api from '../../api';
import { Link } from 'react-router-dom';
export default class Confirmation extends React.Component {
    state = {}
    componentDidMount() {
        const { id } = this.props;
        this.setState(api.getTransactionInfo(id))
    }
    render() {
        return <GlobalStyles.PaddedContainer style={{paddingTop: '2em'}}>
            <GlobalStyles.Title>Oh Noes!!</GlobalStyles.Title>
            <p style={{ fontSize: '1.6em' }}>
               We couldn't find that page! Maybe it went away or maybe it never existed...
            </p>
            <p style={{ fontSize: '1.6em' }}>
                Go back to <Link to="/">home</Link>
            </p>
        </GlobalStyles.PaddedContainer>
    }
}