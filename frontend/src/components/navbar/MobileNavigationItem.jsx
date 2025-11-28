import { DisclosureButton } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const MobileNavigationItem = ({ item, mobileSubMenuOpen, onToggleSubMenu }) => {
    if (item.children) {
        return (
            <div>
                <button
                    onClick={() => onToggleSubMenu(item.name)}
                    className={classNames(
                        item.current
                            ? 'bg-green-700 text-white'
                            : 'text-white bg-transparent hover:bg-green-600 hover:text-white',
                        'w-full text-left flex items-center justify-between rounded-md px-3 py-2 text-base font-medium',
                    )}
                >
                    <span>{item.name}</span>
                    <ChevronDownIcon 
                        className={classNames(
                            'w-5 h-5 transition-transform duration-200',
                            mobileSubMenuOpen[item.name] ? 'rotate-180' : ''
                        )} 
                    />
                </button>
                
                {/* Submenu */}
                <div className={classNames(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    mobileSubMenuOpen[item.name] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}>
                    <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                            <a
                                key={child.name}
                                href={child.href}
                                className="block rounded-md px-3 py-2 text-sm text-gray-100 hover:bg-green-600 hover:text-white"
                            >
                                {child.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <DisclosureButton
            as="a"
            href={item.href}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
                item.current
                    ? 'bg-green-700 text-white'
                    : 'text-white bg-transparent hover:bg-green-600 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
            )}
        >
            {item.name}
        </DisclosureButton>
    );
};