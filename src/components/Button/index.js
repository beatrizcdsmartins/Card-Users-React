import React from "react";

import {Button} from './styles'

function myButton({children, ...props}){

    return <Button {...props}>{children}</Button>

}

export default myButton