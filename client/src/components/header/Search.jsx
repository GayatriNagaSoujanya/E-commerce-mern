

import {InputBase,Box,styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchContainer = styled(Box)
({
    backgroundColor: '#fff',
    width: "38%",
    marginLeft: '15px',
    display: "flex",
    
})

const InputSearchBase = styled(InputBase)
({
    paddingLeft: "20px",
    width: "100%",
    fontSize: "100%",
})

const SearchIconWrapper = styled(Box)
({
    color: "black",
    padding: "10px",
})

const Search = () => {
    return (
        <SearchContainer>
              <InputSearchBase
                   placeholder="Search for products,brands and more..."
              />
              <SearchIconWrapper>
                <SearchIcon/>
              </SearchIconWrapper>
                  

        </SearchContainer>
    )
}

export default Search;