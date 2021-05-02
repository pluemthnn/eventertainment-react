import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DayJS from 'react-dayjs';

const MyRow = styled.div`
    text-align: middle;
    margin:30px  30px  30px  0px;
    padding: 100px 0px 100px 100px;
    background-color: rgb(255, 231, 234);
    border-radius: 30px;
    box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
    width: fit-content;
    block-size: fit-content;
    display: flex;
    //  align-items: center;
  //justify-content: center;
` 
const B = styled.span`
    fontWeight: bold;
    font-size:20px;
`
const resultpage = () => {
  let { username } = useParams();
  const [userlist, setuserList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3030/user_datasearch?Username=${username}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => {
        var result = Object.values(data);
        console.log(result[0]);
        setuserList(result[0]);
      });
  }, []);
  return (
    <div className="py-3 px-3 mx-3 " >
      <div className="container">
        <MyRow>
          <br></br><h1 className="pt-1" style={{fontSize: "40px" ,alignItems: "center"}}>User Information</h1><br></br>
          {userlist &&
            userlist.map((val) => {
              return (
                <div className="container px-4" key={val.Username}>
                  <div className="row">
                    <div className="col" style={{textAlign: "left"}}>
                      <div className="p-3 "><B>UserName:</B> {val.Username}</div>
                      <div className="p-3 "><B>Name:</B> {val.Fname} {val.Lname}</div>
                      <div className="p-3 "><B>Password:</B> {val.User_pwd}</div>
                      </div>
                      <div className="col" style={{textAlign: "left"}}>
                      <div className="p-3 "><B>Birth Date: </B>
                      <DayJS format="MM-DD-YYYY">{val.DOB}</DayJS>
                      </div>
                      <div className="p-3 "><B>E-mail:</B> {val.Email}</div>
                      <div className="p-3 "><B>Phone number:</B> {val.Phone}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </MyRow>
      </div>
    </div>
  );
}

export default resultpage
