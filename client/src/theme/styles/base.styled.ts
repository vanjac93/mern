import styled, { createGlobalStyle } from 'styled-components'

import { hexToRGB } from '@client/utils/style'

export const GlobalBaseStyle = createGlobalStyle`

html, body{
  font-size: 14px;
}

body {
  margin: 0;
  padding: 0;
  font-family:   ${({ theme }) => (theme.isRtl ? theme.font.rtl : theme.font.ltr)};
  background: ${(props) => props.theme.colors.bg};
  color: ${(props) => props.theme.colors.text};
  height: 100%;
  overflow-x: hidden;
  min-width: 320px;
  line-height: 1.4;
  /* -webkit-font-smoothing: antialiased; */
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale;
}

/* ::selection {
    background-color: ${(props) => hexToRGB('#ffffff', 0.4)};;
    
} */

*{
  outline: none;
}


.Toastify__toast {
  min-height: 50px !important;
  margin-bottom: 5px !important;
}

.Toastify__toast-body {
  margin: auto 10px !important;
}

.Toastify__toast-container {
  /* top: 0 !important; */
  padding: 5px 0 0 !important;
  width: min-content !important;
  white-space: nowrap !important;
}

.Toastify__toast-container p {
  margin: 0 5px;
  color: white !important;
}

a {
  text-decoration: none;
  color:${(props) => props.theme.colors.text}; ;
  &:hover{
    color:${(props) => props.theme.colors.primary}; ;

  }
}

/* Font settings */
body {
  font-family: ${(props) => props.theme?.font?.ltr};
  button,input,optgroup,select,textarea,h1,h2,h3,h4,h5, .Toastify__toast {
    font-family: ${(props) => props.theme?.font?.ltr};
  }
}
body.rtl {
  font-family: ${(props) => props.theme?.font?.rtl};
  button,input,optgroup,select,textarea,h1,h2,h3,h4,h5, .Toastify__toast {
    font-family: ${(props) => props.theme?.font?.rtl};
  }
}

.mi-select-dropdown {
  display: block;
  position: absolute;
  top: 28px;
  left: -1px;
  z-index: 9999;
}
.mi-select-dropdown-hidden {
    display: none;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
  }

  .subcontent{
    border-radius: 5px;
    padding: 5px;
  }

  img{
    max-width: 100%;
  }

  body .video-js{
    font-family:   ${({ theme }) => (theme.isRtl ? theme.font.rtl : theme.font.ltr)};
  }

  [aria-disabled="true"] {
    pointer-events: none;
  }
`
