import { useContext, useEffect, useState } from "react";
import { AuthInfo } from "../context/AuthContext";
import LoddingPage from "./LoddingPage";
import { useNavigate } from "react-router-dom";

const PrivateRoot = ({ children }) => {
    const { authEmail } = useContext(AuthInfo);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authEmail === undefined) {
            navigate('/login');
            return;
        }

        if (!authEmail) {
            setIsLoading(true);
        }
        else {
            setIsLoading(false); // Everything is okay, show children
        }
    }, [authEmail, navigate]);



    if (isLoading) {
        return <LoddingPage />;
    }
    return children; // Render children if authEmail is valid
};

export default PrivateRoot;