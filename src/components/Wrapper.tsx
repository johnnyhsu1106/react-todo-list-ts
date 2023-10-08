import { ReactNode } from 'react';
import { Container } from 'react-bootstrap'

const Wrapper  = ({ children } : { children: ReactNode}) => {
  return (
    <Container className='mt-5'>
      {children}
    </Container>
  )
}

export default Wrapper;
