export default function Image() {
  return (
    <section>
      <img
        src='/images/background-pattern-mobile.svg'
        alt='mobile backround cover'
        className='sm:hidden'
      />
      <img
        src='/images/background-pattern-desktop.svg'
        alt='mobile backround cover'
        className='hidden sm:block'
      />
    </section>
  );
}
