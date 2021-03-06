import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DayJS from 'react-dayjs';
import { Link } from 'react-router-dom'

const MyRow = styled.div`
    text-align: left;
    margin-top:30px;
    background-color: rgb(255, 231, 234);
    border-radius: 30px;
    box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
`

const Myimg = styled.img`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-radius: 30px;    
`

const resultepage = () => {
    let { EventID } = useParams();
    const [eventlist, seteventList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3030/event_datasearch?EventID=${EventID}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                var result = Object.values(data);
                console.log(result[0]);
                seteventList(result[0]);
            });
    }, []);

    return (
        <div className="my-3">
            <div className="container">
                <MyRow>
                    <h1 style={{paddingTop: "2.5rem", textAlign: "center"}}>Event Information</h1>
                    {eventlist &&
                        eventlist.map((i) => {
                            return (
                                <section className="Form my-4 mx-5" key={i.EventID} style={{paddingBottom: "3rem"}}>
                                    <div className="container">
                                        <div className="row no-gutters">
                                            <div className="col-lg-5">
                                                <Myimg src={`${i.imgURL}`} className="img-fluid" />
                                            </div>
                                            <div className="col-lg-7 px-5 pt-5">
                                                <h2>Event Name: {i.Eventname}</h2>
                                                <span><h5>Event Type: {i.Eventtype}</h5></span>
                                                <span><h4>Location: {i.Location}</h4></span>
                                                <span><h4>Date and Time:<DayJS format="MM-DD-YYYY">{i.DATE_TIME}</DayJS></h4></span>
                                                <span><h5>Description: {i.Event_Description}</h5></span>
                                                {/* <div id='map' style=' width: 500px; height: 400px;'></div> */}
                                                <Link to="/EventMng" className="btn btn-primary">Back</Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                </MyRow>

            </div>
        </div>
    );
}

export default resultepage