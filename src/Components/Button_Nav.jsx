import React, {forwardRef} from "react";


const Button = forwardRef(function Button(
    {children, onclick}, ref)
    {
        return ( 
            <button className="toggle-btn"  ref={ref} onClick={onclick}>
                {children}
            </button>
        );
    });

    export default  Button;