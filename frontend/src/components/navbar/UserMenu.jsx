import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

export const UserMenu = ({ user, onLogout }) => {
    if (!user) {
        return (
            <div className="relative ml-3">
                <a
                    href="/login"
                    className="relative flex items-center gap-2 rounded-full px-4 py-1.5 bg-white/10 text-white font-medium text-sm hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all outline outline-2 -outline-offset-1 outline-white/50 hover:outline-green-300"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={2} 
                        stroke="currentColor" 
                        className="size-5"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" 
                        />
                    </svg>
                    Đăng nhập
                </a>
            </div>
        );
    }

    return (
        <Menu as="div" className="relative ml-3">
            <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Mở menu người dùng</span>
                <img
                    alt=''
                    className="size-8 rounded-full bg-transparent outline outline-2 -outline-offset-1 outline-white hover:outline-green-300 transition-all"
                    src='https://icons.veryicon.com/png/o/internet--web/web-interface-flat/6606-male-user.png'
                />
            </MenuButton>
            
            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
                {user.role === 'admin' && (
                    <MenuItem>
                        <a
                            href="/dashboard"
                            className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-lime-50 data-focus:text-green-700 data-focus:outline-hidden"
                        >
                            Dashboard Admin
                        </a>
                    </MenuItem>
                )}
                <MenuItem>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-lime-50 data-focus:text-green-700 data-focus:outline-hidden"
                    >
                        Hồ sơ của bạn
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-lime-50 data-focus:text-green-700 data-focus:outline-hidden"
                    >
                        Cài đặt
                    </a>
                </MenuItem>
                <MenuItem>
                    <a
                        onClick={onLogout}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-lime-50 data-focus:text-green-700 data-focus:outline-hidden cursor-pointer"
                    >
                        Đăng xuất
                    </a>
                </MenuItem>
            </MenuItems>
        </Menu>
    );
};