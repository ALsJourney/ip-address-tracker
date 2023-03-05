import React from "react";
type Location = {
    country: string,
    region: string,
    timezone: string,
}
type ResponseData = {
    // IP Address, Location, Timezone, ISP
    ip: string,
    country: string,
    location: Location,
    isp: string,
}
type ResponseDataProps = {
    // IP Address, Location, Timezone, ISP
    data: ResponseData | null,
}
const ResultDiv = (props: ResponseDataProps): JSX.Element => {
    return (
    <div>
        {
                props.data && (
                 <div className="resultDiv">
            <div className="innerDiv">
            <div className="ipadd">
                <div id="border"></div>
                    <p>IP Address</p>
                                <p>{props.data.ip}</p>
            </div>
            <div className="location">
                <div id="border"></div>
                                <p>Location</p>
                                <p>{props.data.location.country + ", " + props.data.location.region}</p>
                                
            </div>
            <div className="timezone">
                <div id="border"></div>
                                <p>Timezone</p>
                                <p>{props.data.location.timezone}</p>
                                
            </div>
            <div className="isp">
                                <p>ISP</p>
                                <p>{props.data.isp}</p>
                                
                    </div>
            </div>
        </div>    
                
                )
        }
       </div>
    )
}

export default ResultDiv;
