import "../components/admin.css";

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

  usersearchall() {
    let output = document.getElementById("result1");
    let text = "";

    fetch("http://localhost:3030/user_data/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        for (const x of data.data) {
          text += `User Name: ${x.Username}<br>`;
          text += `User Password: ${x.User_pwd}<br>`;
          text += `Email: ${x.Email}<br>`;
          text += `Name: ${x.Fname} ${x.Lname}<br>`;
          text += `Date of Birth: ${x.DOB}<br>`;
          text += `Phone Number: ${x.Phone}<br>`;
          text += "<br>";
        }
        output.innerHTML = text;
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
          <div id="result1"></div>
        </div>
      </div>
    );
  }
}

export default UserMngpage;
