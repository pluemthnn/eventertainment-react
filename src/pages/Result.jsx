import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DayJS from 'react-dayjs';

const MyRow = styled.div`
    margin:30px  50px  30px  50px;
    background-color: rgb(255, 231, 234);
    border-radius: 30px;
    box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);

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
    <div className="py-3">
      <div className="container">
        <MyRow>
          <br></br><h1 className="pt-3">User Information</h1><br></br>
          {userlist &&
            userlist.map((val) => {
              return (
                <div className="container px-4" key={val.Username}>
                  <div className="row ">
                    <div className="col">
                      <div className="p-3 "><b>UserName: {val.Username}</b></div>
                      <div className="p-3 "><b>Name: {val.Fname} {val.Lname}</b></div>
                      <div className="p-3 ">
                      <DayJS format="MM-DD-YYYY">{val.DOB}</DayJS>
                      </div>
                      <div className="p-3 "><b>E-mail: {val.Email}</b> </div>
                      <div className="p-3 "><b>Phone number: {val.Phone}</b></div>
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
