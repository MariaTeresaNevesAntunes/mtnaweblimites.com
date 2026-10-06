import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Link as LinkIcon, Download, ExternalLink, Eye } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SolvedExercises } from "@/components/SolvedExercises";
import { AdSense } from "@/components/AdSense";

const resources = {
  videos: [
    {
      title: "Introdução aos Limites",
      description: "Vídeo explicativo sobre o conceito básico de limite.",
      url: "https://pt.khanacademy.org/math/calculus-1/cs1-limits-and-continuity",
      duration: "15 min"
    },
    {
      title: "Limites Laterais Explicados",
      description: "Como calcular e interpretar limites laterais.",
      url: "https://pt.khanacademy.org/math/calculus-1/cs1-limits-and-continuity/cs1-estimating-limit-values-from-graphs",
      duration: "12 min"
    },
    {
      title: "Resolvendo Indeterminações",
      description: "Técnicas para resolver formas indeterminadas.",
      url: "https://pt.khanacademy.org/math/calculus-1/cs1-limits-and-continuity/cs1-determining-limits-using-algebraic-manipulation",
      duration: "20 min"
    }
  ],
  pdfs: [
    {
      title: "Resumo de Fórmulas de Limites",
      description: "Propriedades básicas, limites fundamentais, L'Hôpital e limites trigonométricos.",
      url: "/pdfs/resumo-formulas-limites.pdf",
      pages: "2 páginas"
    },
    {
      title: "Exercícios Resolvidos",
      description: "Ficha de exercícios de limites de funções para 11.º/12.º ano com resoluções.",
      url: "/pdfs/exercicios-resolvidos-limites.pdf",
      pages: "21 páginas"
    }
  ],
  links: [
    {
      title: "Khan Academy - Limites",
      description: "Curso completo sobre limites em português.",
      url: "https://pt.khanacademy.org/math/calculus-1"
    },
    {
      title: "Wolfram Alpha",
      description: "Calculadora online para verificar limites.",
      url: "https://www.wolframalpha.com"
    },
    {
      title: "Symbolab",
      description: "Resolução passo a passo de limites.",
      url: "https://www.symbolab.com"
    }
  ]
};

const PDF_VERSION = "20260422-1135";
const withPdfVersion = (url: string) => (url.toLowerCase().endsWith(".pdf") ? `${url}?v=${PDF_VERSION}` : url);

const PDF_PREVIEW_IMAGES: Record<string, string[]> = {
  "/pdfs/resumo-formulas-limites.pdf": [
    "/pdf-previews/resumo-formulas-limites-1.png",
    "/pdf-previews/resumo-formulas-limites-2.png",
  ],
  "/pdfs/exercicios-resolvidos-limites.pdf": Array.from({ length: 21 }, (_, i) =>
    `/pdf-previews/exercicios-resolvidos-limites-${String(i + 1).padStart(2, "0")}.png`
  ),
};

const Resources = () => {
  const [previewPdf, setPreviewPdf] = useState<{ url: string; title: string; imageUrl?: string; images?: string[] } | null>(null);
  const isPreviewable = (url: string) => url.toLowerCase().split("?")[0].endsWith(".pdf");

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Recursos"
        description="Materiais educativos gratuitos sobre limites matemáticos: vídeos explicativos, PDFs com exercícios resolvidos e links úteis para aprender cálculo."
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              📚 Recursos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Materiais complementares para aprofundar o teu conhecimento sobre limites matemáticos.
            </p>
          </section>

          {/* Videos Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Video className="h-6 w-6 text-primary" />
              Vídeos Educativos
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.videos.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{video.duration}</span>
                      <Button variant="outline" size="sm" asChild>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Ver
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12" aria-labelledby="study-guides-title">
            <h2 id="study-guides-title" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              Guias de Estudo
            </h2>
            <Card className="border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle>Limites Fundamentais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Fórmulas essenciais, exercícios resolvidos passo a passo, quiz e flashcards para consolidar o tema.
                </p>
                <Button asChild>
                  <Link to="/limites-fundamentais">Estudar limites fundamentais</Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* PDFs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Materiais em PDF
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.pdfs.map((pdf, index) => {
                const pdfUrl = withPdfVersion(pdf.url);

                return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{pdf.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{pdf.description}</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">{pdf.pages}</span>
                      <div className="flex items-center gap-2">
                        {isPreviewable(pdfUrl) && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setPreviewPdf({
                              url: pdfUrl,
                              title: pdf.title,
                              images: PDF_PREVIEW_IMAGES[pdf.url]?.map((img) => withPdfVersion(img.replace(/\.png$/i, ".png"))),
                            })}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            Pré-visualizar
                          </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <a href={pdfUrl} download>
                            <Download className="h-4 w-4 mr-1" />
                            Download
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                );
              })}
            </div>
          </section>

          {/* Solved exercises by theme */}
          <SolvedExercises onPreview={setPreviewPdf} />

          {/* Anúncio AdSense (modo de teste em desenvolvimento) */}
          <section className="my-12">
            <AdSense />
          </section>

          {/* Links Section */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <LinkIcon className="h-6 w-6 text-primary" />
              Links Úteis
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.links.map((link, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Visitar
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <Dialog
        open={!!previewPdf}
        onOpenChange={(open) => {
          if (!open) {
            setPreviewPdf(null);
          }
        }}
      >
        <DialogContent className="flex h-[96vh] w-[98vw] max-w-7xl flex-col overflow-hidden p-0">
          <DialogHeader className="border-b px-6 py-4 pr-14">
            <DialogTitle>{previewPdf?.title ?? "Pré-visualização"}</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-auto bg-muted/40 p-3 sm:p-4">
            {previewPdf && (() => {
              const images = previewPdf.images ?? (previewPdf.imageUrl ? [previewPdf.imageUrl] : []);
              if (images.length > 0) {
                return (
                  <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4">
                    {images.map((img, idx) => (
                      <img
                        key={img}
                        src={img}
                        alt={`Pré-visualização de ${previewPdf.title} — página ${idx + 1}`}
                        className="block h-auto max-w-full rounded-md border bg-background shadow-sm"
                        loading="lazy"
                      />
                    ))}
                  </div>
                );
              }
              return (
                <iframe
                  key={previewPdf.url}
                  src={previewPdf.url}
                  title={previewPdf.title}
                  className="h-full w-full rounded-md border bg-background"
                />
              );
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;
