

import {AppBar ,Toolbar ,Box,styled} from '@mui/material';

//components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)
({
    backgroundColor: '#000000',
    height: '80px',
})   

const Component = styled(Box)
({
    marginLeft: '15%',
    fontSize: '30px',
})
const Header = () => {
    return (

        <StyledHeader>
            <Toolbar  style={{minHeight: '55'}}>
                <Component>
                    <h1>ATLAS</h1>
                </Component>
                <Search/>
                <Box>
                    <CustomButtons/>
                </Box>

            </Toolbar>
        </StyledHeader>
    )
}

export default Header;
