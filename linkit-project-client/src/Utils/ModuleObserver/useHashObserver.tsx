import { useEffect, useState } from 'react';

export function useHashNavigation() {
  const [activeHash, setActiveHash] = useState<string | null>(null);
  
  useEffect(() => {
    // Obtener el hash de la URL cuando el componente se monta
    const hash = window.location.hash;
    if (hash) {
      setActiveHash(hash.substring(1)); // Eliminar el carácter #
    }

    // Escuchar cambios en el hash
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash) {
        setActiveHash(newHash.substring(1));
      } else {
        setActiveHash(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return activeHash;
}