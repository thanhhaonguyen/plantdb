import { useState, useEffect } from 'react';

export const useNavigation = () => {
    const [navigation, setNavigation] = useState([
        { name: 'Trang chủ', href: '/'},
        { 
            name: 'Nhóm cây trồng',
            href: '/groups',
            children: []
        },
        // { name: 'Sâu bệnh hại', href: '/bug'}
    ]);

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