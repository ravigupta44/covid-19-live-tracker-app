import React, { useEffect, useState } from 'react';
import './covid.css';
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Covid = () => {
    const [finalData, newFinalData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const data = await res.json();
            newFinalData(data.statewise[0]);
            console.log(data.statewise);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCovidData();
    });

    return (
        <>
            <section>
                <div className='Heading'>
                    <h1 className='live'> 🔴 LIVE </h1>
                    <h2 className='proj_title'>COVID-19 CORONAVIRUS TRACKER</h2>
                </div>
                <ul className="card_head">
                    <li className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>{`OUR    `}</span>COUNTRY</p>
                            <p className='total_data'>INDIA</p>
                        </div>
                    </li>
                    <li className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>{`TOTAL    `}</span>RECOVERED</p>
                            <p className='total_data'>{finalData.recovered}</p>
                        </div>
                    </li>
                    <li className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>{`TOTAL    `}</span>CONFORMED</p>
                            <p className='total_data'>{finalData.confirmed}</p>
                        </div>
                    </li>
                    <li className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>{`TOTAL    `}</span>DEATH</p>
                            <p className='total_data'>{finalData.deaths}</p>
                        </div>
                    </li>
                    <li className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>{`TOTAL    `}</span>ACTIVE</p>
                            <p className='total_data'>{finalData.active}</p>
                        </div>
                    </li>
                    <li className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>{`LAST    `}</span>UPDATE</p>
                            <p className='total_data'>{finalData.lastupdatedtime}</p>
                        </div>
                    </li>
                </ul>
            </section>
            <div class="footer">
                <p>Made With ❤️ By Ravi Kumar Gupta</p>
            </div>
        </>
    )
}

export default Covid;