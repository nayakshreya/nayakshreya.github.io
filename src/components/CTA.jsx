import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Interested in learning more about my work or <br className='sm:block hidden' />
        have a project in mind? <br className='sm:block hidden' />
        Let's connect and bring your ideas to life!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;