import Accordion from './Accordion';

import { questions } from '../data/questions';
import { useState } from 'react';

export default function Card() {
  const [curIsOpen, setCurIsOpen] = useState(null);

  return (
    <section className='bg-white max-w-80 rounded-lg p-6 mx-auto -mt-20 relative z-10 sm:max-w-xl shadow-md'>
      <div className='flex items-center gap-4 mb-8'>
        <img src='/images/icon-star.svg' alt='icon star' className='w-6' />
        <h1 className='text-2xl font-bold text-darkPurple'>FAQs</h1>
      </div>
      <ul className='flex flex-col gap-4'>
        {questions.map((query, index) => (
          <li
            key={query.question}
            className='[&:not(:last-child)]:border-b border-lightPink pb-6'
          >
            <Accordion
              question={query}
              index={index}
              curIsOpen={curIsOpen}
              onSetCurIsOpen={setCurIsOpen}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
