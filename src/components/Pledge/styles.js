import styled from 'styled-components';

export const ColorWrapper = styled.span`
    .ant-progress-bg {
        background-color: ${props => props.color};
    }
    .ant-btn.ant-btn-primary.ant-btn-round {
        background-color: ${props => props.color} !important;
        border-color: ${props => props.color} !important;
    }
`
