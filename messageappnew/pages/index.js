import { ThemeProvider } from '@material-ui/core'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../Components/Main'
import { theme } from '../theme'


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Main/>
    </ThemeProvider>
  )
}
