import Link from 'next/link';
import {HeaderImage} from '@/components';

export default function Home() {
    return (
        <main>
            <HeaderImage />
            <h1>Welcome to this NextJS Course!</h1>
            <p>🔥 Let&apos;s get started! 🔥</p>
            <p><Link href="/about">About Us</Link></p>
        </main>
    );
}
// <img src="/logo.png" alt="A server surrounded by magic sparkles."/>
