import './SidebarLink.scss'


export enum SidebarItemType {
    EXTERNAL = 'EXTERNAL',
    INTERNAL = 'INTERNAL',
    DOWNLOAD = 'DOWNLOAD'
}

export interface SidebarLinkItem {
    title: string;
    icon: string;
    route: string;
    itemType: SidebarItemType;
}

function SidebarLink(sidebarItem: SidebarLinkItem) {
    if (!sidebarItem) return null;

    const LINK_INNER_CONTENT = () => (
        <>
            <span className={sidebarItem.icon}></span>
            <span className="navigation-link-title">{sidebarItem.title}</span>
            {(() => {
                switch(sidebarItem.itemType) {
                    case SidebarItemType.EXTERNAL:
                        return <span className="sidebar-type-icon fa fa-fw fa-external-link"></span>
                    case SidebarItemType.DOWNLOAD:
                        return <span className="sidebar-type-icon fa fa-fw fa-download"></span>
                }
            })()}
        </>
    )

    return (
        <li>
            {(() => {
                switch(sidebarItem.itemType) {
                    case SidebarItemType.EXTERNAL:
                        return (
                            <a href={sidebarItem.route} target="_blank">
                                { LINK_INNER_CONTENT() }
                            </a>
                        )
                    case SidebarItemType.INTERNAL:
                        return (
                            <div>Temp</div>
                            // TODO: Figure out routing and lazy-loading
                            // <a routerLink={sidebarItem.route} routerLinkActive="active">
                            //     { LINK_INNER_CONTENT() }
                            // </a>
                        )
                    case SidebarItemType.DOWNLOAD:
                        return (
                            <a href={sidebarItem.route} download>
                                { LINK_INNER_CONTENT() }
                            </a>
                        )
                }

                return null;
            })()}
        </li>
    )
}

export default SidebarLink