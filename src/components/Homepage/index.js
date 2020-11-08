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
        return <GlobalStyles.PaddedContainer style={{paddingTop: '2em'}}>
            <GlobalStyles.Title>Welcome to Thunderpledge!</GlobalStyles.Title>
            <p style={{ fontSize: '1.6em' }}>
                So what exactly is Thunderpledge? Thunderpledge is a crowd-impact platform where people can join together to promise to make
                impactful life changes or collective action, and only need to act on these promises if we reach critical mass (we'll shoot you an email
                to let you know)!
            </p>
            <p style={{ fontSize: '1.6em' }}>
                The reason we made this platform is because we know first-hand how hard it can feel sometimes to feel like your actions won't make a difference.
                We're making it easier for us to tackle these big problems, and build a better future, together. Join us!
            </p>
            <p style={{ fontSize: '1.6em' }}>
                In order to keep the Thunderpledge community high-intent and encourage follow-through, current thunderpledges are invite only,
                but we're working hard to make it easier to discover new thunderpledges.
                In the meantime, follow us on Twitter to stay in touch!
            </p>
        </GlobalStyles.PaddedContainer>
    }
}