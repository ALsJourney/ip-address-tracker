import React, { DOMElement, FC, useState } from "react";
import PatternBg from "./../images/pattern-bg.png";
import ArrowIcon from "./../images/icon-arrow.svg";
import loc from "../images/icon-location.svg";



interface FormData {
    ip: string;
};

const apiKey = import.meta.env.VITE_IP_API_KEY;
const IpForm: FC = () => {

    const [formData, setFormData] = useState<FormData>({ip: "Search for any IP address or domain"});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const [data, setData] = useState(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // API call to ipfy.org
        const url: string = "https://geo.ipify.org/api/v2/country";

        const inputfield: string = (document.getElementById('ip') as HTMLInputElement).value;
        
        if (inputfield !== "" && ValidateIPaddress(inputfield)) {
            const fetchurl: string = `${url}?apiKey=${apiKey}&ipAdress=${inputfield}`
            console.log(fetchurl);
            
            fetch(fetchurl)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
            
        }
        

    };

    function ValidateIPaddress(ipaddress:string) {  
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
            return (true);
    }  
    alert("You have entered an invalid IP address!")  
        return (false);
} 

    return (
        <div className="ipFormDiv">
            <img src={PatternBg} alt="Pattern Background purple" className="patternBg" />
            <form onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <h3>IP Address Tracker</h3>
                    <div className="arrowIconDiv">
                        <input
                            type="text"
                            id="ip"
                            name="ip"
                            placeholder={formData.ip}
                            onChange={handleInputChange}
                        />
                        <button type="submit" onClick={handleSubmit}><img src={ArrowIcon} alt="Submit Button Arrow Icon" className="arrowIcon" /></button> 
                    </div>
                </div>
            </form>
        </div>
    );

}


export default IpForm;