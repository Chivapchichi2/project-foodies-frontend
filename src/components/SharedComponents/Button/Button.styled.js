import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${props => props.padding || '14px 30px'};
  background-color: ${props => props.backgroundColor || 'rgba(5, 5, 5, 0.9)'};
  border-radius: 30px;
  color: ${props =>
    props.backgroundColor === 'transparent' ? 'rgb(05,05,05)' : '#ffffff'};
  border: ${props =>
    props.backgroundColor === 'transparent'
      ? '1px solid rgb(05,05,05)'
      : 'none'};
  outline: none;
  cursor: pointer;
  font-size: ${props => props.fontSize || '12px'};
  font-weight: ${props => props.fontWeight || '400'};
  line-height: 1.5;
  &:hover {
    background-color: ${props =>
      props.backgroundColor === 'transparent'
        ? 'rgba(05,05,05,0.9)'
        : 'rgba(5, 5, 5, 1)'};

    color: #ffffff;
    border: none;
  }
`;
