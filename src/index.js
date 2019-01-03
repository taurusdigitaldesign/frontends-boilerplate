import React from 'react'
import { render } from 'react-dom'
import '@babel/polyfill'
import { Header } from '@/components'

render(
    <Header />,
    document.getElementById('root')
)