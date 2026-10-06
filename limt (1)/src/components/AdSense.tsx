import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

// IDs de teste oficiais do Google AdSense.
// Em modo de teste, o Google serve anúncios de placeholder (não conta impressões nem gera receita).
// Docs: https://developers.google.com/adsense/platforms/transparent/testing
export const ADSENSE_TEST_CLIENT = "ca-pub-8664195567929159"; // o teu publisher ID
export const ADSENSE_TEST_SLOT = "1234567890"; // slot fictício; com data-adtest=on basta para validar

export interface AdSenseProps {
  /** Publisher ID. Usa o teu ca-pub-... */
  client?: string;
  /** Ad slot. Em modo de teste podes usar qualquer valor. */
  slot?: string;
  /** Formato do anúncio. */
  format?: string;
  /** Responsivo (full-width). */
  responsive?: boolean;
  /** Força modo de teste. Por padrão activo em desenvolvimento. */
  test?: boolean;
  /** Estilo do contentor. */
  style?: React.CSSProperties;
  /** Classe extra. */
  className?: string;
}

/**
 * Componente AdSense com suporte a modo de teste.
 *
 * Modo de teste é activado automaticamente em `import.meta.env.DEV`
 * ou quando `test={true}` é passado. Adiciona `data-adtest="on"` para
 * que o Google sirva anúncios de teste sem consumir impressões reais.
 */
export const AdSense = ({
  client = ADSENSE_TEST_CLIENT,
  slot = ADSENSE_TEST_SLOT,
  format = "auto",
  responsive = true,
  test,
  style,
  className,
}: AdSenseProps) => {
  const insRef = useRef<HTMLModElement | null>(null);
  const isTest = test ?? import.meta.env.DEV;

  useEffect(() => {
    try {
      // Evita re-inicializar o mesmo <ins> (que provoca o erro
      // "adsbygoogle.push() error: All 'ins' elements ... already have ads in them.")
      if (insRef.current?.getAttribute("data-adsbygoogle-status")) return;
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn("[AdSense] push failed", err);
    }
  }, []);

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle ${className ?? ""}`}
      style={{ display: "block", ...style }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
      {...(isTest ? { "data-adtest": "on" } : {})}
    />
  );
};

export default AdSense;
