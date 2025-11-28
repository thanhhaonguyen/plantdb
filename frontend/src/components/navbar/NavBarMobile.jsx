import { DisclosurePanel } from '@headlessui/react';
import { MobileNavigationItem } from './MobileNavigationItem';

export const NavBarMobile = ({ navigation, mobileSubMenuOpen, onToggleSubMenu }) => {
    return (
        <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                    <MobileNavigationItem
                        key={item.name}
                        item={item}
                        mobileSubMenuOpen={mobileSubMenuOpen}
                        onToggleSubMenu={onToggleSubMenu}
                    />
                ))}
            </div>
        </DisclosurePanel>
    );
};  