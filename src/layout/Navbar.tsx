import { Typography } from "antd"
import navbarReducer from "../store/store";


const {Title} = Typography;

const navbarContainer:React.CSSProperties = {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:10
}

const headerContainer:React.CSSProperties = {
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    gap:20
}

const headerText:React.CSSProperties = {
    color:'white',
    textAlign:'center'
}

const menuIcon:React.CSSProperties = {
    width:'35px',
    height:'35px',
    cursor:'pointer'
}

const notiIcon:React.CSSProperties = {
    width:'25px',
    height:'25px',
    cursor:'pointer'
}

const profiIcon:React.CSSProperties = {
    width:'45px',
    height:'45px',
    cursor:'pointer'
}


const Navbar = () => {

    const menuClick = navbarReducer((state)=>state.menuClick)

  return (
    <div style={navbarContainer}>
        <div style={headerContainer}>
            <Title level={4} style={headerText}>BarCode POS System</Title>
            <img src="/images/menu-bar (1).png" alt="menu_item" style={menuIcon} onClick={menuClick}/>
        </div>
        <div style={headerContainer}>
            <img src="/images/bell.png" alt="noti_icon" style={notiIcon}/>
            <img src="/images/boy.png" alt="profile_icon" style={profiIcon}/>
        </div>
    </div>
  )
}

export default Navbar
