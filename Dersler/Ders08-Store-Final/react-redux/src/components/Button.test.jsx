import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Buton var mı?', () => {
    render(<Button id="btn" />)
    expect(screen.getByTestId('btn')).toBeInTheDocument();
})

test('Butonun texti doğru mu?', () => {
    render(<Button text='Merhaba'/>)
    expect(screen.getByText('Merhaba')).toBeInTheDocument();
})

