import styled from '@emotion/styled';

const Lebel = styled.h1`
    margin-bottom: 32px;
`;

interface Props{
    readonly title: string;
}

export const Title = ( {title}: Props ) => {
    return <div>{title}</div>
}