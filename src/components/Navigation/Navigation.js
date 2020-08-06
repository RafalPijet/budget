import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Container, List, NavigationWrapper } from "./Navigation.css";

const Navigation = ({ items = [], RightElement }) => {
    const { t } = useTranslation();

    return (
        <Container>
            <NavigationWrapper>
                <List>
                    {items.map(item => (
                       <li key={item.to}>
                           <Link to={item.to}>{t(item.content)}</Link>
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
