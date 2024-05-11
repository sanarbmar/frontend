
import React from 'react';
import {render, screen} from '@testing-library/react'
import Login from './Login'

describe('Login component', () => {

    test('El formulario se encuentra en el documento', () => { 
        render(<Login />);
        const formulario = screen.getByRole('form')
        expect(formulario).toBeInTheDocument();
    });
})
