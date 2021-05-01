import styled from 'styled-components'

const Divformrow = styled.div`
    background-color: rgb(255, 231, 234);
    border-radius: 30px;
    box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
`
const MyBtn = styled.button`
    border: none;
    outline: none;
    background-color: black;
    color: white;
    border-radius: 4px;
    font-weight: bold;
    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
    }
`



const SearchPage = () => {
    return (
      <main className="pb-20">
        <div className="container pt-3">
            <div className="row pt-1 pb-1">
                <div className="col-lg-12">
                    <h4 className="text-center">Want to find the event?</h4>
                </div>
            </div>
        </div>
        <section className="search-sec pt-3 ">
            <div className="container">
                <form action="#" method="GET">
                    <Divformrow className="row p-3">
                        <div className="col-lg-4 py-1 col-md-3 col-sm-12 px-1">
                            <input className="form-control search-slt" type="text" name="name" placeholder="Event name"></input>
                        </div>
                        <div className="col-lg-2 py-1 col-md-3 col-sm-12 px-1">
                            <select className="form-control search-slt" name="month" placeholder="Event Drop City">
                                <option value="">Select Month</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="col-lg-2 py-1 col-md-3 col-sm-12 px-1">
                            <select className="form-control search-slt" name="city">
                                <option value="">Select Location</option>
                                <option value="Watthana">Watthana</option>
                                <option value="Ratchathewi">Ratchathewi</option>
                                <option value="Phayathai">Phayathai</option>
                                <option value="Pathumwan">Pathumwan</option>
                                <option value="Latphrao">Latphrao</option>
                                <option value="Bangna">Bangna</option>
                            </select>
                        </div>
                        <div className="col-lg-2 py-1 col-md-3 col-sm-12 px-1">
                            <select className="form-control search-slt" name="type">
                                <option value="">Select Event Type</option>
                                <option value="Concert">Concert</option>
                                <option value="E-sport">e-sport</option>
                                <option value="Comedy">comedy</option>
                                <option value="Art-design">art&design</option>
                            </select>
                        </div>
                        <div className="col-lg-1 py-1 col-md-3 col-sm-12 px-1">
                            <MyBtn type="submit" className="btn">Search</MyBtn>
                        </div>
                    </Divformrow>
                </form>
            </div>
        </section>
        <section className="container d-flex justify-content-center p-4 pt-5">
            <div className="row no-gutters" id="output"></div>
        </section>
      </main>
    )
  }
  
  export default SearchPage 