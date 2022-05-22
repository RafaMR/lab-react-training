const Greetings = ({ lang, children }) => {
  let greet = '';

  if (lang === 'de') {
    greet = 'Hallo';
  } else if (lang === 'en') {
    greet = 'Hello';
  } else if (lang === 'es') {
    greet = 'Hola';
  } else {
    greet = 'Bonjour';
  }

  return (
    <div className="Greetings">
      <p>
        {greet} {children}
      </p>
    </div>
  );
};

export default Greetings;
