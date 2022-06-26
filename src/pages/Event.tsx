import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface Params {
  slug: string;
}

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex-1">
            <span className="flex justify-center mt-80 uppercase">
              Selecione alguma aula para exibir o Vídeo!
            </span>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
