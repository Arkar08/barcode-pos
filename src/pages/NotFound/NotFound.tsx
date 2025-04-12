import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const notFoundContainer:React.CSSProperties = {
  display:'flex',
  justifyContent:"center",
  alignItems:'center',
  height:'100vh',
  flexDirection:"column"
}

const notFoundText:React.CSSProperties = {
  fontSize:48,
  letterSpacing:3,
  fontWeight:500
}

const backButton:React.CSSProperties = {
  width:'230px',
  marginTop:30,
  fontSize:18,
  padding:10,
  height:50,
  boxShadow:'1px 1px 3px black',
  border:'none'
}

const backArrow:React.CSSProperties = {
  width:'30px',
  height:'30px'
}

const NotFound = () => {

  const navigate = useNavigate()

  const backToHome = () =>{
    navigate("/auth/login")
  }

  return (
    <div style={notFoundContainer}>
      <h3 style={notFoundText}>404 Not Found Page</h3>
      <Button variant="outlined" style={backButton} onClick={backToHome}>
        <img src="/images/left-arrow.png" alt="back_arrow"  style={backArrow}/>
        <span>Back To Login</span>
      </Button>
    </div>
  )
}

export default NotFound
