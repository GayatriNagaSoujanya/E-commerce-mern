
import { Box, Button , Typography ,styled} from '@mui/material';
import {ShoppingCart} from '@mui/icons-material';

const Wrapper=styled(Box)
({
    display: "flex",
    margin: "0 3% 0 auto",
})

const Container=styled(Box)
({
    display:"flex",
    padding:"5px 40px",

})

const LoginButton=styled(Button)
({
    color:"white",
    background:"black",
    padding:"5px 40px",
    boxShadow:"none",
    fontWeight:"600",
    fontSize:"20px",

})
const CustomButtons = () => {
    return (
        <Wrapper>
            <LoginButton variant="contained">Login</LoginButton>
            <Typography style={{padding:"5px 40px"}}>More</Typography>
            <Container>
                <ShoppingCart/>
                <Typography>Cart</Typography>  
            </Container>
        </Wrapper>
       
    )
}


export default CustomButtons;