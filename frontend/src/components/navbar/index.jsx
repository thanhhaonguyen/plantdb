import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from './useNavigation';
import { NavBarDesktop } from './NavBarDesktop';
import { NavBarMobile } from './NavBarMobile';
import { UserMenu } from './UserMenu';
import { SearchBar } from './SearchBar';
import logo from "../../assets/logo.png";

export default function NavBar() {
    const { user, logout } = useContext(AuthContext);
    const { navigation, mobileSubMenuOpen, toggleMobileSubMenu } = useNavigation();

    {/*
    const handleSearch = (searchTerm) => {
        console.log('Tìm kiếm:', searchTerm);
    };
    */}
    
    return (
        <Disclosure as="nav" className="relative bg-lime-500">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"> 
                <div className="relative flex h-16 items-center justify-between">
                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-600 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Mở menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>

                    {/* Logo và Navigation */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:flex shrink-0 items-center">
                            <a href='/'>
                                <img
                                    alt="Ảnh logo"
                                    src={logo}
                                    className="h-12 w-auto"
                                />
                            </a>
                        </div>

                        <NavBarDesktop navigation={navigation} />
                    </div>

                    {/* Right side items */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <SearchBar onSearch={handleSearch} /> */}
                        
                        {/* Notification button 
                        
                        <button 
                            type="button" 
                            className="relative rounded-full p-1 text-white hover:text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-lime-500"
                        >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Xem thông báo</span>
                            <BellIcon aria-hidden="true" className="size-6"/>
                        </button>

                        */}

                        <UserMenu user={user} onLogout={logout} />
                    </div>
                </div>
            </div>

            <NavBarMobile 
                navigation={navigation}
                mobileSubMenuOpen={mobileSubMenuOpen}
                onToggleSubMenu={toggleMobileSubMenu}
            />
        </Disclosure>
    );
}