'use client';

import { useEventListener } from 'primereact/hooks';
import { DomHandler } from 'primereact/utils';
import { useContext, useEffect } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';
import { MenuContext } from '../contexts/MenuContext';

export const useSubmenuOverlayPosition = ({ target, overlay, container, when }) => {
    const { isSlim, isCompact, isHorizontal, setLayoutState } = useContext(LayoutContext);
    const { activeMenu } = useContext(MenuContext);
    const [bindScrollListener, unbindScrollListener] = useEventListener({
        type: 'scroll',
        target: container,
        listener: () => {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                overlayMenuActive: false,
                overlaySubmenuActive: false,
                staticMenuMobileActive: false,
                menuHoverActive: false,
                resetMenu: true
            }));
        }
    });

    const calculatePosition = () => {
        if (overlay) {
            const { left, top } = target.getBoundingClientRect();
            const { height: vHeight } = DomHandler.getViewport();
            const oHeight = overlay.offsetHeight;

            // reset
            overlay.style.top = overlay.style.left = '';

            if (isHorizontal()) {
                overlay.style.left = `${left - 80}px`;
            } else if (isSlim() || isCompact()) {
                const height = top + oHeight;
                overlay.style.top = vHeight < height ? `${top - (height - vHeight)}px` : `${top}px`;
            }
        }
    };

    useEffect(() => {
        when && bindScrollListener();

        return () => {
            unbindScrollListener();
        };
    }, [when]);

    useEffect(() => {
        when && calculatePosition();
    }, [when, activeMenu]);
};
