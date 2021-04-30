import styled from 'styled-components';

const MyImage = styled.img`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    border-radius: 30px;
`
const MyBtn = styled.button`
    border: none;
    outline: none;
    height: 50px;
    width: 100%;
    background-color: black;
    color: white;
    border-radius: 4px;
    font-weight: bold;
    margin: none;
    &:hover{
        background-color: white;
        border: 1px solid black;
    }
`
const MyRow = styled.div`
    background-color: rgb(255, 231, 234);
    border-radius: 30px;
    box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
`

const Body = styled.div`
    text-align: initial;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Login = () => {
  return (
    <Body>
        <section className="Form my-4 mx-5">
            <div className="container">
                <MyRow className="row no-gutters">
                    <div className="col-lg-5">
                        <MyImage id="img"
                            src="https://github.com/gdoyssaga/our_WEPPRO/blob/master/image/37f2e3bbde25ea6ecc2135c8904fecd6.jpg?raw=true"
                            className="img-fluid" alt=""></MyImage>
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h3 className="p-1">Sign into your account</h3>
                        <form action="" method="POST">
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="text" id="username" className="form-control my-3 p-3" placeholder="Username" required autoFocus></input>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="password" id="password" className="form-control my-3 p-3" placeholder="Password" required></input>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <MyBtn type="button" className="btn mt-3 mb-4" style={{margin: 0}}>Login</MyBtn>
                                    {/* <MyBtn type="button" className="btn mt-3 mb-4" onClick="getResponse()">Login</MyBtn> */}
                                </div>
                            </div>
                            <a href="Forgotpass.html">Forgot Password</a>
                            <p>Don't have an account? <a href="/registerpage">Register here</a></p>
                        </form>
                    </div>
                </MyRow>
            </div>
        </section>
    </Body>
  )
}

export default Login