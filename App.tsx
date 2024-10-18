import React, { useEffect, useState } from 'react';
import './App.css';

interface DogOrder {
    name: string;
    Orders: string;
}

interface DataType {
    Date: string;
    Status: string;
    Address: string;
    dogsOrders: DogOrder[];
}

const initialData: DataType = {
    Date: "12/09/2024",
    Status: "Preparation",
    Address: "28 Avondale Ave. Unit 1202, M2N 0K2.",
    dogsOrders: [
        { name: "Cola", Orders: "12x Beef, 10x Chicken, 8x Salmon" },
        { name: "Ible", Orders: "12x Beef, 10x Chicken, 8x Salmon" },
        { name: "Khanoomi", Orders: "12x Beef, 10x Chicken, 8x Salmon" },
    ],
};

function App() {
    const [data, setData] = useState<DataType>(initialData);

    useEffect(() => {
        // This effect runs once after the initial render
        // You can update the state here if needed
    }, []);

    return (
        <div className="Cart">
            <div className="container">
                <div className="Top">
                    <div className="TopLeft">
                        <div className="TopLeftTop">
                            <div className="TopLeftTopLeft">
                                <span className="Date" id="Date">{data.Date}</span>
                            </div>
                            <div className="TopLeftTopRight">
                                <span className="EditBtn">
                                    <img className="EditBtnPen" src="SVGs/editPen.svg" alt=""/>
                                    Edit
                                </span>
                            </div>
                        </div>
                        <div className="TopLeftBottom">
                            <div className="Address">
                                <span className="AddressIcon">
                                    <img className="AddressIcon" src="SVGs/address.svg" alt=""/>
                                </span>
                                <span className="AddressDetails" id="Address">{data.Address}</span>
                            </div>
                        </div>
                    </div>
                    <div className="TopRight">
                        <div className="TopRightLeft">
                            <span className="StatusCircle"></span>
                        </div>
                        <div className="TopRightRight">
                            <span className="StatusText" id="StatusText">{data.Status}</span>
                        </div>
                    </div>
                </div>

                <div className="Middle">
                    <div className="Line"></div>
                </div>
                <div className="Bottom">
                    <div className="order-container" id="DogsOrder">
                        {data.dogsOrders.map((order, index) => (
                            <div key={index} className={order.name}>
                                {order.name}: <span className="Details">{order.Orders}</span><br/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
