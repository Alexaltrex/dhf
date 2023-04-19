import { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const options = {
  damping: 0.05,
  delegateTo: document,
};

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  useEffect(() => {
    let bodyScrollBar = Scrollbar.init(document.body, options);

    ScrollTrigger.scrollerProxy('.scroller', {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
  });

  return null;
};

export default Scroll;
