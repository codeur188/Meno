<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meno - Gestion de Restaurant Intelligente</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body>
    <!-- Overlay mobile -->
    <div class="mobile-overlay" id="mobileOverlay"></div>

    <!-- Navigation -->
    <header>
        <nav>
            <!-- LOGO -->
            <a href="#" class="logo has-image" data-page="home">
                <i class="fas fa-utensils logo-icon"></i>
                <img src="{{ asset('images/meno.png') }}" alt="Meno Logo" class="logo-img">

            </a>

            <div class="nav-menu" id="navMenu">
                <ul>
                    <li><a class="nav-link" data-page="home">Accueil</a></li>
                    <li><a class="nav-link" data-page="about">À Propos</a></li>
                    <li><a class="nav-link" data-page="contact">Contact</a></li>
                </ul>
                <button class="nav-button nav-link" data-page="contact">Essayer</button>
            </div>
            <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Menu">
                <i class="fas fa-bars"></i>
                <i class="fas fa-times"></i>
            </button>
        </nav>
    </header>

    <!-- HOME PAGE -->
    <div id="home" class="page active">
        <section class="hero">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Gérez votre restaurant intelligemment</h1>
                    <p>Meno est la solution complète pour moderniser votre établissement. Menu numérique, gestion des commandes en temps réel et analytics détaillées.</p>
                    <div class="hero-buttons">
                        <button class="btn btn-primary nav-link" data-page="contact">Contactez-nous</button>
                        <button class="btn btn-secondary nav-link" data-page="about">En Savoir Plus</button>
                    </div>
                </div>
                <div class="hero-image has-image anim-combo">
                    <i class="fas fa-mobile-alt hero-icon"></i>
                    <img src="{{ asset('images/meno1.png') }}" alt="Meno Application" class="hero-img">
                </div>
            </div>
        </section>

        <section class="features">
            <div class="features-container">
                <div class="section-header">
                    <h2>Nos Fonctionnalités</h2>
                    <p>Tout ce dont vous avez besoin pour gérer votre restaurant efficacement</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-qrcode"></i></div><h3>Menu QR</h3><p>Menu numérique accessible via QR code. Vos clients peuvent consulter votre menu sur leurs téléphones en quelques secondes.</p></div>
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-clipboard-list"></i></div><h3>Gestion des Commandes</h3><p>Système de suivi des commandes en temps réel. Réduisez les erreurs et améliorez la satisfaction des clients.</p></div>
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-tablet-alt"></i></div><h3>Tablettes de Présentation</h3><p>Gérez plusieurs tablettes pour présenter votre menu aux clients. Interface intuitive et personnalisable.</p></div>
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-chart-bar"></i></div><h3>Analytics et Rapports</h3><p>Obtenez des insights détaillés sur votre activité. Analysez les tendances et optimisez vos performances.</p></div>
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-users"></i></div><h3>Gestion d'Équipe</h3><p>Gérez facilement votre personnel. Attribuez les rôles et suivez les performances de chaque serveur.</p></div>
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-lock"></i></div><h3>Sécurité Garantie</h3><p>Vos données sont sécurisées avec nos serveurs cloud. Accès multicomptes avec différents niveaux de permissions.</p></div>
                </div>
            </div>
        </section>
    </div>

    <!-- ABOUT PAGE -->
    <div id="about" class="page">
        <section class="about">
            <div class="about-container">

                <div class="about-image has-image anim-breathe">
                    <i class="fas fa-lightbulb about-icon"></i>
                    <img src="{{ asset('images/meno2.png') }}" alt="À Propos de Meno" class="about-img">
                </div>
                <div class="about-text">
                    <h2>À Propos de Meno</h2>
                    <p>Meno est née d'une vision simple : moderniser la gestion des restaurants en utilisant les dernières technologies. Nous comprenons les défis quotidiens que vous affrontez.</p>
                    <p>Notre équipe d'experts en restauration et en technologie a créé une solution intuitive et puissante. Meno a aidé des centaines de restaurants à augmenter leur efficacité de 40% et la satisfaction des clients de 50%.</p>
                    <p>Nous croyons que chaque restaurant, quel que soit sa taille, mérite les meilleurs outils pour réussir.</p>

                </div>
            </div>
        </section>

        <section class="features features-white">
            <div class="features-container">
                <div class="section-header">
                    <h2>Notre Mission</h2>
                    <p>Transformer la façon dont les restaurants opèrent pour créer une meilleure expérience client</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-handshake"></i></div><h3>Partenariat</h3><p>Nous travaillons comme des partenaires avec nos clients, pas juste comme des fournisseurs. Votre succès est notre succès.</p></div>
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-rocket"></i></div><h3>Innovation</h3><p>Nous innovons continuellement pour vous offrir les meilleures solutions et rester en avant de la courbe technologique.</p></div>
                    <div class="feature-card"><div class="feature-icon"><i class="fas fa-heart"></i></div><h3>Excellence</h3><p>Nous visons l'excellence dans chaque aspect. De la qualité du produit au support client exceptionnel.</p></div>
                </div>
            </div>
        </section>
    </div>

    <!-- CONTACT PAGE -->
    <div id="contact" class="page">
        <section class="contact">
            <div class="contact-container">
                <!-- Image à gauche -->
                <div class="contact-image has-image anim-combo">
                    <i class="fas fa-envelope-open-text contact-icon"></i>
                    <img src="{{ asset('images/meno3.png') }}" alt="Contactez Meno" class="contact-img">
                </div>

                <!-- Infos à droite -->
                <div class="contact-info">
                    <h2>Nous Contacter</h2>
                    <p class="contact-info-description">Vous avez des questions ? Notre équipe est prête à vous aider.</p>

                    <div class="info-card">
                        <div class="info-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="info-content"><h3>Adresse</h3><p>Lomé, Togo</p></div>
                    </div>

                    <div class="info-card">
                        <div class="info-icon"><i class="fas fa-phone"></i></div>
                        <div class="info-content"><h3>Téléphone</h3><p>+228 70386585 / +228 92617865</p></div>
                    </div>

                    <div class="info-card">
                        <div class="info-icon"><i class="fas fa-envelope"></i></div>
                        <div class="info-content"><h3>Email</h3><p>contact@meno.com</p></div>
                    </div>



                    <div class="social-section">
                        <h3>Suivez-nous</h3>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <a class="footer-nav-link" data-page="home">Accueil</a>
                <a class="footer-nav-link" data-page="about">À Propos</a>
                <a class="footer-nav-link" data-page="contact">Contact</a>

            </div>
            <p>&copy; 2026 Meno. Tous droits réservés. Gestion intelligente de restaurant.</p>
        </div>
    </footer>

    {{-- Les scripts JS sont chargés par Vite via @vite ci-dessus --}}
</body>
</html>
