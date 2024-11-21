import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{ display:'flex',justifyContent:'center',background: '#ba8cbe', padding: '10px' }}>
      <ul style={{ display: 'flex', listStyleType: 'none' }}>
        <li style={{ margin: '0 10px' }}><Link to="/" style={{ color: 'black',textDecoration:'none', fontWeight:'bold'}}>Inicio</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/about" style={{ color: 'black',textDecoration:'none', fontWeight:'bold'}}>Nosotros</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/services" style={{ color: 'black',textDecoration:'none', fontWeight:'bold'}}>Servicios</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
