export interface NavLink {
	name: string
	href: string
}

export const navLinks: NavLink[] = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Settings',
		href: '/settings',
	},
	{
		name: 'Cheese',
		href: '/cheese',
	},
]
export default navLinks
