import React from 'react';
import Button from '@material-ui/core/Button'

const CustomButton = ({type,variant,color,classes,caption,onclick}) =>(
    <Button type={type} fullWidth variant={variant} color={color} onClick={onclick} className={classes}>
    {caption}
    </Button>
);

export default CustomButton;