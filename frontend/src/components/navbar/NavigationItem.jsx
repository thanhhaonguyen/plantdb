import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {NavLink, useLocation} from "react-router-dom";

const classNames = (...classes) => classes.filter(Boolean).join(' ');

export const NavigationItem = ({ item }) => {
    const location = useLocation();
    if (item.children) {
        // muốn "style được chọn" của nút Nhóm cây trồng ở các trang bắt đầu là /group với /species
        // dựa trên so sánh url người dùng.
        // Còn với các nút khác ở dưới thì item.href trực tiếp từ useNavigation.jsx
        const active = (
            location.pathname.startsWith("/groups") ||
            location.pathname.startsWith("/species")

        )

        return (
            <div className="relative group">
                <NavLink
                    to={item.href}
                    className={classNames(
                            active
                                ? 'bg-green-700 text-white' 
                                : 'bg-transparent text-white hover:bg-green-600 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white inline-flex items-center gap-1'
                        )}
                >
                    {item.name}
                    <ChevronDownIcon className="w-4 h-4" />
                </NavLink>
                
                {/* Dropdown menu */}
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                        {item.children.map((child) => (
                            <a
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-lime-50 hover:text-green-700"
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
        <NavLink
            to={item.href}
            className={({isActive}) => 
                classNames(
                    isActive
                        ? 'bg-green-700 text-white' 
                        : 'bg-transparent text-white hover:bg-green-600 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'
                )
            }
        >
            {item.name}
        </NavLink>
    );
};