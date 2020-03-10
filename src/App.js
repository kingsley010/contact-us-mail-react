import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    render() {
        return(
           //Our form goes here
           <form id="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
              
           <div id="form-group">
              <label class="message-name" htmlFor="message-name">Your Name</label>
              <input className="form-control" onChange={e => this.setState({ name: e.target.value})} name="name" type="text" placeholder="Your Name" value={this.state.name}/>
           </div>

           <div id="form-group">
              <label class="message-email" htmlFor="message-email">Your Email</label>
              <input className="form-control" onChange={(e) => this.setState({ email: e.target.value})} name="email" type="email" placeholder="your@email.com" required value={this.state.email} />
           </div>

           <div id="form-group">
              <label class="message" htmlFor="message-input">Your Message</label>
              <textarea className="form-control" onChange={e => this.setState({ message: e.target.value})} name="message" type="text" placeholder="Please write your message here" value={this.state.message} required/>
           </div>  
         
           <div className="button--container">
               <button type="submit" className="btn btn-primary" >{ this.state.buttonText }</button>
           </div>
         </form>
        );
    }

    formSubmit = (e) => {
      e.preventDefault()
    
      this.setState({
          buttonText: '...sending'
      })
    
      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      
      axios.post('API_URI', data)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
    }

    resetForm = () => {
      this.setState({
          name: '',
          message: '',
          email: '',
          buttonText: 'Message Sent'
      })
  }

}

export default Contact;
