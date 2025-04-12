import { Button } from "antd"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"


const btnCancel:React.CSSProperties = {
  width: '150px',
  fontSize:'18px',
  height: '40px',
  color:'white'
}

const btnGroup:React.CSSProperties = {
  display: 'flex',
  justifyContent:"center",
  gap: '20px',
  alignItems:'center',
  marginTop:'30px',
  marginBottom:'20px'
}

const logoutStyle:React.CSSProperties = {
  position: 'relative',
  height: '100vh'
}

const logoutText:React.CSSProperties = {
  fontSize: '32px',
  fontWeight: '500',
  textAlign: 'center',
  padding: '20px',
  letterSpacing: '2px'
}

const logoutContainer:React.CSSProperties = {
  position: 'absolute',
  maxWidth: '600px',
  width: '100%',
  boxShadow: '1px 1px 3px black',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%,30%)',
  padding: '10px',
  borderRadius: '10px'
}



const Logout = () => {

  const context = useContext(AuthContext)

  if(!context){
    throw Error('authcontext does not provide authProvider.')
  }

  const {logout}  = context;

  return (
    <div  style={logoutStyle}>
      <div  style={logoutContainer}>
          <h3 style={logoutText}>Are You Want To Logout?</h3>
          <div style={btnGroup}>
            <Button variant="solid" color="red" style={btnCancel} danger>No</Button>
            <Button variant="solid" color="green"  style={btnCancel} onClick={logout}>Yes</Button>
          </div>
      </div>
    </div>
  )
}

export default Logout
