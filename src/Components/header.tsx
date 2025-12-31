import Link from 'next/link';
import Image from 'next/image';
import styles from '../Styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
    <div className="logo">
        <Image
        src="/Logo.png"       // Path to image in /public folder
        alt="Band logo"
        width={80}
        height={80}
        />
    </div>
    <div>
        {/* <Link href="/mainmenu"> */}
            <Image
            src="/LogoMenu.png"       // Path to image in /public folder
            alt="Main Menu"
            width={80}
            height={80}
            />
        {/* </Link> */}
    </div>
    </header>
  );
}