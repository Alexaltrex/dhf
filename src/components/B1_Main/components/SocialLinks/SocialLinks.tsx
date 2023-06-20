import { textContent } from '../../textContent';
import style from './SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <div className={style.links}>
      <div className={style.links__title}>Join Us</div>
      <div className={style.linksBody}>
        {textContent.socialLinks.map(({ href, icon_white }, key) => (
          <a
            key={key}
            href={href}
            className={style.links__item}
            target='_blank'
            rel='noopener noreferrer nofollow'
          >
            {icon_white}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
