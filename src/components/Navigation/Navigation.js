import React from "react";
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button } from "components";
import { Container, List, NavigationWrapper } from "./Navigation.css";

const Navigation = ({ items = [], RightElement }) => {
    const { t } = useTranslation();

    return (
        <Container>
            <NavigationWrapper>
                <List>
                    {items.map(item => (
                       <li key={item.to}>
                           <Button variant='inline' to={item.to}>{t(item.content)}</Button>
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
