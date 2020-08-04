import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Container, List, NavigationWrapper } from "./Navigation.css";

const Navigation = ({ items = [], RightElement }) => {
    return (
        <Container>
            <NavigationWrapper>
                <List>
                    {items.map(item => (
                       <li key={item.to}>
                           <Link to={item.to}>{item.content}</Link>
                       </li>
                    ))}
                </List>
                {RightElement}
            </NavigationWrapper>
        </Container>
    )
}

Navigation.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        to: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })),
    RightElement: PropTypes.node
}

export default Navigation;
