import { Avatar,Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

 



function sidebar() {
    return (
    <Container>

<Header>
    <UserAvatar />
    <IconContainer>


        <IconButton>  <ChatIcon /> </IconButton>
         <IconButton> <MoreVertIcon /> </IconButton>

    </IconContainer>
    
    </Header>
<Search>

<SearchIcon />


</Search>


<SidebarButton>Start a new chat </SidebarButton>


</Container>
    );
}

export default sidebar;



const Container = styled.div``; 

const SearchInput=styled.input``;

const SidebarButton=styled(Button)`
width:100%;
&&{
    border-top:1px solid whitesmoke;
    border-bottom:1px solid whitesmoke;
}

`;

const Search = styled.div``;

const Header = styled.div`
display:flex;
position:sticky;
top:0;
background-color:white;
z-index:1;
justify-content:space-between;
align-items:15px;
height:80px;
border-bottom:1px solid whitesmoke;
`; 

const UserAvatar = styled(Avatar)`
cursor:pointer;
:hover{
    opacity:0.8;
}

`;

const IconContainer=styled.div``;
