import "../components/admin.css";

const options = [
  { value: "Comedy", label: "Comedy" },
  { value: "E-sport", label: "E-sport" },
  { value: "Concert", label: "Concert" },
  { value: "Art-design", label: "Art-design" },
];

class EventMngpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedtype: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const elementname = target.name;
    this.setState({
      [elementname]: value,
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

  eventsearch() {
    let output = document.getElementById("result2");
    let text = "";
    let event_id = document.getElementById("txteventID").value;

    fetch("http://localhost:3030/event_data/" + event_id, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == undefined || data.data.EventID == undefined) {
          alert("No event found");
        } else {
          const x = data.data;
          alert("retrieved event");
          text += `Event ID: ${x.EventID}<br>`;
          text += `Event Name: ${x.Eventname}<br>`;
          text += `Date & Time: ${x.DATE_TIME}<br>`;
          text += `Location: ${x.Location}<br>`;
          text += `Description: ${x.Event_Description}<br>`;
          text += `Type: ${x.Eventtype}<br>`;
          text += `<img src="${x.imgURL}" width="20%"><br>`;
          text += "<br>";
          output.innerHTML = text;
        }
      })
      .catch((err) => console.log(err));
  }

  eventsearchall() {
    let output = document.getElementById("result2");
    let text = "";

    fetch("http://localhost:3030/event_data/", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        for (const x of data.data) {
          text += `Event ID: ${x.EventID}<br>`;
          text += `Event Name: ${x.Eventname}<br>`;
          text += `Date & Time: ${x.DATE_TIME}<br>`;
          text += `Location: ${x.Location}<br>`;
          text += `Description: ${x.Event_Description}<br>`;
          text += `Type: ${x.Eventtype}<br>`;
          text += `<img src="${x.imgURL}" width="20%"><br>`;
          text += "<br>";
        }
        output.innerHTML = text;
      })
      .catch((err) => console.log(err));
  }

  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div id="box">
          <br></br>Event Management<br></br>
          <br></br>
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
            onClick={this.eventsearchall}
          >
            All Event
          </button>
          <button
            type="submit"
            className="btn"
            id="select2"
            onClick={this.eventsearch}
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
          <br />
          <br />
          <div id="result2"></div>
        </div>
      </div>
    );
  }
}

export default EventMngpage;
