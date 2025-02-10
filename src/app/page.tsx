// import Image from "next/image";
// import styles from "./page.module.css";
import Link from 'next/link';
import {Image} from '@/components';

export default function Home() {
    return (
        <main>
            <Image />
            <h1>Welcome to this NextJS Course!</h1>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href="/about">About Us</Link></p>
        </main>
    );
}
// <img src="/logo.png" alt="A server surrounded by magic sparkles."/>
