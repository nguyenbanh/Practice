import React, { Dispatch, HTMLAttributeAnchorTarget, ReactNode, SetStateAction } from 'react';


/* Exported types */
export type MenuMode = 'static' | 'overlay' | 'horizontal' | 'slim' | 'compact' | 'reveal' | 'drawer';

export type ColorScheme = 'light' | 'dark' | 'dim';

export type MenuTheme = {
    name: string;
    color: string;
    logoColor: string;
    componentTheme: string;
};

export type ChildContainerProps = {
    children: ReactNode;
};

/* Breadcrumb Types */
export interface AppBreadcrumbProps {
    className?: string;
}

export interface Breadcrumb {
    labels?: string[];
    to?: string;
}

export interface BreadcrumbItem {
    label?: string;
    to?: string;
    items?: BreadcrumbItem[];
}

/* Context Types */
export type LayoutState = {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    rightMenuVisible: boolean;
    overlaySubmenuActive: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
    searchBarActive: boolean;
    resetMenu: boolean;
    sidebarActive: boolean;
    anchored: boolean;
};

export type LayoutConfig = {
    ripple: boolean;
    inputStyle: string;
    menuMode: MenuMode;
    menuTheme: string;
    colorScheme: ColorScheme;
    theme: string;
    scale: number;
};

export interface LayoutContextProps {
    layoutConfig: LayoutConfig;
    setLayoutConfig: Dispatch<SetStateAction<LayoutConfig>>;
    layoutState: LayoutState;
    setLayoutState: Dispatch<SetStateAction<LayoutState>>;
    showRightSidebar: () => void;
    onMenuToggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isCompact: () => boolean;
    isSlim: () => boolean;
    isHorizontal: () => boolean;
    isDesktop: () => boolean;
    breadcrumbs?: Breadcrumb[];
    setBreadcrumbs: Dispatch<SetStateAction<Breadcrumb[]>>;
    onSearchHide: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    toggleSearch: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}


export interface MenuContextProps {
    activeMenu: string;
    setActiveMenu: Dispatch<SetStateAction<string>>;
}




/* AppConfig Types */
export interface AppConfigProps {
    minimal?: boolean;
}

/* AppTopbar Types */
// export type NodeRef = MutableRefObject<ReactNode>;
export interface AppTopbarRef {
    menubutton?: HTMLButtonElement | null;
    topbarmenu?: HTMLDivElement | null;
    topbarmenubutton?: HTMLButtonElement | null;
}

/* AppMenu Types */
// type CommandProps = {
//     originalEvent: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
//     item: MenuModalItem;
// };

export interface MenuProps {
    model: MenuModal[];
}

export interface MenuModal {
    label?: string;
    icon?: string;
    items?: MenuModal[];
    to?: string;
    url?: string;
    target?: HTMLAttributeAnchorTarget;
    separator?: boolean;
}

export interface UseSubmenuOverlayPositionProps {
    target: HTMLElement | null;
    overlay: HTMLElement | null;
    container: HTMLElement | null;
    when?: any;
}

export interface AppMenuItem extends MenuModal {
    items?: AppMenuItem[];
    badgeClass?: string;
    class?: string;
    preventExact?: boolean;
    visible?: boolean;
    disabled?: boolean;
    replaceUrl?: boolean;
    // command?: ({ originalEvent, item }: CommandProps) => void;
}

export interface AppMenuItemProps {
    item?: AppMenuItem;
    parentKey?: string;
    index?: number;
    root?: boolean;
    className?: string;
}
