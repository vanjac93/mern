import i18n from '~/services/i18n/i18n'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface CardType {
  link: string
  title: string
  mobileSrc: string
  img: { src: string; media: string }[]
}

const MEDIA = {
  DESKTOP: '(min-width: 990px)',
  TABLET: '(min-width: 750px)'
}

const CARDS: CardType[] = [
  {
    link: '/shop',
    title: i18n.t('Shop'),
    mobileSrc: 'https://dummyimage.com/200x400/#f2f2f2/aaa',
    img: [
      {
        src: 'https://dummyimage.com/600x800/#f2f2f2/aaa',
        media: MEDIA.DESKTOP
      },
      {
        src: 'https://dummyimage.com/400x600/#f2f2f2/aaa',
        media: MEDIA.TABLET
      }
    ]
  },
  {
    link: '/test',
    title: i18n.t('Test'),
    mobileSrc: 'https://dummyimage.com/200x400/#dd3e3e/#1762e4',
    img: [
      {
        src: 'https://dummyimage.com/600x800/#dd3e3e/#1762e4',
        media: MEDIA.DESKTOP
      },
      {
        src: 'https://dummyimage.com/400x600/#dd3e3e/#1762e4',
        media: MEDIA.TABLET
      }
    ]
  },
  {
    link: '/best',
    title: i18n.t('Best'),
    mobileSrc: 'https://dummyimage.com/200x400/#3c2121/#26decf',
    img: [
      {
        src: 'https://dummyimage.com/600x800/#3c2121/#26decf',
        media: MEDIA.DESKTOP
      },
      {
        src: 'https://dummyimage.com/400x600/#3c2121/#26decf',
        media: MEDIA.TABLET
      }
    ]
  },
  {
    link: '/desc',
    title: i18n.t('Option'),
    mobileSrc: 'https://dummyimage.com/200x400/#dd25a6/#c11e1e',
    img: [
      {
        src: 'https://dummyimage.com/600x800/#dd25a6/#c11e1e',
        media: MEDIA.DESKTOP
      },
      {
        src: 'https://dummyimage.com/400x600/#dd25a6/#c11e1e',
        media: MEDIA.TABLET
      }
    ]
  }
]

function Card({ card }: { card: CardType }) {
  return (
    <div>
      <Link to={card.link}>
        <picture>
          {card.img.map((img) => (
            <>
              <source srcSet={img.src} media={img.media} />
              <img srcSet={card.mobileSrc} alt="test" />
            </>
          ))}

          <source
            srcSet="homepage-person@desktop.png, homepage-person@desktop-2x.png 2x"
            media="(min-width: 990px)"
          />
          <source
            srcSet="homepage-person@tablet.png, homepage-person@tablet-2x.png 2x"
            media="(min-width: 750px)"
          />
          <img
            srcSet="homepage-person@mobile.png, homepage-person@mobile-2x.png 2x"
            alt="Shopify Merchant, Corrine Anestopoulos"
          />
        </picture>
      </Link>
    </div>
  )
}

const CardContainer = styled.figure`
  .card-title {
    position: absolute;
    top: 10%;
    left: 10%;
  }

  .card-meta {
    padding: 10%;
  }
`
export default function CardsGrid() {
  return (
    <CardsContainer>
      {CARDS.map((card) => {
        return <Card card={card} />
      })}
    </CardsContainer>
  )
}

const CardsContainer = styled.section`
  display: grid;
  grid-template-rows: auto;

  ${({ theme }) => theme.mq.lg} {
    grid-template-columns: repeat(4, 25%);
  }

  ${({ theme }) => theme.mq.md} {
    grid-template-columns: repeat(2, 50%);
  }

  ${({ theme }) => theme.mq.sm} {
    grid-template-columns: 1, 100%;
  }
`
