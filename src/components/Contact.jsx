import React, { Component } from 'react'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Contact.css';


export default class Contact extends Component {
  render() {
    return (
      <div className='container'>
        <div className='contact-head'><h4>Contact Us</h4></div>
        <form id="contact-form" role="form">
          <div class="messages"></div>

          <div class="controls">

            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_name">First Name *</label>
                  <input id="form_name" type="text" name="firstname" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_lastname">Last Name *</label>
                  <input id="form_lastname" type="text" name="lastname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_email">Email *</label>
                  <input id="form_email" type="email" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="form_phone">Phone</label>
                  <input id='form_phone' type='number' name='phone' class='form-control' placeholder='Please enter your phone number' data-error='Valid phone number required'></input>
                  <div class="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="form_message">Message *</label>
                  <textarea id="form_message" name="message" class="form-control" placeholder="Message for me *" rows="4" required="required" data-error="Please, leave us a message."></textarea>
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div>
              </div>
              <div class="col-md-12">
                <input type="submit" class="btn btn-success btn-send" value="Send message" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <p class="text-muted">
                  <strong>*</strong> These fields are required.
                  </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
