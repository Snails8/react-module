import React, { useState, useEffect, FC } from 'react';
import Box from '@mui/material/Box';

type Props = {
  urls: string[],
  interval?: number,
}

const AutoSliderIframe: FC<Props> = ({ 
  urls, 
  interval=5000 // 5s
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % urls.length);
    }, interval);

    return () => clearInterval(timer);
  }, [urls, interval]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % urls.length);
  }
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + urls.length) % urls.length);
  }

  return (
    <div className="relative">
      <Iframe src={urls[index]} />
      <div className="p-10"> 
        <button 
          className="
            px-5 py-2
            absolute bottom-0 left-0 transform -translate-y-full
            bg-blue-500 text-white hover:bg-blue-700
          " 
          onClick={prevSlide}
        >
            Prev
        </button>
        <button className="
          px-5 py-2
          absolute bottom-0 right-0 transform -translate-y-full
          bg-blue-500 text-white hover:bg-blue-700
        " onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

type IframeProps = {
  src: string,
}
const Iframe = (props: IframeProps) => {
  const {src} = props;
  return (
    <Box sx={{ aspectRatio: 12 / 9, width: "100%" }}>
      <iframe 
        width="100%" 
        height="40%" 
        frameBorder="0"
        src={src}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
  </Box>
  )
}

export default AutoSliderIframe;

// 中に配置したい時
// return (
//   <div className="relative">
//     <Iframe src={urls[index]} />
//     <Button className="absolute bottom-0 left-0 bg-blue-500 text-white hover:bg-blue-700 px-5 py-3 transform translate-y-[50%]" onClick={prevSlide}>Prev</Button>
//     <Button className="absolute bottom-0 right-0 bg-blue-500 text-white hover:bg-blue-700 px-5 py-3 transform translate-y-[50%]" onClick={nextSlide}>Next</Button>
//   </div>
// );