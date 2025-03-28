
import {NavLink, useLocation } from "react-router-dom"

const attribute: React.CSSProperties = {
    padding:'15px',
    color:'black',
    fontSize:'16px',
    display:'flex',
    flexDirection:'row',
    gap:10
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

   const location = useLocation().pathname;

  return (
      <NavLink to={data.route} style={attribute} className={({ isActive }) =>
        isActive ? 'active' : ''
        }
    >
        <img src={location.includes(data.route) ? data.activeImage:data.image} alt="icon_image" style={iconImage}/>
        {data.text}
      </NavLink>
  )
}

export default Sidebar
