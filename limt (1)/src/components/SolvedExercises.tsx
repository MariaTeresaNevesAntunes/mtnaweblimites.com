import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Download, Eye } from "lucide-react";

export type SolvedExercise = {
  title: string;
  description: string;
  url: string;
};

type Theme = {
  value: string;
  label: string;
  intro: string;
  exercises: SolvedExercise[];
};

export type PreviewPayload = {
  title: string;
  url: string;
  imageUrl?: string;
};

const PDF_VERSION = "20260422-1100";
const withVersion = (url: string) => `${url}?v=${PDF_VERSION}`;
const getPreviewImage = (url: string) => {
  const match = url.match(/^\/pdfs\/exercicios\/([^/]+)\/([^/]+)\.pdf$/);
  if (!match) return undefined;
  const [, theme, slug] = match;
  return withVersion(`/pdf-previews/exercicios/${theme}-${slug}.png`);
};

export const solvedExercisesData: Theme[] = [
  {
    value: "limite",
    label: "Limite",
    intro: "Cálculo de limites por substituição direta, fatoração, conjugado e limites trigonométricos.",
    exercises: [
      {
        title: "Exercício 1 — Substituição direta",
        description: "lim x→2 (3x² − 5x + 1). Aplicação direta em função polinomial contínua.",
        url: "/pdfs/exercicios/limite/ex1-substituicao-direta.pdf",
      },
      {
        title: "Exercício 2 — Fatoração (0/0)",
        description: "lim x→3 (x² − 9)/(x − 3). Resolver indeterminação 0/0 por fatoração.",
        url: "/pdfs/exercicios/limite/ex2-fatoracao.pdf",
      },
      {
        title: "Exercício 3 — Multiplicação pelo conjugado",
        description: "lim x→0 (√(x+4) − 2)/x. Técnica do conjugado para eliminar a indeterminação.",
        url: "/pdfs/exercicios/limite/ex3-conjugado.pdf",
      },
      {
        title: "Exercício 4 — Limite trigonométrico",
        description: "lim x→0 sen(5x)/x. Uso do limite notável sen(u)/u → 1.",
        url: "/pdfs/exercicios/limite/ex4-trigonometrico.pdf",
      },
    ],
  },
  {
    value: "laterais",
    label: "Limites laterais",
    intro: "Limites à esquerda e à direita, funções com módulo, ramos e continuidade.",
    exercises: [
      {
        title: "Exercício 1 — Função com módulo",
        description: "f(x) = |x|/x em x = 0. Comparar limites laterais e concluir não-existência.",
        url: "/pdfs/exercicios/laterais/ex1-modulo.pdf",
      },
      {
        title: "Exercício 2 — Função por ramos",
        description: "Estudar continuidade em x = 2 de uma função definida em dois ramos.",
        url: "/pdfs/exercicios/laterais/ex2-funcao-ramificada.pdf",
      },
      {
        title: "Exercício 3 — Assíntota vertical",
        description: "Limites laterais de 1/(x − 1) em x = 1, com sinais opostos no infinito.",
        url: "/pdfs/exercicios/laterais/ex3-assintota-vertical.pdf",
      },
      {
        title: "Exercício 4 — Determinar parâmetro",
        description: "Encontrar a constante a que torna g contínua em x = 1.",
        url: "/pdfs/exercicios/laterais/ex4-continuidade.pdf",
      },
    ],
  },
  {
    value: "indeterminacoes",
    label: "Indeterminações",
    intro: "Resolução das principais formas indeterminadas: ∞/∞, ∞ − ∞, 0·∞ e 1^∞.",
    exercises: [
      {
        title: "Exercício 1 — ∞/∞",
        description: "Quociente de polinómios quando x → +∞: dividir pelo termo de maior grau.",
        url: "/pdfs/exercicios/indeterminacoes/ex1-inf-sobre-inf.pdf",
      },
      {
        title: "Exercício 2 — ∞ − ∞",
        description: "lim x→+∞ (√(x² + x) − x) usando o conjugado.",
        url: "/pdfs/exercicios/indeterminacoes/ex2-infinito-menos-infinito.pdf",
      },
      {
        title: "Exercício 3 — 0 · ∞",
        description: "lim x→+∞ x · sen(1/x) com substituição u = 1/x.",
        url: "/pdfs/exercicios/indeterminacoes/ex3-zero-vezes-infinito.pdf",
      },
      {
        title: "Exercício 4 — 1^∞",
        description: "lim x→+∞ (1 + 2/x)^x e o limite notável que origina e^a.",
        url: "/pdfs/exercicios/indeterminacoes/ex4-exponencial-e.pdf",
      },
    ],
  },
];

type Props = {
  onPreview: (pdf: PreviewPayload) => void;
};

export const SolvedExercises = ({ onPreview }: Props) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-primary" />
        Exercícios resolvidos por tema
      </h2>
      <p className="text-muted-foreground mb-6">
        Escolhe um tema e abre a resolução em PDF — visualiza no site ou descarrega.
      </p>

      <Tabs defaultValue={solvedExercisesData[0].value} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
          {solvedExercisesData.map((theme) => (
            <TabsTrigger key={theme.value} value={theme.value} className="py-2">
              {theme.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {solvedExercisesData.map((theme) => (
          <TabsContent key={theme.value} value={theme.value} className="mt-6">
            <p className="text-sm text-muted-foreground mb-4">{theme.intro}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {theme.exercises.map((ex, idx) => {
                const versioned = withVersion(ex.url);
                return (
                  <Card key={idx} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{ex.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {ex.description}
                      </p>
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onPreview({
                            url: versioned,
                            title: ex.title,
                            imageUrl: getPreviewImage(ex.url),
                          })}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Visualizar
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={versioned} download>
                            <Download className="h-4 w-4 mr-1" />
                            Baixar
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};
