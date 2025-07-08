import React, { useEffect, useRef, useState } from 'react';
import {
  ShoppingCart,
  Clock,
  ChefHat,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Bell,
  Heart,
  Zap,
  Shield,
  Smartphone,
  Sparkles,
  TrendingUp,
  Award,
  Target
} from 'lucide-react';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const features = [
    {
      icon: ShoppingCart,
      title: "Gestión Inteligente",
      description: "Organiza tu despensa de forma eficiente con categorías personalizadas y búsqueda avanzada.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Clock,
      title: "Control de Vencimientos",
      description: "Recibe notificaciones antes de que tus productos caduquen y evita el desperdicio.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: ChefHat,
      title: "Recetas Personalizadas",
      description: "Genera recetas únicas basadas en los ingredientes disponibles en tu despensa.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Users,
      title: "Red Social",
      description: "Conecta con familia y amigos para gestionar despensas compartidas mediante invitaciones.",
      color: "from-green-400 to-teal-500"
    }
  ];

  const benefits = [
    "Reduce el desperdicio de alimentos hasta un 40%",
    "Ahorra tiempo en la planificación de comidas",
    "Mantén inventarios actualizados automáticamente",
    "Comparte y colabora con tu familia",
    "Descubre nuevas recetas cada día"
  ];

  const stats = [
    { number: "50K+", label: "Usuarios activos", icon: Users },
    { number: "2M+", label: "Productos gestionados", icon: Target },
    { number: "40%", label: "Menos desperdicio", icon: TrendingUp },
    { number: "4.9★", label: "Calificación promedio", icon: Award }
  ];

  const handleDownload = () => {
    window.open("https://www.dropbox.com/scl/fi/sikxfx7cefo39hwv8etlb/DespensaGO-app.apk?rlkey=xka5yg2wof52iojh0vmaa3h31&e=6&st=zc266lm7&dl=1", "_blank");
    scrollToDownload(); 
  };

  const scrollToDownload = () => {
    const downloadSection = document.querySelector('#download-section');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F7FA] overflow-x-hidden">
      <style>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-on-scroll.delay-100 { transition-delay: 0.1s; }
        .animate-on-scroll.delay-200 { transition-delay: 0.2s; }
        .animate-on-scroll.delay-300 { transition-delay: 0.3s; }
        .animate-on-scroll.delay-400 { transition-delay: 0.4s; }
        .animate-on-scroll.delay-500 { transition-delay: 0.5s; }
        .animate-on-scroll.delay-600 { transition-delay: 0.6s; }
        .animate-on-scroll.delay-700 { transition-delay: 0.7s; }
        .animate-on-scroll.delay-800 { transition-delay: 0.8s; }
        
        .hero-entrance {
          animation: heroEntrance 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .logo-bounce {
          animation: logoBounce 2s ease-in-out infinite;
        }
        
        .text-shimmer {
          background: linear-gradient(90deg, #3E4C59 25%, #7CA98D 50%, #3E4C59 75%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(45deg, #7CA98D, #F2F7FA, #7CA98D);
          background-size: 300% 300%;
          animation: gradientShift 4s ease infinite;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 2px;
          background: white;
          border-radius: inherit;
          z-index: 1;
        }
        
        .gradient-border > * {
          position: relative;
          z-index: 2;
        }
        
        .floating-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .floating-element {
          position: absolute;
          opacity: 0.1;
          animation: floatingElement 20s linear infinite;
        }
        
        .floating-element:nth-child(1) { left: 10%; animation-delay: 0s; }
        .floating-element:nth-child(2) { left: 20%; animation-delay: -5s; }
        .floating-element:nth-child(3) { left: 30%; animation-delay: -10s; }
        .floating-element:nth-child(4) { left: 40%; animation-delay: -15s; }
        .floating-element:nth-child(5) { left: 50%; animation-delay: -20s; }
        .floating-element:nth-child(6) { left: 60%; animation-delay: -25s; }
        .floating-element:nth-child(7) { left: 70%; animation-delay: -30s; }
        .floating-element:nth-child(8) { left: 80%; animation-delay: -35s; }
        
        .morphing-blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: morphing 8s ease-in-out infinite;
        }
        
        .card-tilt {
          transform-style: preserve-3d;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-tilt:hover {
          transform: rotateX(5deg) rotateY(5deg) translateZ(20px);
        }
        
        .parallax-bg {
          transform: translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0);
          transition: transform 0.1s ease-out;
        }
        
        .counter-animation {
          animation: countUp 2s ease-out forwards;
        }
        
        .ripple-effect {
          position: relative;
          overflow: hidden;
        }
        
        .ripple-effect::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(124, 169, 141, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .ripple-effect:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .typewriter {
          overflow: hidden;
          border-right: 3px solid #7CA98D;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(124, 169, 141, 0.3);
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        .bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .slide-up-stagger > * {
          animation: slideUpStagger 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: calc(var(--stagger) * 0.15s);
          opacity: 0;
          transform: translateY(30px);
        }
        
        .rotate-on-hover {
          transition: transform 0.3s ease;
        }
        
        .rotate-on-hover:hover {
          transform: rotate(360deg);
        }
        
        .scale-pulse {
          animation: scalePulse 2s ease-in-out infinite;
        }
        
        .loading-entrance {
          opacity: 0;
          animation: loadingEntrance 1s ease-out forwards;
        }
        
        @keyframes heroEntrance {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes logoBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-5px) rotate(-5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes floatingElement {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes morphing {
          0%, 100% {
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          }
          25% {
            border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
          }
          50% {
            border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
          }
          75% {
            border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
          }
        }
        
        @keyframes countUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #7CA98D; }
        }
        
        @keyframes glow {
          from { box-shadow: 0 0 20px rgba(124, 169, 141, 0.3); }
          to { box-shadow: 0 0 30px rgba(124, 169, 141, 0.6); }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            opacity: 1;
            transform: scale(1.05) translateY(-10px);
          }
          70% {
            transform: scale(0.9) translateY(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideUpStagger {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scalePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes loadingEntrance {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .floating {
          animation: floating 6s ease-in-out infinite;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-2deg); }
        }
        
        .pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        
        .stagger-animation > * {
          animation-delay: calc(var(--stagger) * 0.1s);
        }
        
        .magnetic-hover {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .magnetic-hover:hover {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>

      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-element">
          <ShoppingCart className="w-8 h-8 text-[#7CA98D]" />
        </div>
        <div className="floating-element">
          <ChefHat className="w-6 h-6 text-[#7CA98D]" />
        </div>
        <div className="floating-element">
          <Clock className="w-7 h-7 text-[#7CA98D]" />
        </div>
        <div className="floating-element">
          <Heart className="w-5 h-5 text-[#7CA98D]" />
        </div>
        <div className="floating-element">
          <Star className="w-6 h-6 text-[#7CA98D]" />
        </div>
        <div className="floating-element">
          <Sparkles className="w-8 h-8 text-[#7CA98D]" />
        </div>
        <div className="floating-element">
          <Users className="w-7 h-7 text-[#7CA98D]" />
        </div>
        <div className="floating-element">
          <Zap className="w-6 h-6 text-[#7CA98D]" />
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-[#7CA98D]/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`flex items-center space-x-2 ${isLoaded ? 'hero-entrance' : ''}`}>
              <div className="w-8 h-8 bg-gradient-to-br from-[#7CA98D] to-[#6a9179] rounded-lg flex items-center justify-center logo-bounce shadow-lg">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-shimmer">DespensaGO</span>
            </div>
            <nav className={`hidden md:flex space-x-8 ${isLoaded ? 'slide-up-stagger' : ''}`}>
              <a href="#features" className="text-[#3E4C59] hover:text-[#7CA98D] transition-all hover:scale-110 magnetic-hover" style={{ '--stagger': 0 } as React.CSSProperties}>Características</a>
              <a href="#how-it-works" className="text-[#3E4C59] hover:text-[#7CA98D] transition-all hover:scale-110 magnetic-hover" style={{ '--stagger': 1 } as React.CSSProperties}>Cómo funciona</a>
              <a href="#community" className="text-[#3E4C59] hover:text-[#7CA98D] transition-all hover:scale-110 magnetic-hover" style={{ '--stagger': 2 } as React.CSSProperties}>Comunidad</a>
            </nav>
            <div className={`flex items-center ${isLoaded ? 'bounce-in' : ''}`}>
              <button
                onClick={handleDownload}
                className="bg-gradient-to-r from-[#7CA98D] to-[#6a9179] text-white px-6 py-2 rounded-full hover:from-[#6a9179] hover:to-[#5a7f69] transition-all hover:scale-110 ripple-effect glow-effect shadow-lg"
              >
                Descargar App
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="parallax-bg absolute inset-0 morphing-blob bg-gradient-to-br from-[#7CA98D]/5 to-[#7CA98D]/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isLoaded ? 'hero-entrance' : ''}`}>
              <div className="inline-flex items-center bg-gradient-to-r from-[#7CA98D]/20 to-[#7CA98D]/10 text-[#7CA98D] px-6 py-3 rounded-full text-sm font-medium mb-6 scale-pulse border border-[#7CA98D]/30">
                <Zap className="w-4 h-4 mr-2 rotate-on-hover" />
                Gestión inteligente de despensa
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#3E4C59] mb-6 leading-tight">
                Tu despensa nunca fue tan
                <span className="text-shimmer block typewriter"> inteligente</span>
              </h1>
              <p className="text-xl text-[#3E4C59]/70 mb-8 leading-relaxed loading-entrance">
                Controla vencimientos, genera recetas personalizadas y comparte con tu familia.
                DespensaGO transforma la gestión de tu hogar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToDownload}
                  className="bg-gradient-to-r from-[#7CA98D] to-[#6a9179] text-white px-8 py-4 rounded-full font-semibold hover:from-[#6a9179] hover:to-[#5a7f69] transition-all transform hover:scale-110 flex items-center justify-center ripple-effect glow-effect shadow-xl"
                >
                  Comenzar ahora
                  <ArrowRight className="w-5 h-5 ml-2 magnetic-hover" />
                </button>
              </div>
            </div>
            <div className={`relative ${isLoaded ? 'hero-entrance delay-300' : ''}`}>
              <div className="bg-gradient-to-br from-[#7CA98D]/20 to-[#7CA98D]/5 rounded-3xl p-8 backdrop-blur-sm floating morphing-blob">
                <div className="bg-white rounded-2xl shadow-2xl p-6 card-tilt gradient-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#3E4C59]">Mi Despensa</h3>
                    <div className="flex items-center space-x-2">
                      <Bell className="w-5 h-5 text-[#7CA98D] rotate-on-hover" />
                      <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-2 py-1 rounded-full scale-pulse shadow-lg">3</span>
                    </div>
                  </div>
                  <div className="space-y-3 slide-up-stagger">
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-400 hover-lift card-tilt" style={{ '--stagger': 0 } as React.CSSProperties}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center scale-pulse">
                          🥛
                        </div>
                        <div>
                          <p className="font-medium text-[#3E4C59]">Leche</p>
                          <p className="text-sm text-red-600">Vence hoy</p>
                        </div>
                      </div>
                      <Clock className="w-5 h-5 text-red-500 rotate-on-hover" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border-l-4 border-yellow-400 hover-lift card-tilt" style={{ '--stagger': 1 } as React.CSSProperties}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg flex items-center justify-center scale-pulse">
                          🍞
                        </div>
                        <div>
                          <p className="font-medium text-[#3E4C59]">Pan integral</p>
                          <p className="text-sm text-yellow-600">Vence en 2 días</p>
                        </div>
                      </div>
                      <Clock className="w-5 h-5 text-yellow-500 rotate-on-hover" />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#7CA98D]/10 to-[#7CA98D]/20 rounded-lg border-l-4 border-[#7CA98D] hover-lift card-tilt" style={{ '--stagger': 2 } as React.CSSProperties}>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#7CA98D]/20 to-[#7CA98D]/30 rounded-lg flex items-center justify-center scale-pulse">
                          🥕
                        </div>
                        <div>
                          <p className="font-medium text-[#3E4C59]">Zanahorias</p>
                          <p className="text-sm text-[#7CA98D]">Vence en 1 semana</p>
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-[#7CA98D] rotate-on-hover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 slide-up-stagger">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-on-scroll card-tilt hover-lift" style={{ '--stagger': index } as React.CSSProperties}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#7CA98D] to-[#6a9179] rounded-2xl flex items-center justify-center mx-auto mb-4 glow-effect">
                  <stat.icon className="w-8 h-8 text-white rotate-on-hover" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#7CA98D] mb-2 counter-animation">
                  {stat.number}
                </div>
                <div className="text-[#3E4C59]/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-[#F2F7FA] to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E4C59] mb-4 text-shimmer">
              Características que te encantarán
            </h2>
            <p className="text-xl text-[#3E4C59]/70 max-w-2xl mx-auto">
              Descubre cómo DespensaGO revoluciona la gestión de tu hogar con tecnología inteligente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 slide-up-stagger">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 border border-[#7CA98D]/10 animate-on-scroll hover-lift card-tilt gradient-border ripple-effect"
                style={{ '--stagger': index } as React.CSSProperties}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 glow-effect scale-pulse`}>
                  <feature.icon className="w-8 h-8 text-white rotate-on-hover" />
                </div>
                <h3 className="text-xl font-semibold text-[#3E4C59] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#3E4C59]/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="bg-gradient-to-br from-white to-[#F2F7FA] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E4C59] mb-4 text-shimmer">
              Cómo funciona DespensaGO
            </h2>
            <p className="text-xl text-[#3E4C59]/70 max-w-2xl mx-auto">
              En solo 3 pasos, transforma la gestión de tu despensa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 slide-up-stagger">
            <div className="text-center animate-on-scroll card-tilt hover-lift" style={{ '--stagger': 0 } as React.CSSProperties}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#7CA98D] to-[#6a9179] rounded-full flex items-center justify-center mx-auto mb-6 bounce-in glow-effect">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#3E4C59] mb-3">
                Registra tus productos
              </h3>
              <p className="text-[#3E4C59]/70">
                Escanea códigos de barras o añade manualmente los productos a tu despensa digital
              </p>
            </div>
            <div className="text-center animate-on-scroll card-tilt hover-lift" style={{ '--stagger': 1 } as React.CSSProperties}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#7CA98D] to-[#6a9179] rounded-full flex items-center justify-center mx-auto mb-6 bounce-in glow-effect">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#3E4C59] mb-3">
                Recibe notificaciones
              </h3>
              <p className="text-[#3E4C59]/70">
                Te avisamos antes de que caduquen tus productos para evitar desperdicios
              </p>
            </div>
            <div className="text-center animate-on-scroll card-tilt hover-lift" style={{ '--stagger': 2 } as React.CSSProperties}>
              <div className="w-20 h-20 bg-gradient-to-br from-[#7CA98D] to-[#6a9179] rounded-full flex items-center justify-center mx-auto mb-6 bounce-in glow-effect">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#3E4C59] mb-3">
                Cocina y comparte
              </h3>
              <p className="text-[#3E4C59]/70">
                Genera recetas con tus ingredientes y comparte despensas con tu familia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gradient-to-br from-[#7CA98D]/5 to-[#7CA98D]/10 relative overflow-hidden">
        <div className="parallax-bg absolute inset-0 morphing-blob bg-gradient-to-br from-[#7CA98D]/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3E4C59] mb-6 text-shimmer">
                Gestión colaborativa con tu familia
              </h2>
              <p className="text-xl text-[#3E4C59]/70 mb-8 leading-relaxed">
                Invita a familiares y amigos para gestionar despensas compartidas.
                Coordinen compras, compartan recetas y mantengan juntos el hogar organizado.
              </p>
              <div className="space-y-4 slide-up-stagger">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-on-scroll hover-lift" style={{ '--stagger': index } as React.CSSProperties}>
                    <CheckCircle className="w-6 h-6 text-[#7CA98D] flex-shrink-0 rotate-on-hover scale-pulse" />
                    <span className="text-[#3E4C59]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll delay-300">
              <div className="bg-white rounded-2xl shadow-2xl p-6 hover-lift card-tilt gradient-border">
                <h3 className="text-lg font-semibold text-[#3E4C59] mb-4">Despensa Familiar</h3>
                <div className="space-y-3 slide-up-stagger">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#F2F7FA] to-white rounded-lg hover-lift card-tilt ripple-effect" style={{ '--stagger': 0 } as React.CSSProperties}>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#7CA98D] to-[#6a9179] rounded-full flex items-center justify-center text-white text-sm font-semibold glow-effect">
                        M
                      </div>
                      <div>
                        <p className="font-medium text-[#3E4C59]">María</p>
                        <p className="text-sm text-[#3E4C59]/70">Administradora</p>
                      </div>
                    </div>
                    <Heart className="w-5 h-5 text-[#7CA98D] rotate-on-hover scale-pulse" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#F2F7FA] to-white rounded-lg hover-lift card-tilt ripple-effect" style={{ '--stagger': 1 } as React.CSSProperties}>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold glow-effect">
                        J
                      </div>
                      <div>
                        <p className="font-medium text-[#3E4C59]">Juan</p>
                        <p className="text-sm text-[#3E4C59]/70">Miembro</p>
                      </div>
                    </div>
                    <Users className="w-5 h-5 text-[#7CA98D] rotate-on-hover scale-pulse" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#F2F7FA] to-white rounded-lg hover-lift card-tilt ripple-effect" style={{ '--stagger': 2 } as React.CSSProperties}>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-semibold glow-effect">
                        S
                      </div>
                      <div>
                        <p className="font-medium text-[#3E4C59]">Sofía</p>
                        <p className="text-sm text-[#3E4C59]/70">Miembro</p>
                      </div>
                    </div>
                    <Star className="w-5 h-5 text-[#7CA98D] rotate-on-hover scale-pulse" />
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-[#7CA98D]/20 to-[#7CA98D]/10 text-[#7CA98D] py-3 rounded-lg font-medium hover:from-[#7CA98D] hover:to-[#6a9179] hover:text-white transition-all ripple-effect glow-effect">
                  Invitar miembro
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download-section" className="bg-gradient-to-br from-[#7CA98D] to-[#6a9179] py-20 animate-on-scroll relative overflow-hidden">
        <div className="parallax-bg absolute inset-0 morphing-blob bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bounce-in">
            ¿Listo para revolucionar tu despensa?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto loading-entrance">
            Únete a miles de familias que ya disfrutan de una gestión inteligente de su hogar
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleDownload}
              className="bg-white text-[#7CA98D] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-110 flex items-center justify-center bounce-in ripple-effect glow-effect shadow-2xl"
            >
              <Smartphone className="w-5 h-5 mr-2 rotate-on-hover" />
              Descargar para Android
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-4 text-white/80 animate-on-scroll delay-200">
            <Shield className="w-5 h-5 rotate-on-hover" />
            <span>Datos seguros y encriptados</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#3E4C59] to-[#2a3441] py-12 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7CA98D] to-[#6a9179] rounded-lg flex items-center justify-center glow-effect">
                <ShoppingCart className="w-5 h-5 text-white rotate-on-hover" />
              </div>
              <span className="text-2xl font-bold text-white">DespensaGO</span>
            </div>
            <p className="text-white/70 mb-4 max-w-md mx-auto">
              La aplicación que transforma la gestión de tu despensa con inteligencia artificial y colaboración familiar.
            </p>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70 animate-on-scroll delay-300">
            <p>&copy; {new Date().getFullYear()} DespensaGO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;