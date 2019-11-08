import React from 'react'

export const UserContext = React.createContext({
        first_name: "test",
        email: "test@gmail.com",
        getValueFromInputs: (e) => {}
    }
);