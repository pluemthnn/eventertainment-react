import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DayJS from 'react-dayjs';
import { Link } from 'react-router-dom'

const MyRow = styled.div`
    text-align: middle;
    margin:30px  30px  30px  30px;
    padding: 50px 50px 50px 50px;
    background-color: white;
    border-radius: 30px;
    //box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
  //  width: 100px;
    block-size: fit-content;
    display: flex;

  //    align-items: center;
  // justify-content: center;
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
    <div>
      <div className="container" style={{ alignItems: "center", justifyContent: "center", }}>
        <section id="box" style={{paddingBottom: 20, margin: "auto", marginTop: 30}}>
          <br></br><h1 className="pt-3" style={{fontSize: "40px"}}>User Information</h1>
            <MyRow className="row" > 
              {userlist &&
                userlist.map((val) => {
                  return (
                    <div className="container" key={val.Username}>
                      <div className="col">
                        <div className="row" style={{textAlign: "left"}}>
                          <div className="py-3 "><B>UserName:</B> {val.Username}</div>
                          <div className="py-3 "><B>Name:</B> {val.Fname} {val.Lname}</div>
                          <div className="py-3 "><B>Password:</B> {val.User_pwd}</div>
                          </div>
                          <div className="row" style={{textAlign: "left"}}>
                          <div className="py-3 "><B>Birth Date: </B>
                          <DayJS format="MM-DD-YYYY">{val.DOB}</DayJS>
                          </div>
                          <div className="py-3 "><B>E-mail:</B> {val.Email}</div>
                          <div className="py-3 "><B>Phone number:</B> {val.Phone}</div>
                        </div>
                      </div>
                      <Link to="/UserMng" className="btn btn-primary">Edit</Link>
                    </div>
                  );
                })}
            </MyRow>
        </section>
      </div>
    </div>
  );
}

export default resultpage