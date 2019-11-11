import React from 'react'

export const UserContext = React.createContext({
        first_name: "test",
        email: "test@gmail.com",
        countryCode: "",
        getValueFromInputs: (e) => {
        }
    }
);