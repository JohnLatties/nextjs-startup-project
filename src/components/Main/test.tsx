import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should run a test', () => {
    render(<Main />)
    expect(screen.getByRole('heading', { name: /New app/ })).toBeInTheDocument()
  })
})
