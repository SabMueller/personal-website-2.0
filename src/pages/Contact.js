import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components/macro';

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast(' ✓ Sabrina got your message! 🎉 ', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const userID = process.env.REACT_APP_USER_ID;

    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      await emailjs.send(serviceID, templateID, templateParams, userID);
      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ContactSection>
      <h1>Get in Touch</h1>
      <ContactForm
        id='contact-form'
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        {/* Row 1 of form */}
        <div className='row formRow'>
          <div className='col-6'>
            <input
              type='text'
              name='name'
              {...register('name', {
                required: {
                  value: true,
                  message: 'Please enter your name',
                },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              })}
              className='form-control formInput'
              placeholder='Your Name'></input>
          </div>
          <div className='col-6'>
            <input
              type='email'
              name='email'
              {...register('email', {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              className='form-control formInput'
              placeholder='Your Email'></input>
          </div>
        </div>
        {/* Row 2 of form */}
        <div className='row formRow'>
          <div className='col'>
            <input
              type='text'
              name='subject'
              {...register('subject', {
                required: {
                  value: true,
                  message: 'Please Enter A Subject',
                },
                maxLength: {
                  value: 45,
                  message: 'Subject Cannot Exceed 45 Characters',
                },
              })}
              className='form-control formInput'
              placeholder='Subject'></input>
          </div>
        </div>
        {/* Row 3 of form */}
        <div className='row formRow'>
          <div className='col'>
            <textarea
              rows={3}
              name='message'
              {...register('message', {
                required: true,
              })}
              className='form-control formInput'
              placeholder='Message'></textarea>
          </div>
        </div>
        <button className='submit-btn' type='submit'>
          Submit
        </button>
        {errors.name && <p className='errorMessage'>{errors.name.message}</p>}
        {errors.message && (
          <span className='errorMessage'>Please enter a message</span>
        )}
        {errors.subject && (
          <span className='errorMessage'>{errors.subject.message}</span>
        )}
        {errors.email && (
          <span className='errorMessage'>
            Please enter a valid email address
          </span>
        )}
      </ContactForm>
      <StyledToastContainer />
    </ContactSection>
  );
}

const ContactSection = styled.section`
  background-color: var(--gray-dark);
  padding-bottom: 5rem;

  h1 {
    font-family: var(--ff-cursive-alt);
    font-size: 3.5rem;
    text-align: center;
    padding: 2rem;
    color: var(--red);
    margin-bottom: 3rem;
  }
  h2 {
    font-family: var(--ff-cursive-alt);
    font-size: 2.5rem;
    text-align: left;
    color: var(--red);
    margin-top: 2rem;
  }

  h3 {
    font-family: var(--ff-serif);
    margin: 1.5rem 0 1rem 0;
    color: var(--gray-light);
    letter-spacing: 0.1rem;
    font-size: 1.3rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  input {
    background-color: #37495f;
    color: var(--black);
    border: hidden;
    margin: 0.5rem;
    width: 40vw;
    height: 1.5rem;
    padding: 0.5rem;
    font-family: var(--ff-sans);

    &:focus {
      outline-color: var(--white);
    }

    &::placeholder {
      color: darkgray;
    }
  }

  textarea {
    background-color: #37495f;
    color: var(--white);
    width: 40vw;
    height: 8rem;
    border: hidden;
    padding: 0.5rem;
    resize: none;
    margin: 0.5rem;
    font-family: var(--ff-sans);

    &:focus {
      outline-color: var(--white);
    }

    &::placeholder {
      color: darkgray;
    }
  }

  button {
    width: 20vw;
    height: 2rem;
    background-color: var(--red);
    border: 1px solid #a40003;
    border-radius: 100vw;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: 0.5rem;

    &:hover {
      background-color: #8a0002;
      transform: scale(1.1);
      color: var(--white);
      border: 1px solid #570001;
    }
  }

  .errorMessage {
    color: black;
    text-transform: uppercase;
    font-weight: bold;
    background-color: var(--orange);
    padding: 0.5rem;
    margin: 0.3rem;
    border-radius: 100vw;
    font-size: 1rem;
  }
`;

const StyledToastContainer = styled(ToastContainer)`
  text-align: center;

  .Toastify__toast {
    background-color: var(--blue-alt);
    color: var(--white);
  }
`;
