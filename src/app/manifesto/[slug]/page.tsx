import { notFound } from 'next/navigation';
import { manifestoItems } from '@/lib/manifesto-data';
import ManifestoClientPage from '@/components/manifesto-client-page';
import MetaforaCollage from '@/components/metafora-collage';

export default function ManifestoItemPage({ params }: { params: { slug: string } }) {
  const item = manifestoItems.find((i) => i.id === params.slug);

  if (!item) {
    notFound();
  }

  if (item.id === 'metafora') {
    return <MetaforaCollage />;
  }

  return <ManifestoClientPage item={item} />;
}

export async function generateStaticParams() {
  return manifestoItems.filter(item => item.id !== 'poblaciones' && item.id !== 'valores' && item.id !== 'mapa' && item.id !== 'proposito').map((item) => ({
    slug: item.id,
  }));
}
