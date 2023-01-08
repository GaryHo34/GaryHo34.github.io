import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 360px;
  z-index: 10;
`;

export const NavbarContainer = styled.nav<{ visible: boolean }>`
  width: 100%;
  height: 60px;
  background: #292f36;
  ${props => props.visible ? 'position: fixed; top: 0;' : 'position: sticky;'};
  z-index: 10;

  padding: 0 30px;

  display: flex;
  justify-content: ${props => props.visible ? 'space-between' : 'end'};
  align-items: center;
`;

export const FloatTitle = styled.div`
  background-color: rgba(24,24,24, 0.5);
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
  padding: 0 1rem;
  position: absolute;
  top: 2rem; 
  left: 2rem;
`;

export const FixedHeader = styled.div`
  color: white;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: None;
  gap: 20px;
`;

export const Button = styled.div`
  color: gray;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  cursor: pointer;
  -moz-transition: all .1s ease-in;
  -o-transition: all .1s ease-in;
  -webkit-transition: all .1s ease-in;
  transition: all .1s ease-in;
  
  :hover {
    margin: -2px 0;
    color: white;
    border-bottom: 2px solid white;
  }
`;


export const HeadBanner = styled.div`
  background-color: #333;
  background-image: url('https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;

  & > h1 {
    color: #000000;
    position: absolute;
    top: 2rem; 
    margin-left: 30%;
  }
`;