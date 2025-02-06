import { PropsWithChildren } from 'react'
import { useLocation, useNavigate } from "react-router";
import './Button.scss'

interface ButtonProps {
    actionIsRoute?: boolean;
    route?: string;
    disabled?: boolean;
    title?: string;
    onClick?: () => void;
}

function Button({
    disabled = false,
    route,
    title,
    onClick,
    children
}: PropsWithChildren<ButtonProps>) {
    const navigate = useNavigate();
    const location = useLocation();
    
    const onClickInner = () => {
        if (onClick) {
            onClick();
            return;
        }

        if (route) {
            navigate(route);
        }
    };

    const isActive = route && location.pathname === route;

    return (
        <div className={ "container-component-button"  +  (disabled ? " disabled" : "") + (isActive ? " active" : "")} onClick={disabled ? undefined : onClickInner} title={title}>
            {children}
        </div>
    )
}

export default Button