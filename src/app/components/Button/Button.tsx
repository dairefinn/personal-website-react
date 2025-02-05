import { PropsWithChildren } from 'react'
import './Button.scss'

interface ButtonProps {
    disabled?: boolean
}

function Button({
    disabled = false,
    children
}: PropsWithChildren<ButtonProps>) {
    return (
        <div className={ "container-component-button"  +  (disabled ? "disabled" : "")}>
            {/* TODO: Figure out how to implement route navigation and/or lazy-loading */}
            {/* routerLinkActive="active" [routerLink]="actionIsRoute ? route : undefined" */}
            {children}
        </div>
    )
}

export default Button