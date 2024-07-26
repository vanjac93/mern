import { Flex } from '~/components/layout/Box'
import {
  FaXTwitter,
  FaInstagram,
  FaRedditAlien,
  FaFacebook,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa6'

export default function SocialMediaLogos() {
  return (
    <Flex gap="1rem">
      <FaXTwitter />
      <FaRedditAlien />
      <FaInstagram />
      <FaFacebook />
      <FaLinkedin />
      <FaYoutube />
    </Flex>
  )
}
