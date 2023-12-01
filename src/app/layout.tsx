import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../../theme';
import "@mantine/dates/styles.css";
import 'react-simple-toasts/dist/theme/dark.css'
import {Poppins} from "next/font/google"
import '@mantine/tiptap/styles.css';


export const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  variable: '--poppins-default'
});

export const metadata = {
  title: 'Ninox - Fox',
  description: 'Ninox - Fox',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=yes"
        />
      </head>
      <body style={poppins.style}>
        <MantineProvider theme={theme} defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}