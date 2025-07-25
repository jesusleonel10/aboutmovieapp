"use client"

import { useState } from "react";
import Link from "next/link";
import './Header.scss';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
        <div className="logo-menu">
        <div className="logo">
            <h1>
                <Link href="/">
                    About Movie
                </Link>
            </h1>
        </div>
        
        <div id="button-menu" className={`button-menu ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div id="sidebar" className={`sidebar ${isOpen && 'sidebar--open'}`}>
            <ul>
                <li><Link href="/" className="sidebar__items" onClick={() => setIsOpen(!isOpen)}>Inicio</Link></li>
                <li><Link href="/movie/list" className="sidebar__items" data-link='movie' onClick={() => setIsOpen(!isOpen)}>Películas</Link></li>
                <li><Link href="/tv/list" className="sidebar__items" data-link='tv' onClick={() => setIsOpen(!isOpen)}>Series</Link></li>
                <li><Link href="/person/list" className="sidebar__items" onClick={() => setIsOpen(!isOpen)}>Gente</Link></li>
                <li><Link href="/about" className="sidebar__items" onClick={() => setIsOpen(!isOpen)}>Acerca de</Link></li>
            </ul>
        </div>

        <nav className="menu">
            <Link href="/" 
                className="menu__items"
                >Inicio
            </Link>
            <Link href="/movie/list" 
                className="menu__items" 
                data-link='movie' 
                >Películas
            </Link>
            
            <Link href="/tv/list" 
                className="menu__items" 
                data-link='tv' 
                >Series
            </Link>
            <Link href="/person/list" 
                className="menu__items" 
                data-link='person' 
                >Gente
            </Link>
            <Link href="/about"
                className="menu__items"
                >Acerca de
            </Link>
        </nav>
        </div>
    </header>
  )
}