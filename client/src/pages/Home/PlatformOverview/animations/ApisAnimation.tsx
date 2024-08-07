import React, { SVGAttributes } from 'react'
import styled from 'styled-components'
import { SVGMotionProps, motion } from 'framer-motion'

export default function ApisAnimation({ isHovering }: { isHovering: boolean }) {
  return (
    <StyledSvg style={{ padding: 10 }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 141.02">
      <CustomCircle cx="2.25" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="237.75" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="211.58" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="185.42" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="159.25" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="80.75" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="54.58" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="28.42" cy="70.51" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="211.58" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="185.42" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="159.25" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="80.75" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="54.58" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="28.42" cy="55.34" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="185.42" cy="40.17" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="159.25" cy="40.17" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="40.17" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="40.17" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="80.75" cy="40.17" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="54.58" cy="40.17" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="159.25" cy="25" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="25" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="25" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="80.75" cy="25" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="9.83" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="9.83" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="211.58" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="185.42" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="159.25" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="80.75" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="54.58" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="28.42" cy="85.68" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="185.42" cy="100.85" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="159.25" cy="100.85" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="100.85" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="100.85" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="80.75" cy="100.85" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="54.58" cy="100.85" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="159.25" cy="116.02" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="116.02" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="116.02" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="80.75" cy="116.02" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="133.08" cy="131.19" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="106.92" cy="131.19" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="15.37" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="224.7" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="198.54" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="172.37" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="67.7" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="41.54" cy="62.93" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="15.37" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="224.7" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="198.54" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="172.37" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="67.7" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="41.54" cy="78.1" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="198.54" cy="47.76" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="172.37" cy="47.76" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="47.76" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="47.76" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="47.76" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="67.7" cy="47.76" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="41.54" cy="47.76" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="172.37" cy="32.59" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="32.59" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="32.59" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="32.59" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="67.7" cy="32.59" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="17.42" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="17.42" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="17.42" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="2.25" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="198.54" cy="93.26" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="172.37" cy="93.26" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="93.26" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="93.26" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="93.26" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="67.7" cy="93.26" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="41.54" cy="93.26" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="172.37" cy="108.43" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="108.43" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="108.43" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="108.43" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="67.7" cy="108.43" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="146.2" cy="123.6" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="123.6" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="93.87" cy="123.6" r="2.25" fill="#9EA6B3"></CustomCircle>
      <CustomCircle cx="120.04" cy="138.77" r="2.25" fill="#9EA6B3"></CustomCircle>
    </StyledSvg>
  )
}

const StyledSvg = styled.svg`
  cursor: pointer;
`

type CustomCircleProps = SVGAttributes<SVGCircleElement> & SVGMotionProps<SVGCircleElement>

function CustomCircle(props: CustomCircleProps) {
  return (
    <motion.circle
      {...props}
      whileHover={{
        scale: 2
      }}
    />
  )
}
