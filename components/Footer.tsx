import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Обновленные ссылки на русском
  const footerLinks = [
    {
      title: "О проекте",
      links: [
        { title: "Как это работает", url: "/" },
        { title: "Наша миссия", url: "/" },
        { title: "Партнерство", url: "/" },
        { title: "Бизнес-решения", url: "/" },
      ],
    },
    {
      title: "Компания",
      links: [
        { title: "О нас", url: "/" },
        { title: "Карьера", url: "/" },
        { title: "Команда", url: "/" },
        { title: "Инвесторы", url: "/" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { title: "Центр помощи", url: "/" },
        { title: "Связаться с нами", url: "/" },
        { title: "Инструкции", url: "/" },
        { title: "Обновления", url: "/" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col text-black-100
    mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col
        flex-wrap justify-between gap-8
        sm:px-16 px-6 py-12">
            <div className="flex flex-col justify-start
            items-start gap-6 max-md:items-center max-md:text-center">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                    <span className="text-white font-black text-2xl">🚗</span>
                  </div>
                  <span className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-500 
                  bg-clip-text text-transparent">AUTOHUB</span>
                </div>
                <p className="text-base text-gray-500 font-medium max-w-sm">
                    Революционная платформа для поиска и аренды автомобилей. 
                    Будущее мобильности начинается здесь.
                </p>
                <div className="text-sm text-gray-600">
                    © 2025 AutoHub. Все права защищены
                </div>
            </div>
            
            <div className="footer__links">
            {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
                <h3 className="font-bold text-lg">{link.title}</h3>
                {link.links.map((item) => (
                    <Link
                    key={item.title}
                    href={item.url}
                    className="text-gray-500 hover:text-primary-blue transition-all duration-300 
                    hover:translate-x-1">
                    {item.title}
                    </Link>
                ))}
            </div>
            ))}
            </div>
        </div>
        
        <div className="flex justify-center
        items-center flex-wrap border-t
        border-gray-800 px-6 py-8">
            <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500 hover:text-blue-400 transition-colors duration-300 
            font-medium">
                 Политика конфиденциальности
            </Link>
            <Link href="/" className="text-gray-500 hover:text-blue-400 transition-colors duration-300
            font-medium">
                 Условия использования
            </Link>
            <Link href="/" className="text-gray-500 hover:text-blue-400 transition-colors duration-300
            font-medium">
                 Безопасность
            </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer