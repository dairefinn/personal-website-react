import { PropsWithChildren } from 'react'
import './Button.scss'

interface ButtonProps {
    disabled?: boolean;
    title?: string;
    onClick?: () => void;
}

function Button({
    disabled = false,
    title = "",
    onClick,
    children
}: PropsWithChildren<ButtonProps>) {
    return (
        <div className={ "container-component-button"  +  (disabled ? "disabled" : "")} onClick={disabled ? undefined : onClick} title={title}>
            {/* TODO: Figure out how to implement route navigation and/or lazy-loading */}
            {/* routerLinkActive="active" [routerLink]="actionIsRoute ? route : undefined" */}
            {children}
        </div>
    )
}

export default Button