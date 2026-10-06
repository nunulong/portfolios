import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import './Nav.css';

const RESUME_URL =
  'https://docs.google.com/document/d/1bR3q7Yl94M_iFColMktUy24fWwgioBxB/edit?usp=drive_link&ouid=107575394346975930226&rtpof=true&sd=true';

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => setMobileOpen((prev) => !prev);
  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Brand */}
        <Link to="/" className="nav-brand" onClick={closeMenu}>
          Ting Wang
        </Link>

        {/* Desktop Links */}
        <nav>
          <ul className="nav-links-list">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <a
                href="https://nunulong.github.io/ting-blog/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <span>Blog</span>
                <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
              </a>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline nav-resume-btn"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <button
            onClick={toggleMenu}
            className="nav-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav-panel ${mobileOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-items">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `mobile-nav-item-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `mobile-nav-item-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `mobile-nav-item-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `mobile-nav-item-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <a
              href="https://nunulong.github.io/ting-blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-nav-item-link"
              onClick={closeMenu}
            >
              <span>Blog</span>
              <ArrowUpRight size={16} />
            </a>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `mobile-nav-item-link ${isActive ? 'active' : ''}`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
