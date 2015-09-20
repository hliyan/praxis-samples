export default [
    {
        label: 'Dashboard',
        link: '/'
    },
    {
        label: 'Admin',
        children: [
            { label: 'Roles', link: '/roles' },
            { label: 'Groups', link: '/groups' },
            { label: 'Users', link: '/users' }
        ]
    },
    {
        label: 'Settings',
        children: [
            { label: 'Your Profile', link: '/profile'}
        ]
    }
];