import React, { Component } from 'react'
import './Contact.css';
import { sendEmailAction } from '../constants';

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateHuman(honeypot) {
    if (honeypot) {  //if hidden form filled up
      return true;
    }
  }

  // get all data in form and return object
  getFormData(form) {
    var elements = form.elements;

    var fields = Object.keys(elements).filter(function (k) {
      return (elements[k].name !== "honeypot");
    }).map(function (k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    }).filter(function (item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function (name) {
      var element = elements[name];

      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

    return formData;
  }

  disableAllButtons(form) {
    var buttons = form.querySelectorAll("input");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }

  handleSubmit(event) {
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    //const data = new FormData(form);
    var data = this.getFormData(form);         // get the values submitted in the form

    /* OPTION: Remove this comment to enable SPAM prevention, see README.md
    if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
      return false;
    }
    */

    // if( data.email && !validEmail(data.email) ) {   // if email is not valid show error
    //   var invalidEmail = form.querySelector(".email-invalid");
    //   if (invalidEmail) {
    //     invalidEmail.style.display = "block";
    //     return false;
    //   }
    // } else {
    this.disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      // var formElements = form.querySelector(".form-elements")
      // if (formElements) {
      //   formElements.style.display = "none"; // hide form
      // }
      var thankYouMessage = form.querySelector(".thankyou_message");
      if (thankYouMessage) {
        thankYouMessage.style.display = "block";
      }
      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
    //}
  };

  render() {
    return (
      <div className='container'>
        <div className='contact-head'><h3>Contact</h3></div>
        <form id="contact-form" onSubmit={this.handleSubmit} action={sendEmailAction}>
          <div className="thankyou_message">
            <h6 className='text-success'>Thanks for contacting us! We will get back to you soon!</h6>
          </div>
          <br/>
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
