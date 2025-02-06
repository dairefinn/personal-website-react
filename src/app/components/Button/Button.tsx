import { PropsWithChildren } from 'react'
import { useNavigate } from "react-router";
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
    
    const onClickInner = () => {
        if (onClick) {
            onClick();
            return;
        }

        if (route) {
            console.info("Navigating to route: ", route);
            let navigate = useNavigate();
            navigate(route);
        }
    };

    return (
        <div className={ "container-component-button"  +  (disabled ? "disabled" : "")} onClick={disabled ? undefined : onClickInner} title={title}>
            {/* TODO: Figure out how to implement route navigation and/or lazy-loading */}
            {/* routerLinkActive="active" [routerLink]="actionIsRoute ? route : undefined" */}
            {children}
        </div>
    )
}

export default Button