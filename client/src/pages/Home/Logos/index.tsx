import styled from 'styled-components'
import ableton from '~/assets/logos/ableton.svg'
import amplitude from '~/assets/logos/amplitude.svg'
import anthropic from '~/assets/logos/anthropic.svg'
import templatenet from '~/assets/logos/templatenet.svg'
import chevrolet from '~/assets/logos/chevrolet.svg'
import cloufare from '~/assets/logos/cloudfare.svg'
import linear from '~/assets/logos/linear.svg'
import loom from '~/assets/logos/loom.svg'
import lvmh from '~/assets/logos/lvmh.svg'
import django from '~/assets/logos/django.svg'
import pinecone from '~/assets/logos/pinecone.svg'
import puma from '~/assets/logos/puma.svg'
import shopify from '~/assets/logos/shopify.svg'
import skims from '~/assets/logos/skims.svg'
import slack from '~/assets/logos/slack.svg'
import sonos from '~/assets/logos/sonos.svg'

export default function Logos() {
  return (
    <LogosContainer>
      <img className="first-row" src={ableton} alt="Ableton logo" />
      <img className="first-row" src={amplitude} alt="Ableton logo" />
      <img className="first-row" src={anthropic} alt="Ableton logo" />
      <img className="first-row" src={templatenet} alt="Ableton logo" />
      <img className="first-row" src={chevrolet} alt="Ableton logo" />
      <img className="first-row" src={cloufare} alt="Ableton logo" />
      <img className="first-row" src={linear} alt="Ableton logo" />
      <img className="first-row" src={loom} alt="Ableton logo" />
      <img className="second-row" src={lvmh} alt="Ableton logo" />
      <img className="second-row" src={django} alt="Ableton logo" />
      <img className="second-row" src={pinecone} alt="Ableton logo" />
      <img className="second-row" src={puma} alt="Ableton logo" />
      <img className="second-row" src={shopify} alt="Ableton logo" />
      <img className="second-row" src={skims} alt="Ableton logo" />
      <img className="second-row" src={slack} alt="Ableton logo" />
      <img className="second-row" src={sonos} alt="Ableton logo" />
    </LogosContainer>
  )
}

const LogosContainer = styled.div`
  padding: 0 3rem;
  height: var(--logos-height);
  display: grid;
  column-gap: 2rem;
  grid-template-columns: repeat(8, auto);
  grid-template-rows: repeat(2, 60px);

  img {
    height: 30px;
    width: 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    .first-row {
      animation: move-right linear both;
      animation-timeline: view();
      animation-range: 30vh 100vh;
    }

    .second-row {
      animation: move-left linear both;
      animation-timeline: view();
      animation-range: 30vh 100vh;
    }
  }

  @keyframes move-right {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0.2;
    }
  }

  @keyframes move-left {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(-100%);
      opacity: 0.2;
    }
  }
`
