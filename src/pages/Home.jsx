import styled from "styled-components";
const Button = styled.button`
  border: none;
  outline: none;
  height: 50px;
  width: 20%;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 40px;
  &:hover {
    background-color: white;
    border: 1px solid black;
  }
`;
const MyRow = styled.div`
  margin-top: 100px;
  background-color: rgb(255, 231, 234);
  border-radius: 30px;
  box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
`;
const HomePage = () => {
  return (
    <div className="container">
      <h1>Homepage</h1>
      <MyRow>
        <h2>All event</h2>
        <img src="https://www.flaticon.com/svg/vstatic/svg/1636/1636028.svg?token=exp=1619852446~hmac=a8a356ed90f97dc04c8652a733c8db4c" />

        <p>Let's manage our fucking event</p>
        <Button type="button" style={{}}>
          {" "}
          Manage event
        </Button>
      </MyRow>
    </div>
  );
};

export default HomePage;
