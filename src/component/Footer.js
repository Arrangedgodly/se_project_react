import '../blocks/footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h3 className='footer__text'>Developed by Grady Wasil</h3>
      <p className='footer__text-alt'>{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;