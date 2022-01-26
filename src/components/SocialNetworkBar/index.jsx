import { BsGithub } from 'react-icons/bs'
import { SiTwitter } from 'react-icons/si'
import { ImLinkedin } from 'react-icons/im'
import './social_network_bar.css'

export default function Index() {
  return (
    <div className='social_network_bar__container'>
      <a href="/"><BsGithub className='social_network_bar__icon' /></a>
      <a href="/"><SiTwitter className='social_network_bar__icon' /></a>
      <a href="/"><ImLinkedin className='social_network_bar__icon' /></a>
    </div>
  );
}
