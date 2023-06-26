import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact-banner p-8 my-12">
      {/* <form className='justify-center items-center text-center w-full md:w-2/5 m-auto'>
                <h3 className='font-semibold text-lg text-sky-500'>contact us</h3>
                <h2 className='text-4xl text-white font-semibold mb-7'>Stay connected with us</h2>
                <input className='w-full rounded-lg mb-5 p-3' type="email" name="text" id="" placeholder='Email'/>
                <input className='w-full rounded-lg mb-5 p-3' type="text" name="text" id="" placeholder='subject'/>
                <textarea name="" id="" placeholder='message' className='w-full h-24 rounded-lg p-3'></textarea>
                <input className='bg-sky-500 font-semibold text-white px-8 mt-3 rounded-lg py-2' type="submit" value="Submit" />
           </form> */}

      <div className="contact-background">
        <div className="contact-container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>

            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact">CONTACT INFO : +01757146195</div>
              </div>

              <form className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="NAME"
                      value="Keep Smile"
                    />
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input className="app-form-control" placeholder="MESSAGE" />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button mr-3">CANCEL</button>
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
