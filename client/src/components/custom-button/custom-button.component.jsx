import React from 'react';
import { CustomButtonContainer } from './custom-buttom.styles';

const CustomButton = ({ children, ...props }) => {
  //console.log(props);
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default CustomButton;
