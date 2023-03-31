import { Navbar, Text, Link, Grid, Button} from "@nextui-org/react";
import React from "react";



const ErrorPage = () => {


    return(
        <div className= "navbarContainer">
            <Text h1 css={{display: "flex", justifyContent: "center", alignContent: "center", color: "#0369ed"}} >
                Error! Page not found! 
            </Text>
        </div>

    )
}


export default ErrorPage