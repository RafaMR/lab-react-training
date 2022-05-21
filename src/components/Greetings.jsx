const Greetings = ({ lang, children }) => {
  let greet = '';

  if (lang === 'de') {
    greet = 'Halo';
  } else if (lang === 'en') {
    greet = 'Hello';
  } else if (lang === 'es') {
    greet = 'Hola';
  } else {
    greet = 'Bonjour';
  }

  return (
    <p>
      {greet} {children}
    </p>
  );
};

export default Greetings;
