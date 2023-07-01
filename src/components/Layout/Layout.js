import { useState } from "react";
import Header from "../../components/Header/components/Header"

const Layout = ({ children }) => {
  
  const [type, setType] = useState("closed");
  return (<>
    <Header openModal={setType}/>
    {/* <BotIcon/> */}
    {children}
    {/* <Footer /> */}
  </>);
}

export default Layout;