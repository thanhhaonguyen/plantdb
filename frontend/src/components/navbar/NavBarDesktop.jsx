import { NavigationItem } from './NavigationItem';

export const NavBarDesktop = ({ navigation }) => {
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {navigation.map((item) => (
                    <NavigationItem key={item.name} item={item} />
                ))}
            </div>
        </div>
    );
};