import React, { FC, useState } from "react";
import PatternBg from "./../images/pattern-bg.png";
import ArrowIcon from "./../images/icon-arrow.svg";

interface FormData {
    ip: string;
};


const IpForm: FC = () => {

    const [formData, setFormData] = useState<FormData>({ip: "Search for any IP address or domain"});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(formData);
    };


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
                        <button type="submit"><img src={ArrowIcon} alt="Submit Button Arrow Icon" className="arrowIcon" /></button>
                    </div>
                </div>
            </form>
        </div>
    );

}


export default IpForm;