import Link from 'next/link';
import styles from '../MainMenu/MainMenu.module.css';
import Image from 'next/image';
export default function MainMenu() {
  return (
    <div className={styles.MenuPage}>
       
        <nav className={styles.menu}>
        <ul>
            <header>
                <div>
                 <Image
                    src="/Logo.png"       // Path to image in /public folder
                    alt="Band logo"
                    width={80}
                    height={80}
                />
                </div>
            </header>
            <li>
            <Link href="/">Home</Link>
            </li>
            <li>
            <Link href="/about">About</Link>
            </li>
            <li>
            <Link href="/music">Music</Link>
            </li>
            <li>
            <Link href="/gallery">Gallery</Link>
            </li>
            <li>
            <Link href="/contact">Contact</Link>
            </li>
        </ul>
        </nav>
    </div>
  );
}
