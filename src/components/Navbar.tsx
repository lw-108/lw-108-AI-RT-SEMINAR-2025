import React from 'react'
import StaggeredMenu from './ui/StaggeredMenu';
import ThemeToggle from './ThemeToggle'; // Your ThemeToggle component


const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/#about' },
  { label: 'Features', ariaLabel: 'View our features', link: '/#features' },
  { label: 'AI Tools', ariaLabel: 'Explore AI tools', link: '/#ai-tools' },
  { label: 'React', ariaLabel: 'Discover React components', link: '/#react' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/#newsletter' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' }
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ff6c01"
        openMenuButtonColor="#ff6c01"
        changeMenuColorOnOpen={true}
        colors={['#ff6c01', '#ff6c01']}
        logoUrl="https://lw-black.tiiny.site/LW-Black.svg"
        accentColor="#E65100"
        isFixed={true}
        themeToggle={<ThemeToggle />} // Pass ThemeToggle here
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
    </div>
  )
}

export default Navbar