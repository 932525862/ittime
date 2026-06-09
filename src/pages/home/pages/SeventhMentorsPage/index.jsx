import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import MentorCard from './modules/mentor-card';
import { mentorsData } from '../../../../data/mentorsData';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

const SeventhMentorsPage = () => {
  const { t } = useTranslation();

  return (
    <section className="mentors-section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent" data-aos-offset="50" data-aos="flip-left">
            {t('home.SeventhMentorsPage.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600" data-aos-offset="50" data-aos="flip-right">
            {t('home.SeventhMentorsPage.subtitle')}
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-container"
        >
          {mentorsData.map((mentor) => (
            <SwiperSlide key={mentor.id}>
              <MentorCard mentor={mentor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SeventhMentorsPage;
