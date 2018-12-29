import React, { Component } from 'react'
import './Contact.css';


export default class Contact extends Component {
  render() {
    return (
      <div className='container'>
        <div className='contact-head'><h3>Contact</h3></div>
        <form id="contact-form">
          <div className="messages"></div>

          <div className="controls">

            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="form_name">First Name <span className='text-danger'>*</span></label>
                  <input id="form_name" type="text" name="firstname" className="form-control font-weight-light" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="form_lastname">Last Name <span className='text-danger'>*</span></label>
                  <input id="form_lastname" type="text" name="lastname" className="form-control font-weight-light" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="form_email">Email <span className='text-danger'>*</span></label>
                  <input id="form_email" type="email" name="email" className="form-control font-weight-light" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="form_phone">Phone</label>
                  <input id='form_phone' type='number' name='phone' className='form-control font-weight-light' placeholder='Please enter your phone number' data-error='Valid phone number required'></input>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="form-group">
                  <label htmlFor="form_message">Message <span className='text-danger'>*</span></label>
                  <textarea id="form_message" name="message" className="form-control font-weight-light" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div>
              </div>
              <div className="col-md-8">
                <input type="submit" className="btn btn-success btn-send shadow" value="Send Message" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <p className="text-muted">
                  <strong className='text-danger'>*</strong> These fields are required.
                  </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
