import { Image } from 'primereact/image';


const Header = () => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      background: '#c7a3d2', 
      padding: '10px', 
      color: 'white' 
    }}>
      <div className="card flex justify-content-center" >
        <Image 
          src="./src/assets/images/logo.jpg" 
          alt="Image" 
          width="100" 
          style={{ borderRadius: '50%' }} 
        />
      </div>

      <h1 style={{ 
        fontFamily: 'monospace',
        marginLeft:'35%'
  
        }}>
        D E R M A C A R E
      </h1>
    </header>
  );
};

export default Header;
