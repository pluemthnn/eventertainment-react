import styled from 'styled-components';
const MyRow = styled.div`
    margin-top:30px;
    background-color: rgb(255, 231, 234);
    border-radius: 30px;
    box-shadow: 12px 12px 22px rgba(0, 0, 0, 0.1);
`

const resultepage = () => {
    return (
        <body className="my-3">
            <div className="container">
                <MyRow>
                    <h1>Event Information</h1>
                </MyRow>

            </div>
        </body>
    );
}

export default resultepage