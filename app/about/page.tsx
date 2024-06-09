import ModalVideo from "@/components/modal-video";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import VideoThumb from "@/public/images/hero-image.png";

export const metadata = {
  title: "About - Keensight Analytics - Sharpened Intuition",
  description: "Innovative AI, Complete Software.",
};

export default function About() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-30 md:pb-20 lg:flex lg:gap-16">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16 lg:text-left">
            <h1
              className="text-4xl md:text-[4.5rem] font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              About{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Us
              </span>
            </h1>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={850}
            thumbHeight={500}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
      <Zigzag />
      <Newsletter />
    </section>
  );
}
