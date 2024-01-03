import companies from "../companies.json";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export default function CompaniesCarousel() {
  const { t } = useTranslation();
  const duplicatedCompanies = [...companies];
  const renderedCompanies = duplicatedCompanies;

  const carouselRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = carouselRef.current;
    ul?.insertAdjacentHTML("afterend", ul.outerHTML);
    const nextElement = ul?.nextElementSibling;
    if (nextElement) {
      nextElement.setAttribute("aria-hidden", "true");
    }
  }, []);

  return (
    <div className="flex flex-col p-[7%]">
      <h1 className="flex relative justify-center left-[15%] xs:left-[20%] sm:left-[28%] md:left-[30%] font-bold text-[0.8rem] xs:text-[1rem] ssm:text-[1.3rem] sm:text-[1.5rem] lg:text-[2rem] xl:text-[2.3rem] w-[60%] ssm:w-[50%] sm:w-[45%] md:w-[40%] lg:left-0 lg:w-full text-center font-manrope pb-3 ssm:pb-5">
        {t("Más de 500 empresas confían en LinkIT")}
      </h1>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] w-[80%] relative left-[10%]"
      >
        <ul
          ref={carouselRef}
          className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none "
          style={{ animation: "infinite-scroll 25s linear infinite" }}
        >
          {renderedCompanies.map((company) => (
            <li
              className="relative justify-center justify-self-center overflow:hidden h-[3rem] lg:h-[5rem] w-[5rem] lg:w-[8rem]"
              key={company.id}
            >
              <img
                src={company.logo}
                className="h-full w-full object-contain mx-2"
                alt="logo"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}