import { BsGithub } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
import { ImLinkedin } from 'react-icons/im'
import './social_network_bar.css'

export default function Index() {
  const GITHUB_URL = "https://github.com/MarioLemus"
  const TWITTER_URL = "https://twitter.com/NewMar____"
  const LINKEDIN_URL = "https://www.linkedin.com/in/mariolemus021dev/"

  return (
    <div className='social_network_bar__container'>
      <a href={GITHUB_URL} target="_blank" rel="noreferrer">
        <BsGithub className='social_network_bar__icon' />
      </a>
      <a href={TWITTER_URL} target="_blank" rel="noreferrer">
        <SiTwitter className='social_network_bar__icon' />
      </a>
      <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
        <ImLinkedin className='social_network_bar__icon' />
      </a>
    </div>
  );
}
