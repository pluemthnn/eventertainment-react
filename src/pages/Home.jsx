import styled from 'styled-components';
const Button = styled.button`
border: none;
  outline: none;
  height: 50px;
  width: 20%;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-weight: bold;
`;
const box = styled.div`
  background-color: rgb(255, 231, 234);
  border-radius: 30px;
  box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);

`;
const HomePage = () => {
  return (

    <div>
      <box>
      Homepage
      <h2>All event</h2>
      <p>Let's manage our fucking event</p>
      <Button type="button" style={{}}> Manage event</Button>
    </box>
    </div>
    
  )
}



export default HomePage