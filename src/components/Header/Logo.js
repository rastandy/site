import React from 'react'
import Link from 'gatsby-link'

import { Logo } from 'serverless-design-system'
import logo from 'src/assets/images/logo.svg'
import styled from 'styled-components'

const LogoWithDesktopTopMargin = styled(Logo)`
  @media screen and (min-width: 1200px) {
    margin-top: 6px;
  }
`

const LogoComponent = () => (
  <Link to='/'>
    <LogoWithDesktopTopMargin
      src={logo}
      height={['21px', '21px', '21px', '55px']}
      width={['124px', '124px', '124px', '153px']}
      alt='Serverless'
    />
  </Link>
)

export default LogoComponent