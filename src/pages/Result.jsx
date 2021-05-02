import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const MyRow = styled.div`
  margin: 30px 50px 30px 50px;
  background-color: rgb(255, 231, 234);
  border-radius: 30px;
  box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
`;

const resultpage = () => {
  let { username } = useParams();
  const [userlist, setuserList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3030/user_data/" + username, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        var result = Object.values(data);
        setuserList(result);
      });
  }, []);

  return (
    <body className="py-3">
      <container className="container">
        <MyRow>
          <h1>User Information</h1>
          {userlist &&
            userlist.map((val) => {
              return (
                <div className="container px-4">
                  <div className="row ">
                    <div className="col">
                      <div className="p-3 ">Name: {val.Fname} </div>
                      <div className="p-3 ">
                        Date of birth:{" "}
                        {new Intl.DateTimeFormat("en-US").format(
                          new Date(val.DOB)
                        )}
                      </div>
                      <div className="p-3 ">E-mail: {val.Email}</div>
                    </div>
                    <div className="col">
                      <div className="p-3 ">Lastname: {val.Lname}</div>
                      <div className="p-3 ">Phone number: {val.Phone}</div>
                    </div>
                  </div>
                </div>
              );
            })}
        </MyRow>
      </container>
    </body>
  );
};

export default resultpage;
