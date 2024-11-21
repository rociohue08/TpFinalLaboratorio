const Footer = () => {
    return (
      <footer style={
        { 
          background: '#c7a3d2', 
          padding: '10px',
          color: 'black',
          textAlign: 'center',
          fontWeight:'bold'
          

          }
          
          }>
       
        <p><i className="pi pi-whatsapp" style={{ fontSize: '1rem'}}></i> 299656542 | dermacre@gmail.com</p>
        <p>Síguenos en:</p>
        <i className="pi pi-instagram" style={{ fontSize: '1.5rem'}}></i>
        <i className="pi pi-youtube" style={{ fontSize: '1.5rem' }}></i>

    

        <p>&copy; @2024 D E R M A C A R E 💖</p>
      </footer>
    );
  };
  
  export default Footer;
  