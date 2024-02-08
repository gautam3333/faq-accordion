import { useState } from 'react';

export default function Accordion({ question }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <article>
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-darkPurple max-w-52 sm:max-w-2xl hover:cursor-pointer hover:text-purple hover:transition-all'>
          {question.question}
        </h2>
        <button onClick={() => setIsActive((t) => !t)}>
          {isActive ? (
            <>
              <img src='/images/icon-minus.svg' alt='icon minus' />
            </>
          ) : (
            <>
              <img src='/images/icon-plus.svg' alt='icon plus' />
            </>
          )}
        </button>
      </div>
      {isActive ? (
        <p className='text-base text-grayishPurple py-6'>{question.answer}</p>
      ) : (
        ''
      )}
    </article>
  );
}
