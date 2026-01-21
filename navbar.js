class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background: linear-gradient(135deg, #fd7c03ff 0%, #fc7c05ff 100%);
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    font-weight: bold;
                    font-size: 1.5rem;
                }
                
                .logo-icon {
                    margin-right: 0.75rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
                
                .nav-link {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 0;
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .nav-link:hover {
                    opacity: 0.9;
                }
                
                .nav-link:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: white;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover:after {
                    width: 100%;
                }
                
                .mobile-menu-button {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                .mobile-menu {
                    display: none;
                    background-color: white;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    padding: 1rem;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    z-index: 50;
                }
                
                .mobile-menu.active {
                    display: block;
                }
                
                .mobile-nav-link {
                    display: block;
                    padding: 0.75rem 0;
                    color: #fa7a03ff;
                    text-decoration: none;
                    font-weight: 500;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-button {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <a href="index.html" class="logo">
                    <i data-feather="home" class="logo-icon"></i>
                    <span>FISIP Digital</span>
                </a>
                
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-link">Home</a></li>
                    <li><a href="about.html" class="nav-link">Tentang Kami</a></li>
                    <li><a href="siakad.html" class="nav-link">SIAKAD</a></li>
                    <li><a href="elearning.html" class="nav-link">Pembelajaran Elektronik</a></li>
                    <li><a href="library.html" class="nav-link">Perpustakaan Elektronik</a></li>
                    <li><a href="journal.html" class="nav-link">Jurnal Elektronik</a></li>
                    <li><a href="accreditation.html" class="nav-link">Akreditasi</a></li>
                </ul>
                
                <button class="mobile-menu-button" id="mobile-menu-button">
                    <i data-feather="menu"></i>
                </button>
                
                <div class="mobile-menu hidden" id="mobile-menu">
                    <a href="index.html" class="mobile-nav-link">Home</a>
                    <a href="about.html" class="mobile-nav-link">Tentang Kami</a>
                    <a href="siakad.html" class="mobile-nav-link">SIAKAD</a>
                    <a href="elearning.html" class="mobile-nav-link">Pembelajaran Elektronik</a>
                    <a href="library.html" class="mobile-nav-link">Perpustakaan Elektronik</a>
                    <a href="journal.html" class="mobile-nav-link">Jurnal Elektronik</a>
                    <a href="accreditation.html" class="mobile-nav-link">Akreditasi</a>
                </div>
            </nav>
        `;
        
        // Initialize mobile menu functionality
        const mobileMenuButton = this.shadowRoot.getElementById('mobile-menu-button');
        const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }
}

customElements.define('custom-navbar', CustomNavbar);