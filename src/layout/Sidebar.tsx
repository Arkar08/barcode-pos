
import {NavLink, useLocation } from "react-router-dom"
import navbarReducer from "../store/store"

const attribute: React.CSSProperties = {
    padding:'10px',
    color:'black',
    fontSize:'16px',
    display:'flex',
    flexDirection:'row',
    gap:15
}

const iconImage:React.CSSProperties = {
    width:'25px',
    height:'25px'
}


type DataProps = {
    data:{
        route:string
        text:string,
        image:string,
        activeImage:string
    }
}


const Sidebar = ({data}:DataProps) => {

    const active = navbarReducer((state)=>state.active)
    const location = useLocation().pathname;

  return (
      <NavLink to={data.route} style={attribute} className={({ isActive }) =>
        isActive ? 'active' : ''
        }
    >
        <img src={location.includes(data.route) ? data.activeImage:data.image} alt="icon_image" style={iconImage}/>
        <span style={{display: active? 'none':'block', fontSize:'16px',fontWeight:'300'}}>{data.text}</span>
      </NavLink>
  )
}

export default Sidebar
