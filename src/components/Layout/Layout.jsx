import AppBar from '../AppBar/AppBar';  

const Layout = ({ Outlet }) => {  
  return (  
    <div>  
      <AppBar />  
      {Outlet}  
    </div>  
  );  
};  

export default Layout;