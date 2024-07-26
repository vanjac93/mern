import { Flex } from '~/components/layout/Box'
import { FeatureType } from './types'
import { Typography } from '~/components/layout/Typography'
import { UnderlinedLink } from '~/components/ui/Link'

interface FeatureProps {
  feature: FeatureType
}

export default function Feature({ feature }: FeatureProps) {
  const { icon, text, title, link } = feature
  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Flex flexDirection="column">
        <Flex className="title" mb="1rem" gap="1rem" alignItems="baseline">
          <Flex
            bg="bgAlt"
            borderRadius="50%"
            height={48}
            width={48}
            color="primary"
            p="1rem"
            alignItems="center"
            justifyContent="space-around"
          >
            {icon}
          </Flex>
          <Typography
            fontSize={{
              _: 22,
              lg: 26
            }}
            as="h3"
            fontWeight={600}
          >
            {title}
          </Typography>
        </Flex>
        <Typography
          fontWeight={500}
          fontSize={{
            _: 16,
            lg: 18
          }}
          mb="1rem"
          as="p"
        >
          {text}
        </Typography>
      </Flex>
      <UnderlinedLink link={link} />
    </Flex>
  )
}
