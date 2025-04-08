import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path: string; active?: boolean }[];
}

export default function BreadcrumbsWithSchema({ items }: BreadcrumbsProps) {
  // Generar el esquema JSON-LD para las migas de pan
  const generateBreadcrumbSchema = () => {
    // Añadir "Inicio" como primer elemento
    const fullItems = [
      { label: "Inicio", path: "/" },
      ...items
    ];
    
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": fullItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": `https://www.linkit-hr.com${item.path}`
      }))
    };
    
    return breadcrumbSchema;
  };
  
  return (
    <>
      {/* Implementación de Schema.org con Helmet */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema())}
        </script>
      </Helmet>
      
      <nav className="flex items-center text-sm text-gray-500 mb-4 py-2">
        <ol className="flex flex-wrap items-center">
          <li>
            <Link to="/" className="hover:text-linkIt-300">Inicio</Link>
          </li>
          
          {items.map((item) => (
            <li key={item.path} className="flex items-center">
              <ChevronRight className="mx-1 h-4 w-4" />
              {item.active ? (
                <span className="font-medium text-gray-900">{item.label}</span>
              ) : (
                <Link to={item.path} className="hover:text-linkIt-300">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}