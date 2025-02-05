import { PropsWithChildren } from 'react'
import './Card.scss'

function PageWrapper(props: PropsWithChildren<{}>) {
    return (
        <div className="container-component-page-wrapper">
            <div className="page-wrapper-inner">
                {props.children}
            </div>
        </div>
    )
}

export default PageWrapper