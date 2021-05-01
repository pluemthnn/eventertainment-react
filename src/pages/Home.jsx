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
    color: black;
  }
`;
const MyRow = styled.div`
  margin-top: 30px;
  background-color: rgb(255, 231, 234);
  border-radius: 30px;
  box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
`;
const HomePage = (props) => {
  return (
    <div className="my-3">
      <div className="container">
        <h1 className="mt-4">Welcome to Admin Homepage</h1>
        <MyRow>
          {/* <h2>All event</h2> */}
          <img src="https://www.flaticon.com/svg/vstatic/svg/1636/1636028.svg?token=exp=1619904228~hmac=cdf9157c4ca84511864934be2fbff077" />

          <h5 className="py-3">Let's manage our lovely event</h5>
          <Button
            type="button"
            onClick={() => {
              props.history.push("/EventMng");
            }}
          >
            Manage event
          </Button>
        </MyRow>
      </div>
    </div>
  );
};

export default HomePage;
