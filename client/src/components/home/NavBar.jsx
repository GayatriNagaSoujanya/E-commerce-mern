

import { Box, Typography, styled} from "@mui/material";

import { navData } from "../../constants/data";

const Component=styled(Box)
({
    display:"flex",
    margin:"55px 130px 0 130px",
    justifyContent:"space-between",
    marginTop:"100px",
    textAlign:"center",

})

const Text=styled(Typography)
({
    fontSize:"25px",
    fontWeight:"600",
    fontFamily:"inherit",
})

const NavBar = () => {
    return (
        <Component>
            {
                navData.map(data => (
                    <Box>
                        <img src={data.url} alt="nav" styled={{width:"64"}}/>
                        <Text>{data.text}</Text>
                    </Box>
                ))                
            }

        </Component>
    )
}


export default NavBar;