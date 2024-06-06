import { createContext, useState } from "react";

export const storeContext=createContext()

export const StoreProvider = (props) => {
    const [bookings, setBookings] = useState([]);
  
console.log(bookings);

    const contextValue={
        bookings,
        setBookings,
        
    }

    return (
        <storeContext.Provider value={contextValue}>
            {props.children}
        </storeContext.Provider>
    )
}