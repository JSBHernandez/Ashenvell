"use client";

import { usePathname } from 'next/navigation';
import NavbarEs from './Navbar';
import FooterEs from './Footer';
import NavbarEn from '../en/components/Navbar';
import FooterEn from '../en/components/Footer';

export function DynamicNavbar() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');
  
  return isEnglish ? <NavbarEn /> : <NavbarEs />;
}

export function DynamicFooter() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith('/en');
  
  return isEnglish ? <FooterEn /> : <FooterEs />;
}
