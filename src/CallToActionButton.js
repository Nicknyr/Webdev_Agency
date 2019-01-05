import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

bootstrapUtils.addStyle(Button, 'custom');

const CustomButton = () => {
  return (
    <div>
    <Button bsStyle="custom">Hi</Button>
    </div>
  );

}


export default CustomButton;
