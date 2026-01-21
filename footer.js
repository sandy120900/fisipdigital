class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background: #f07a0cff;
                    color: white;
                    padding: 3rem 2rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                
                .footer-section h3:after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -8px;
                    width: 40px;
                    height: 2px;
                    background: #f86502ff;
                }
                
                .footer-section ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-section li {
                    margin-bottom: 0.75rem;
                }
                
                .footer-section a {
                    color: #e5e7eb;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .footer-section a:hover {
                    color: #a5b4fc;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-links a:hover {
                    background: #fc5f04ff;
                    transform: translateY(-3px);
                }
                
                .copyright {
                    text-align: center;
                    padding-top: 2rem;
                    margin-top: 2rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: #9ca3af;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Tentang FISIP</h3>
                        <p class="text-gray-300">Fakultas Ilmu Sosial dan Ilmu Politik merupakan salah satu fakultas unggulan di universitas kami.</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Link Cepat</h3>
                        <ul>
                            <li><a href="siakad.html">SIAKAD</a></li>
                            <li><a href="elearning.html">E-Learning</a></li>
                            <li><a href="library.html">Perpustakaan</a></li>
                            <li><a href="journal.html">Jurnal</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Kontak</h3>
                        <ul>
                            <li><i data-feather="mail" class="inline mr-2"></i>unpi.ac.id</li>
                            <li><i data-feather="phone" class="inline mr-2"></i> (+628) 2293-338-813</li>
                            <li><i data-feather="map-pin" class="inline mr-2"></i> Jl. Wolter Mongisidi 129</li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Sosial Media</h3>
                        <div class="social-links">
                            <a href="https://www.facebook.com/share/17VW5yj1kN/" target="_blank" class="icon fb">FB</a>
                            <a href="https://www.instagram.com/fisipunpiupdate?igsh=c2lmcmo1aWxtMmZy" target="_blank" class="icon IG">IG</a>
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    <p>&copy; 2024 FISIP Digital Hub. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);