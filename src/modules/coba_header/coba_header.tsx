'use client'
import React from 'react'
import { AppShell, Box, Group, Portal, rem, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import { PageSubTitle, WARNA } from '../_global';

const data = 'data aja'

export default function CobaHeader() {
    const pinned = useHeadroom({ fixedAt: 120 });
    return (
        <>
            {/* <Portal>
                
            </Portal> */}
            
            <Box
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                        padding: 'var(--mantine-spacing-xs)',
                        height: rem(120),
                        transform: `translate3d(0, ${pinned ? 0 : rem(-120)}, 0)`,
                        transition: 'transform 400ms ease',
                        backgroundColor: 'pink',
                }}
                >
                    Pinned header
                </Box>
            <Box pt={`calc(${rem(120)} + var(--mantine-spacing-md))`}>
            {Array(40)
                .fill(0)
                .map((_, index) => (
                    <Text size="lg" key={index} >
                        {data}
                    </Text>
                ))}
            </Box>
        </>
    )
}
