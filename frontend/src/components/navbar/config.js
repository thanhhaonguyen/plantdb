//do thiếu giống cây nên tạm thời dùng navigation demo chỉ có trang chủ và đậu

export const defaultNavigation = [
    { name: 'Trang chủ', href: '/'},
    { 
        name: 'Nhóm cây trồng',
        href: '/groups',
        children: []
    },
    // { name: 'Sâu bệnh hại', href: '/bug'}
]

{/* 
export const defaultNavigation = [
    { name: 'Đậu nành', href: '/species-type/1'},
    { name: 'Lúa', href: '/species-type/2'},
];
*/}

