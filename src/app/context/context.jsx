'use client';

import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(true);
    }

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(true);
    }

    return(
        <AppContext.Provider value={{
            showPassword,
            showConfirmPassword,
            handleShowPassword,
            handleShowConfirmPassword
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };