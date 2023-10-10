import { ReactNode } from 'react';
import { Container } from 'react-bootstrap';

interface WrapperProps {
  children: ReactNode;
};


const Wrapper  = ({ children }: WrapperProps) => {
  return (
    <Container className='mt-5'>
      {children}
    </Container>
  )
}

export default Wrapper;
