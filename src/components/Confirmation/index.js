import React from 'react';
import * as GlobalStyles from '../globalStyles';
import * as api from '../../api';
export default class Confirmation extends React.Component {
    state = {}
    componentDidMount() {
        const { id } = this.props;
        this.setState(api.getTransactionInfo(id))
    }
    render() {
        return <GlobalStyles.PaddedContainer>
            <GlobalStyles.Title>Thanks for your pledge!</GlobalStyles.Title>
            <p style={{ fontSize: '1.6em' }}>
                Thank you for helping us make the world a little bit better together.
                Now you just need to wait! We'll let you know if we hit our pledge goal - and remember - if we hit our goal, you <b>have</b> to take
                the pledge. You promised!
            </p>
            <p style={{ fontSize: '1.6em' }}> Share with friends: <a href={this.state.pledge_url}>{this.state.pledge_url}</a>
            </p>
        </GlobalStyles.PaddedContainer>
    }
}