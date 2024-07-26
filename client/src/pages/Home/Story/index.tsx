import { Box } from '~/components/layout/Box'
import StoryCard from './StoryCard'
import styled from 'styled-components'
import crowdImg from '~/assets/crowd.jpg'
import buildingImg from '~/assets/building.jpg'

export default function Story() {
  return (
    <StoriesContainer>
      {storyItems.map((story, i) => (
        <StoryCard key={i} story={story} />
      ))}
    </StoriesContainer>
  )
}

const StoriesContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 3rem;
  padding: 7rem 0;
  margin-left: 3rem;
  ${({ theme }) => theme.mq.md} {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 0 1rem;
    margin-left: 0;
  }
`

const storyItems = [
  {
    title: 'First story',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam possimus exercitationem repellendus sed voluptatum, sunt harum, inventore sit saepe reiciendis repellat aspernatur hic! Similique voluptatem ullam velit sit beatae commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, excepturi beatae ipsa, aperiam deleniti laudantium non doloribus aspernatur nam eveniet tempora cupiditate fugit, rem consectetur. Tenetur quos dolorem magni quibusdam.',
    img: buildingImg,
    link: {
      to: '/about',
      text: 'Read about our impact'
    }
  },
  {
    title: 'First story',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam possimus exercitationem repellendus sed voluptatum, sunt harum, inventore sit saepe reiciendis repellat aspernatur hic! Similique voluptatem ullam velit sit beatae commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, excepturi beatae ipsa, aperiam deleniti laudantium non doloribus aspernatur nam eveniet tempora cupiditate fugit, rem consectetur. Tenetur quos dolorem magni quibusdam.',
    img: crowdImg,
    link: {
      to: '/about',
      text: 'Read about our impact'
    }
  }
]
