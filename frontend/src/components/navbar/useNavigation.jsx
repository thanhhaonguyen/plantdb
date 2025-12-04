import { useState, useEffect } from 'react';
import { defaultNavigation } from './config';

export const useNavigation = () => {
    const [navigation, setNavigation] = useState(defaultNavigation);
    
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState({});

    useEffect(() => {
        fetch(`/api/groups`)
            .then(res => res.json())
            .then(data => setNavigation(
                prev => prev.map(item => {
                    if (item.name === 'Nhóm cây trồng') {
                        return {
                            ...item,
                            children: data.map(group => ({
                                name: group.name,
                                href: `/group/${group.id}`
                            }))
                        };
                    }
                    return item;
                })
            ))
            .catch(err => console.error(err));
    }, []);

    const toggleMobileSubMenu = (itemName) => {
        setMobileSubMenuOpen(prev => ({
            ...prev,
            [itemName]: !prev[itemName]
        }));
    };

    return {
        navigation,
        mobileSubMenuOpen,
        toggleMobileSubMenu
    };
};