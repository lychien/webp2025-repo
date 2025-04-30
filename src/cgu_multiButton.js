import React from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';

const iconStyle = {
  fontSize: '40px',
  margin: '10px',
};

function MuLtiButton() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1 style={{ color: 'red', marginBottom: '40px', fontSize: '60px' }}>Hello CGU!!</h1>

      <div>
        <Button style={iconStyle}>
          <ShoppingCartIcon fontSize="inherit" />
        </Button>
        <Button style={iconStyle}>
          <DeleteIcon fontSize="inherit" />
        </Button>
        <Button style={iconStyle}>
          <AlarmIcon fontSize="inherit" />
        </Button>
      </div>
    </div>
  );
}

export default MuLtiButton;
