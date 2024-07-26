import { ReactNode } from 'react'
import { Flex } from '~/components/layout/Box'
import { Typography } from '~/components/layout/Typography'
import QAItem from './QaItem'
import { useTranslation } from 'react-i18next'

interface FaqProps {
  faq: QaType[]
}

interface QaType {
  question: string
  answer: ReactNode
}

export default function Faq({ faq }: FaqProps) {
  const { t } = useTranslation()
  return (
    <Flex
      p={{
        _: '2rem',
        lg: '4rem'
      }}
      flexDirection="column"
      gap="1rem"
    >
      <Typography
        as="h3"
        fontSize={{
          lg: 28,
          _: 22
        }}
      >
        {t('FAQ')}
      </Typography>
      {faq.map((qaItem, i) => (
        <QAItem key={i} {...qaItem} />
      ))}
    </Flex>
  )
}
