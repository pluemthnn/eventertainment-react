import "../components/admin.css";
import styled from "styled-components";

const Divresult = styled.div`
    background-color: rgb(255, 226, 230);
    box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
    width: 90vh;
    height: 100%;
    margin: 20px 0px;
`

const Mytable = styled.table`
  border-collapse: collapse;
  width: 100%;
`

const Mttd = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`
const Mtth = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`

class UserMngpage extends React.Component {
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
      user_role: "1",
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

  usersearch() {
    let output = document.getElementById("result1");
    let text = "";
    let usr_name = document.getElementById("txtusername").value;

    fetch("http://localhost:3030/user_data/" + usr_name, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == undefined || data.data.Username == undefined) {
          alert("No user found");
        } else {
          alert("retrieved user");
          text += `User Name: ${data.data.Username}<br>`;
          text += `User Password: ${data.data.User_pwd}<br>`;
          text += `Email: ${data.data.Email}<br>`;
          text += `Name: ${data.data.Fname} ${data.data.Lname}<br>`;
          text += `Date of Birth: ${data.data.DOB}<br>`;
          text += `Phone Number: ${data.data.Phone}<br>`;
          text += "<br>";
          output.innerHTML = text;
        }
      })
      .catch((err) => console.log(err));
  }

  async usersearchall() {
    let output = document.getElementById("result1");

    await fetch("http://localhost:3030/user_data/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        let table = `
        <tr> 
          <td> Name </td>
          <td> Email </td>
          <td> Date of Birth </td>
          <td> Phone Number </td>
        </tr>`
        for (const x of data.data) {
          table += `<tr>
          <td> ${x.Fname} ${x.Lname} </td>
          <td> ${x.Email} </td>
          <td> ${x.DOB} </td>
          <td> ${x.Phone} </td>
          </tr>`
          // table += `User Name: ${x.Username}<br>`;
          // table += `User Password: ${x.User_pwd}<br>`;
          // table += `Email: ${x.Email}<br>`;
          // table += `Name: ${x.Fname} ${x.Lname}<br>`;
          // table += `Date of Birth: ${x.DOB}<br>`;
          // table += `Phone Number: ${x.Phone}<br>`;
          // table += "<br>";
        }
        output.innerHTML = table;
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
        <div id="box">
          <br></br>User Management<br></br>
          <br></br>
          <input type="text" className="input1" id="txtusername" placeholder="Username" />
          <br />
          <input
            type="text"
            className="input1"
            id="txtpwd"
            placeholder="Password"
          />
          <br />
          <input
            type="text"
            className="input1"
            id="txtemail"
            placeholder="E-mail"
          />
          <br />
          <input
            type="text"
            className="input1"
            id="txtfname"
            placeholder="First name"
          />
          <br />
          <input
            type="text"
            className="input1"
            id="txtlname"
            placeholder="Last name"
          />
          <br />
          <input type="date" className="input1" id="cldBD" />
          <br />
          <input
            type="text"
            className="input1"
            id="txtphone"
            placeholder="Phone"
          />
          <br />
          <button
            type="submit"
            className="btn"
            id="selectall"
            onClick={this.usersearchall}
          >
            All User
          </button>
          <button
            type="submit"
            className="btn"
            id="select"
            onClick={this.usersearch}
          >
            Search
          </button>
          <button
            type="submit"
            className="btn"
            id="insert"
            onClick={this.userinsert}
          >
            Insert
          </button>
          <button
            type="submit"
            className="btn"
            id="update"
            onClick={this.userupdate}
          >
            Update
          </button>
          <button
            type="submit"
            className="btn"
            id="delete"
            onClick={this.userdelete}
          >
            Delete
          </button>
          <br></br>
          <br></br>
          <table id="result1">
          </table>
        </div>
        {/* <Divresult id="result1"></Divresult> */}
      </div>
    );
  }
}

export default UserMngpage;
