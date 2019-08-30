import styled from 'styled-components/macro';
import { rgba } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  background-color: #fff;
  margin-bottom: 15px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
`;

export const Features = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Feature = styled.div`
  display: flex;
  flex-direction: column;

  &:first-of-type {
    min-width: 150px;
  }
`;

export const FeatureTitle = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;

export const FeatureValue = styled.div`
  font-weight: 500;
  text-transform: capitalize;
`;

export const Button = styled.div`
  background-color: ${props => rgba(props.theme.primary, 0.1)};
  color: ${props => props.theme.primary};
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: 0;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${props => rgba(props.theme.primary, 0.2)};
  }
`;

export const Opponents = styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  border-top: 1px solid ${rgba('#000', 0.1)};
  padding: 10px 0;
  margin-top: 10px;
`;
