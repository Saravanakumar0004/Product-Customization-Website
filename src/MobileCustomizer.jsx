import React from 'react';
import Experience from './components/mobile/Experience';
import { CustomizationProvider } from './components/mobile/Customization';
import Configurator from './components/mobile/Configuration';
import { Link } from 'react-router-dom';
import './App.css';

function Mobile() {
  return (
    <CustomizationProvider>
      
      <nav style={{ padding: '10px', background: '#222', color: '#fff' }}>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Chair</Link>
        <Link to="/mobile" style={{ margin: '0 10px', color: 'white' }}>Mobile</Link>
        <Link to="/waterbottle" style={{ margin: '0 10px', color: 'white' }}>Water Bottle</Link>
      </nav>

      
      <Experience />
      <Configurator />
    </CustomizationProvider>
  );
}

export default Mobile;
