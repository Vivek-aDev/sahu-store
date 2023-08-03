import React from "react";
import { styled } from "styled-components";

export const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>

      <iframe
        title="find us here"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2127903417827!2d85.85383327614915!3d20.291457512691697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a05023c6bc5%3A0x57eb03e43d3dd622!2sNexus%20Esplanade!5e0!3m2!1sen!2sin!4v1691056129232!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <div className="contact-form">
          <form className="contact-inputs" action="" method="post">
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              autoComplete="off"
              required
            />
            <input
              type="text"
              placeholder="Enter your Email"
              name="Email"
              autoComplete="off"
              required
            />
            <textarea
              placeholder="Write the message"
              name="Message"
              autoComplete="off"
              required
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" name="" value="submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
