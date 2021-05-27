import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const Button = styled.div`
  z-index: 5;
  cursor: pointer;
`;

const Path = (props) => {
  return (
    <motion.path
      fill='transparent'
      transition='ease-in-out'
      strokeLinecap='round'
      strokeWidth='3.5'
      {...props}
    />
  )
};

const transition = {duration: 0.1};

const MenuButton = ({toggle, isOpen}) => {
  return (
    <Button onClick={toggle}>
      <svg width='55' height='55' viewBox='0 0 25 25'>
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: {d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 18%)'},
            open: {d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)'},
          }}
          transition={transition}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          stroke='hsl(0, 0%, 18%'
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: {opacity: 1},
            open: {opacity: 0},
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: {d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 18%)'},
            open: {d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%'},
          }}
          transition={transition}
        />
      </svg>
    </Button>
  )
};

export default MenuButton;