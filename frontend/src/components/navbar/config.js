{/* do thiếu giống cây nên tạm thời dùng navigation demo chỉ có trang chủ và đậu
    const [navigation, setNavigation] = useState([
export const defaultNavigation = [
    { name: 'Trang chủ', href: '/'},
    { 
        name: 'Nhóm cây trồng',
        href: '/groups',
        children: []
    },
    // { name: 'Sâu bệnh hại', href: '/bug'}
]
*/}

export const defaultNavigation = [
    { name: 'Trang chủ', href: '/'},
    { name: 'Ngũ cốc', href: '/group/1'},
    { name: 'Cây họ đậu', href: '/group/7'}
]

