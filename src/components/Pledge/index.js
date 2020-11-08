import React from 'react';
import { Progress, Input, Button } from 'antd';
// import * as Styles from './styles';
import * as GlobalStyles from '../globalStyles';
import * as api from '../../api';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import FileNotFound from '../FileNotFound';

export default class Pledge extends React.Component {
    state = {
        loadingState: 'loading'
    }
    componentDidMount() {
        const { slug, id } = this.props.match.params;
        console.log('slug: ', slug, ", and id: ", id)
        api.getPledgeInfo(id, slug).then(
            pledgeInfo => {
                if (pledgeInfo) {
                    this.setState({...pledgeInfo, loadingState: 'loaded'});
                } else {
                    this.setState({ loadingState: 'error'})
                }
            }
        )
    }

    InputWithError = ({ name, placeholder }) => {
        const styles = { marginTop: '8px' };
        // console.log('key: ', name)
        const error = this.state[`${name}_error`];
        if (error) {
            styles['borderColor'] = 'red';
        }
        return (
            <React.Fragment>
                <Input onChange={this.onChangeFactory(name)} value={this.state[name]} placeholder={placeholder} style={styles} />
                {error && <p style={{ color: 'red' }}>please fill out this field</p>}
            </React.Fragment>
        );
    }

    submitPledge = () => {
        const { first_name, last_name, email } = this.state;
        const first_name_error = !first_name || /^\s*$/.test(first_name);
        const last_name_error = !last_name || /^\s*$/.test(last_name);
        const email_error = !email || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        this.setState({
            first_name_error,
            last_name_error,
            email_error,
        })
        if (!first_name_error && !last_name_error && !email_error) {
            // console.log('submit success');
            api.submitTransaction(email, first_name, last_name).then(
                id => {// do redirection}
                    console.log('submit works')
                    // window.location.replace(`${base_url}/thank-you/${id}`);
                    this.props.history.push(`/thank-you/${id}`)
                }
            );
        }
    }
    onChangeFactory = key => (
        // console.log('setting' + key)
        e => {
            this.setState({ [key]: e.target.value })
        }
    )
    render() {
        // console.log(this.state)
        const { pledge_count, pledge_goal, loadingState } = this.state;
        if (loadingState === 'loading') {
            return null;
        }
        if (loadingState === 'error') {
            return <FileNotFound />
        }
        // const isMobile = useMediaQuery({ maxWidth: '576px' });
        return <GlobalStyles.PaddedContainer style={{ overflow: 'none', marginBottom: '52px' }}>
            
            <GlobalStyles.Title
                textAlign="center"
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >{this.state.title}</GlobalStyles.Title>
            {/* <img src={this.state.img_url} width="100%" height="120px"/> */}
            <MediaQuery maxWidth={992}>
                    <GlobalStyles.Image src={this.state.img_url} height="400px" style={{ marginBottom: '20px' }} />
                    <div style={{ marginBottom: '40px' }}>
                    {pledge_count < pledge_goal ?
                                    <React.Fragment><p style={{ fontSize: '1.4em' }}><b>{this.state.pledge_count}</b> have already committed out of {this.state.pledge_goal} needed to enact the thunderpledge!
                                    Help us make the world a better place together!</p>
                                        <Progress percent={(this.state.pledge_count / this.state.pledge_goal) * 100} showInfo={false} />
                                    </React.Fragment>
                                    : <p style={{ fontSize: '1.4em' }}> <b>We've reached critical mass!</b> Add your name to commit to the cause and
                                    join <b>{pledge_count}</b> others!</p>
                                }
                                <this.InputWithError name='first_name' placeholder='first' />
                                <this.InputWithError name='last_name' placeholder='last' />
                                <this.InputWithError name='email' placeholder='email' />
                                <Button type="primary" shape="round" style={{ marginTop: '16px', width: '100%', fontWeight: 600}} onClick={this.submitPledge}>
                                    I'll do it if you do it 👀
                                </Button>
                    </div>
                            <b>{this.state.blurb}</b>
                        <p>{this.state.description}</p>
            </MediaQuery>
            <MediaQuery minWidth={993}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', flexWrap: 'wrap'}}>
                        <div style={{ width: '58.3333%', position:'relative'}}>
                            <GlobalStyles.Image src={this.state.img_url} height="400px" style={{ marginBottom: '20px' }} />
                            <b>{this.state.blurb}</b>
                        <p>{this.state.description}</p>
                    </div>
                        <div style={{ width: '33.3333%', 'margin-left': 'left', position:'relative'}}>
                            <div style={{position: 'sticky',  top: '20px', margin: '0 20px', width: '100%' }}>
                                {/* <b style={{ textAlign: 'center' }}>I'll do it if you will!</b>
                                */}
                                {pledge_count < pledge_goal ?
                                    <React.Fragment><p style={{ fontSize: '1.4em' }}><b>{this.state.pledge_count}</b> have already committed out of {this.state.pledge_goal} needed to enact the thunderpledge!
                                    Help us make the world a better place together!</p>
                                        <Progress percent={(this.state.pledge_count / this.state.pledge_goal) * 100} showInfo={false} />
                                    </React.Fragment>
                                    : <p style={{ fontSize: '1.4em' }}> <b>We've reached critical mass!</b> Add your name to commit to the cause and
                                    join <b>{pledge_count}</b> others!</p>
                                }
                                <this.InputWithError name='first_name' placeholder='first' />
                                <this.InputWithError name='last_name' placeholder='last' />
                                <this.InputWithError name='email' placeholder='email' />
                                <Button type="primary" shape="round" style={{ marginTop: '16px', width: '100%', fontWeight: 600}} onClick={this.submitPledge}>
                                    I'll do it if you do it 👀
                                </Button>
                            </div>
                    </div>
                </div>
            </MediaQuery>
               
            
            {/* <h1>{this.state.id}</h1> */}
            </GlobalStyles.PaddedContainer>
    }
}