import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import lessons from '../../data/lessonsData';

const LessonsModal = ({ isOpen, onClose }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Accept either a plain YouTube ID or a full URL (youtu.be or youtube.com).
  const extractYouTubeId = (input) => {
    if (!input) return null;
    // If it's already a plain 11-char ID, return it
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
      // fall through to regex
    }

    // Last-resort regex matching
    const m = input.match(/[?&]v=([^&]+)/) || input.match(/youtu\.be\/([^?&]+)/) || input.match(/embed\/([^?&]+)/);
    return m ? m[1] : null;
  };

  if (!isOpen) return null;

  const items = lessons.slice(0, 20);

  const handleMouseEnter = (index, youtubeId) => {
    const id = extractYouTubeId(youtubeId);
    if (!id) return;
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => setHoveredIndex(null);

  const openOnYoutube = (origValue, id) => {
    const hasUrl = typeof origValue === 'string' && /^https?:\/\//.test(origValue);
    if (hasUrl) return window.open(origValue, '_blank');
    if (id) return window.open(`https://www.youtube.com/watch?v=${id}`, '_blank');
    return;
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm" onClick={onClose} />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl" onClick={e => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <IoClose size={22} />
          </button>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Video darsliklar</h3>
          <p className="text-sm text-gray-500 mb-6">Ushbu oynada YouTube linklari bilan 20 tagacha darslikni ko‘rishingiz mumkin. Hover (ustiga olib borganda) video avtomatik ravishda boshlanadi (muted).</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {items.map((item, idx) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer border hover:shadow-lg transition-shadow"
                onMouseEnter={() => handleMouseEnter(idx, item.youtubeId)}
                onMouseLeave={handleMouseLeave}
                onClick={() => openOnYoutube(item.youtubeId, extractYouTubeId(item.youtubeId))}
                title={item.youtubeId ? 'YouTube-da ochish' : 'Video yo‘q. ID qo‘shing.'}
              >
                <div className="w-full h-36 bg-gray-200 flex items-center justify-center overflow-hidden">
                  {extractYouTubeId(item.youtubeId) && hoveredIndex === idx ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${extractYouTubeId(item.youtubeId)}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                      title={item.title}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : extractYouTubeId(item.youtubeId) ? (
                    <img
                      src={`https://img.youtube.com/vi/${extractYouTubeId(item.youtubeId)}/mqdefault.jpg`}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center px-3 text-sm text-gray-500">Bo'sh</div>
                  )}
                </div>

                <div className="p-3">
                  <div className="text-sm font-medium text-gray-900 line-clamp-2">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default LessonsModal;
