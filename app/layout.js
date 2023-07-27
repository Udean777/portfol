import Particle from './components/Particles';
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: `Sajudin Ma'ruf`,
  description: 'This web is made with 💙 by Udean',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-slate-300 to-slate-200 dark:bg-gradient-to-b dark:from-slate-600 dark:to-slate-500'>
        <Particle/>
        {children}
        <Analytics/>
        </body>
    </html>
  )
}
