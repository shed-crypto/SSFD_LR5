import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const contactRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let timer = null;

    const handleSelection = () => {
      const selection = window.getSelection();
      const selectedText = selection.toString();

      if (
        contactRef.current && 
        contactRef.current.contains(selection.anchorNode) && 
        selectedText.length > 0
      ) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          setIsExpanded(true);
        }, 2000);
      } else {
        if (timer) clearTimeout(timer);
        setIsExpanded(false);
      }
    };

    document.addEventListener('selectionchange', handleSelection);

    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <footer>
      <h3>Контактна інформація</h3>
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