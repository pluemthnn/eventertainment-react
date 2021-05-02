import "../components/admin.css";
import styled from "styled-components";
import { Link } from 'react-router-dom'


const Mytable = styled.table`
  border-collapse: collapse;
  padding: 3;
  width: 100%;
  background-color: white;
`

const Mytd = styled.td`
  vertical-align: middle;
  text-align: middle;
  padding: 8px;
  fontSize: "20px"
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

class EventMngpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventdata: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleeventsearchall = this.handleeventsearchall.bind(this);
    this.handleeventsearch = this.handleeventsearch.bind(this);
  }

  handleChange(changeObject) {
    this.setState({
      [changeObject.target.name]: changeObject.target.value,
    });
  }

  eventinsert() {
    let evt_id = document.getElementById("txteventID").value;
    let evt_name = document.getElementById("txteventName").value;
    let evt_dt = document.getElementById("txteventDT").value;
    let evt_loc = document.getElementById("txtlocation").value;
    let evt_desc = document.getElementById("txtdesc").value;
    let evt_type = document.getElementById("Event_type").value;
    let evt_url = document.getElementById("imgURL").value;
    let evt_data = {
      EventID: evt_id,
      Eventname: evt_name,
      DATE_TIME: evt_dt,
      Location: evt_loc,
      Event_Description: evt_desc,
      Eventtype: evt_type,
      imgURL: evt_url,
    };

    fetch("http://localhost:3030/event-form-create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(evt_data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Insert Successfully");
      })
      .catch((err) => console.log(err));
  }

  eventupdate() {
    let evt_id = document.getElementById("txteventID").value;
    let evt_name = document.getElementById("txteventName").value;
    let evt_dt = document.getElementById("txteventDT").value;
    let evt_loc = document.getElementById("txtlocation").value;
    let evt_desc = document.getElementById("txtdesc").value;
    let evt_type = document.getElementById("Event_type").value;
    let evt_url = document.getElementById("imgURL").value;
    let evt_data = {
      EventID: evt_id,
      Eventname: evt_name,
      DATE_TIME: evt_dt,
      Location: evt_loc,
      Event_Description: evt_desc,
      Eventtype: evt_type,
      imgURL: evt_url,
    };

    fetch("http://localhost:3030/event-form-update/", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(evt_data),
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

  eventdelete() {
    let evt_id = document.getElementById("txteventID").value;
    let evt_data = {
      EventID: evt_id,
    };

    fetch("http://localhost:3030/event-form-delete/", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(evt_data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == undefined) {
          alert("No event found");
        } else {
          alert("Delete Successfully");
        }
      })
      .catch((err) => console.log(err));
  }

  async handleeventsearch(changeObject) {
    changeObject.preventDefault();
    let event_id = document.getElementById("txteventID").value;
    let event_name = document.getElementById("txteventName").value;
    let event_dt = document.getElementById("txteventDT").value;
    let event_location = document.getElementById("txtlocation").value;
    let event_type = document.getElementById("Event_type").value;
    let event_desc = document.getElementById("txtdesc").value;
    fetch(
      `http://localhost:3030/event_datasearch?EventID=${event_id}&EventName=${event_name}&DateTime=${event_dt}&Location=${event_location}&EventType=${event_type}&EventDesc=${event_desc}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.data[0] == undefined || data.data[0].EventID == undefined) {
          alert("No event found");
        } else {
          this.setState({
            eventdata: data.data,
          });
        }
      })
      .catch((err) => console.log(err));
  }

  async handleeventsearchall(changeObject) {
    changeObject.preventDefault();
    fetch("http://localhost:3030/event_data/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          eventdata: data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center",}}>
        <div id="box">
          <br></br><h1 className="pt-3">Event Management</h1><br></br>
          <input
            type="text"
            className="input1"
            id="txteventID"
            placeholder="EventID"
          />{" "}
          <br />
          <input
            type="text"
            className="input1"
            id="txteventName"
            placeholder="Eventname"
          />
          <br />
          <input
            type="text"
            className="input1"
            id="txteventDT"
            placeholder="Time YYYY-MM-DD HH-MM-SS"
          />
          <br />
          <input
            type="text"
            className="input1"
            id="txtlocation"
            placeholder="Location"
          />
          <br />
          <input
            type="text"
            className="input1"
            id="txtdesc"
            placeholder="Event_Description"
          />
          <br />
          <select className="input1" id="Event_type">
          <option value="">Event Type</option>
            <option value="Comedy">Comedy</option>
            <option value="E-sport">E-sport</option>
            <option value="Concert">Concert</option>
            <option value="Art-design">Art-design</option>
          </select>
          <br />
          <br></br>
          <input
            type="text"
            className="input1"
            id="imgURL"
            placeholder="Image URL"
          />
          <br />
          <button
            type="submit"
            className="btn"
            id="selectall2"
            onClick={this.handleeventsearchall}
          >
            All Event
          </button>
          <button
            type="submit"
            className="btn"
            id="select2"
            onClick={this.handleeventsearch}
          >
            Search
          </button>
          <button
            type="submit"
            className="btn2"
            id="insert2"
            onClick={this.eventinsert}
          >
            Insert
          </button>
          <button
            type="submit"
            className="btn2"
            id="update2"
            onClick={this.eventupdate}
          >
            Update
          </button>
          <button
            type="submit"
            className="btn2"
            id="delete2"
            onClick={this.eventdelete}
          >
            Delete
          </button>
        
          <div className="pb-5 pt-4" style={{ justifyContent: "center" }}>
          <Mytable className="pt-5">
            {this.state.eventdata &&
              this.state.eventdata.map((i) => {
                return (
                  <Mytbody key={i.EventID}>
                    <tr>
                    <Mytd>{i.EventID}</Mytd>
                    <Mytd>{i.Eventname}</Mytd>
                    {/* <p>{i.DATE_TIME}</p>
                    <p>{i.Location}</p>
                    <p>{i.Event_Description}</p> */}
                    <Mytd>{i.Eventtype}</Mytd>
                    <Mytd style={{fontSize: "16px", paddingRight: "1rem"}}>
                    <Link to={`/Resulte/${i.EventID}`}>
                      <Button type="button"
                          onClick={() => {
                          this.props.history.push("/Resulte/${i.EventID}");
                          }} style={{marginTop: "1rem", marginBottom: "1rem"}}>
                          Infomation
                      </Button>
                    </Link>
                    </Mytd>
                    {/* <img src={i.imgURL} width="20%"></img> */}
                    </tr>
                  </Mytbody>
                );
              })}
          </Mytable>  
          </div>
        </div>
      </div>
    );
  }
}

export default EventMngpage;
