import Link from 'next/link';

export default function SideNav() {

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Orders', path: '/orders' },
    { name: 'Customers', path: '/customers' },
    { name: 'Settings', path: '/settings' },
  ];

  return (
    <nav className={'red'}>
      <ul>
        {navItems.map((item) => (
          <li key={item.path} className={item.path }>
            <Link href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
