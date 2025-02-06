import './NavigationTabs.scss';

export interface NavigationTabOption {
    label: string;
    route: string;
}

interface NavigationTabsProps {
    options: NavigationTabOption[];
}

function NavigationTabs({ options }: NavigationTabsProps) {
    return (
        <>
            <div>TODO: NavigationTabs</div>
        </>
    )
}

export default NavigationTabs