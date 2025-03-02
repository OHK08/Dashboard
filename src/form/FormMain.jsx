import React from 'react'
import { DarkModeProvider } from './DarkModeContext'
import Form from './Form';
import DarkModeToggle from './DarkModeToggle';

export default function FormMain() {
  return (
    <>
        <DarkModeProvider>
            <Form/>
            <DarkModeToggle/>
        </DarkModeProvider>
    </>
  )
}
