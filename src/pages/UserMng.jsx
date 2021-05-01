import "../components/admin.css";
import DayJS from 'react-dayjs';
import { Link } from 'react-router-dom'
import styled from "styled-components";

const Mytable = styled.table`
  border-collapse: collapse;
  padding: 3;
  width: 100%;
`

const Mytd = styled.td`
  // border: 3px solid #000000;
  vertical-align: middle;
  text-align: middle;
  padding: 8px;
`
const Mytbody = styled.tbody`
  color: white;
  background-color: #f06e7e;
  &:nth-child(even) {
    color: black;
    background: #ffe7ea;
  }
`

const Button = styled.button`
  border: none;
  outline: none;
  height: 50px;
  width: 100%;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-weight: bold;
  margin-bottom: 40px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

class UserMngpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleusersearchall = this.handleusersearchall.bind(this);
    this.handleusersearch = this.handleusersearch.bind(this);
  }

  handleChange(changeObject) {
    this.setState({
      [changeObject.target.name]: changeObject.target.value,
    });
  }

  userinsert() {
    let usr_name = document.getElementById("txtusername").value;
    let usr_pwd = document.getElementById("txtpwd").value;
    let usr_email = document.getElementById("txtemail").value;
    let usr_fname = document.getElementById("txtfname").value;
    let usr_lname = document.getElementById("txtlname").value;
    let usr_bd = document.getElementById("cldBD").value;
    let usr_phone = document.getElementById("txtphone").value;
    let usr_data = {
      Username: usr_name,
      User_pwd: usr_pwd,
      Email: usr_email,
      Fname: usr_fname,
      Lname: usr_lname,
      DOB: usr_bd,
      Phone: usr_phone,
      user_role: "1",
    };

    fetch("http://localhost:3030/user-form-create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(usr_data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Insert Successfully");
      })
      .catch((err) => console.log(err));
  }

  userupdate() {
    let usr_name = document.getElementById("txtusername").value;
    let usr_pwd = document.getElementById("txtpwd").value;
    let usr_email = document.getElementById("txtemail").value;
    let usr_fname = document.getElementById("txtfname").value;
    let usr_lname = document.getElementById("txtlname").value;
    let usr_bd = document.getElementById("cldBD").value;
    let usr_phone = document.getElementById("txtphone").value;
    let usr_data = {
      Username: usr_name,
      User_pwd: usr_pwd,
      Email: usr_email,
      Fname: usr_fname,
      Lname: usr_lname,
      DOB: usr_bd,
      Phone: usr_phone,
    };

    fetch("http://localhost:3030/user-form-update/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(usr_data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == undefined) {
          alert("No user found");
        } else {
          alert("Update Successfully");
        }
      })
      .catch((err) => console.log(err));
  }

  userdelete() {
    let usr_name = document.getElementById("txtusername").value;
    let usr_data = {
      Username: usr_name,
    };

    fetch("http://localhost:3030/user-form-delete/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(usr_data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == undefined) {
          alert("No user found");
        } else {
          alert("Delete Successfully");
        }
      })
      .catch((err) => console.log(err));
  }

  async handleusersearch(changeObject) {
    changeObject.preventDefault();
    let usr_name = document.getElementById("txtusername").value;
    let usr_email = document.getElementById("txtemail").value;
    let usr_fname = document.getElementById("txtfname").value;
    let usr_lname = document.getElementById("txtlname").value;
    let usr_bd = document.getElementById("cldBD").value;
    let usr_phone = document.getElementById("txtphone").value;
    await fetch(`http://localhost:3030/user_datasearch?Username=${usr_name}&Email=${usr_email}&Fname=${usr_fname}&Lname=${usr_lname}&DOB=${usr_bd}&Phone=${usr_phone}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data[0] == undefined || data.data[0].Username == undefined) {
          alert("No user found");
        } else {
          this.setState({
            userdata: data.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  async handleusersearchall(changeObject) {
    changeObject.preventDefault();
    await fetch("http://localhost:3030/user_data/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userdata: data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
          <section id="box">
            <br></br><h1 className="pt-3">User Management</h1><br></br>
            <input type="text" className="input1" id="txtusername" placeholder="Username" />
            <br />
            <input type="text" className="input1" id="txtpwd" placeholder="Password" />
            <br />
            <input type="text" className="input1" id="txtemail" placeholder="E-mail" />
            <br />
            <input type="text" className="input1" id="txtfname" placeholder="First name" />
            <br />
            <input type="text" className="input1" id="txtlname" placeholder="Last name" />
            <br />
            <input type="date" className="input1" id="cldBD" />
            <br />
            <input type="text" className="input1" id="txtphone" placeholder="Phone" />
            <br />
            <button
              type="submit" className="btn" id="selectall" onClick={this.handleusersearchall}>
              All User
          </button>
            <button type="submit" className="btn" id="select" onClick={this.handleusersearch}>
              Search
          </button>
            <button type="submit" className="btn" id="insert" onClick={this.userinsert}>
              Insert
          </button>
            <button type="submit" className="btn" id="update" onClick={this.userupdate}>
              Update
          </button>
            <button type="submit" className="btn" id="delete" onClick={this.userdelete}>
              Delete
          </button>
            <div className="pb-5 pt-4" style={{ justifyContent: "center" }}>
              <Mytable className="pt-5">
                {this.state.userdata &&
                  this.state.userdata.map((i) => {
                    return (
                      <Mytbody key={i.Username}>
                        <tr >
                          <Mytd style={{fontSize: "20px"}}>{i.Username}</Mytd>
                          {/* <td>{i.User_pwd}</td> */}
                          {/* <Mytd>{i.Email}</Mytd> */}
                          <Mytd style={{fontSize: "20px"}}>{i.Fname} {i.Lname}</Mytd>
                          {/* <Mytd><DayJS format="MM-DD-YYYY">{i.DOB}</DayJS></Mytd> */}
                          {/* <Mytd>{i.Phone}</Mytd> */}
                          <Mytd style={{fontSize: "16px", paddingRight: "1rem"}}><Link to={`/Result/${i.Username}`}><Button type="button"
                            onClick={() => {
                              this.props.history.push("/Result/${i.Username}");
                            }} style={{marginTop: "1rem", marginBottom: "1rem"}}>Information</Button></Link></Mytd>
                        </tr>
                      </Mytbody>
                    );
                  })}
              </Mytable>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default UserMngpage;
