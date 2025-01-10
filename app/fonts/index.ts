import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const innovatorGrotesk = localFont({
  src: [
    {
      path: './InnovatorGrotesk-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-ThinItalic.woff2',
      weight: '100',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-ExtraLightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './InnovatorGrotesk-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './InnovatorGrotesk-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-innovator',
}) 