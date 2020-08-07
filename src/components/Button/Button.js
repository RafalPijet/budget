import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {InlineButton, RegularButton} from "./Button.css";
import {Link} from "react-router-dom";

const Button = ({variant, children, ...otherProps}) => {
    const {to} = otherProps;
    const Component = useMemo(() => {
        switch (variant) {
            case 'inline':
                return InlineButton;
            case 'regular':
                return RegularButton;
            default:
                return RegularButton;
        }
    }, [variant]);

    const content = useMemo(() => (
        <Component {...otherProps}>{children}</Component>
    ), [otherProps, children])

    return to ? (
            <Link {...otherProps}>
                {content}
            </Link>)
        : (
            <>
                {content}
            </>
        )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['inline', 'regular'])
}

export default Button;
