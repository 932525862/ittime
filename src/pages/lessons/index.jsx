import React, { useState } from 'react';
import lessons from '../../data/lessonsData';
import { IoPlay } from 'react-icons/io5';
import PageSEO from '../../components/SEO/PageSEO';

const extractYouTubeId = (input) => {
  if (!input) return null;
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const u = new URL(input);
    const host = u.hostname.toLowerCase();
    if (host.includes('youtu.be')) {
      const parts = u.pathname.split('/').filter(Boolean);
      return parts[0] || null;
    }
    if (host.includes('youtube.com')) {
      const v = u.searchParams.get('v');
      if (v) return v;
      const parts = u.pathname.split('/').filter(Boolean);
      const embedIndex = parts.indexOf('embed');
      if (embedIndex !== -1 && parts[embedIndex + 1]) return parts[embedIndex + 1];
    }
  } catch (e) {
    // fallback
  }
  const m = input.match(/[?&]v=([^&]+)/) || input.match(/youtu\.be\/([^?&]+)/) || input.match(/embed\/([^?&]+)/);
  return m ? m[1] : null;
};

export default function Lessons() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const items = lessons.slice(0, 20);

  return (
    <div className="py-12">
      <PageSEO
        title="Video darsliklar — ITTIME Academy"
        description="ITTIME Academy video darsliklari — JavaScript, React, Node.js va boshqa kurslar uchun video resurslar."
        keywords="video darslik, ITTIME, JavaScript, React, Node.js"
        ogImage="/public/og-lessons.jpg"
        canonicalUrl="/lessons"
      />

      <div className="container mx-auto px-4">
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <IoPlay className="w-8 h-8 text-red-600" />
            <h1 className="text-3xl md:text-4xl font-extrabold">Video darsliklar</h1>
          </div>

          <p className="mt-3 text-gray-600 max-w-2xl">Bu sahifada siz ITTIME Academy tomonidan tavsiya etilgan video darsliklarni topasiz. Kartaga olib borganda video avtomatik ravishda boshlanadi (muted), klik bilan YouTube’ga ochiladi.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((item, idx) => {
            const id = extractYouTubeId(item.youtubeId);
            return (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div
                  className="w-full h-44 bg-gray-100 flex items-center justify-center overflow-hidden cursor-pointer"
                  onMouseEnter={() => id && setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    if (!item.youtubeId) return;
                    const hasUrl = /^https?:\/\//.test(item.youtubeId);
                    window.open(hasUrl ? item.youtubeId : `https://www.youtube.com/watch?v=${id}`, '_blank');
                  }}
                  title={item.youtubeId ? 'YouTube-da ochish' : 'Video yo‘q'}
                >
                  {id && hoveredIndex === idx ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                      title={item.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : id ? (
                    <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-sm text-gray-500">Bo'sh</div>
                  )}
                </div>

                <div className="p-3">
                  <div className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
