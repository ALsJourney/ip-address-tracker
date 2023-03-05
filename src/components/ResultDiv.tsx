import React from "react";


const ResultDiv: React.FC = () => {

    const ipget: string = "https://geo.ipify.org/api/v2/country?apiKey=at_9jIiqrQhvHH3UjEjLG32Xm3ghLUp2&ipAddress=8.8.8.8"; 

    return (
        <div className="resultDiv">
            <div className="innerDiv">
            <div className="ipadd">
                <div id="border"></div>
                <p>IP Address</p>
            </div>
            <div className="location">
                <div id="border"></div>
                <p>Location</p>
            </div>
            <div className="timezone">
                <div id="border"></div>
                <p>Timezone</p>
            </div>
            <div className="isp">
                <div id="border"></div>
                    <p>ISP</p>
                    </div>
            </div>
        </div>
    )
}

export default ResultDiv;
