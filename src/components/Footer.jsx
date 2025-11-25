import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const contactRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timer = null;

    const handleSelection = () => {
      const selection = window.getSelection();
      const selectedText = selection.toString();

      // Перевіряємо:
      // 1. Чи існує посилання на елемент (contactRef.current)
      // 2. Чи виділення починається всередині нашого блоку (contains)
      // 3. Чи виділено хоча б 1 символ тексту
      if (
        contactRef.current && 
        contactRef.current.contains(selection.anchorNode) && 
        selectedText.length > 0
      ) {
        // Якщо таймер вже запущений (користувач продовжує виділяти), скидаємо його
        if (timer) clearTimeout(timer);

        // Запускаємо таймер на 2 секунди (2000 мс)
        // Ефект спрацює, тільки якщо виділення тримається 2 секунди
        timer = setTimeout(() => {
          setIsExpanded(true);
        }, 2000);
      } else {
        // Якщо виділення знято або курсор вийшов за межі — скасовуємо все
        if (timer) clearTimeout(timer);
        setIsExpanded(false);
      }
    };

    // Додаємо слухач події зміни виділення
    document.addEventListener('selectionchange', handleSelection);

    // Прибирання за собою при розмонтуванні компонента
    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <footer>
      <h3>Контактна інформація</h3>
      
      {/* ВАЖЛИВО: Тут виправлено назву класу на 'contact-info', 
         щоб вона відповідала стилям у src/index.css.
         Додається клас 'highlight-expanded', коли isExpanded === true.
      */}
      <div 
        ref={contactRef} 
        className={`contact-info ${isExpanded ? 'highlight-expanded' : ''}`}
      >
        <address style={{ fontStyle: 'normal' }}>
          вул. Хрещатик, 15, Київ<br />
          Тел: +380 44 123-45-67, +380 67 890-12-34<br />
          Email: <a href="mailto:info@TechNova.ua" style={{ color: '#4db6ac' }}>info@TechNova.ua</a>
        </address>
      </div>
      
      <p style={{ marginTop: '15px', fontSize: '0.8rem' }}>
        &copy; 2025 TechNova. Всі права захищені.
      </p>
    </footer>
  );
};

export default Footer;