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
              <br></br>
              <br></br>
           <div className="form-group container col-md-6">
              <label className="name" htmlFor="name">Your Name</label>
              <input className="form-control" onChange={e => this.setState({ name: e.target.value})} name="name" type="text" placeholder="Your Name" value={this.state.name} required/>
           </div>

           <div className="form-group container col-md-6">
              <label className="email" htmlFor="email">Your Email</label>
              <input className="form-control" onChange={(e) => this.setState({ email: e.target.value})} name="email" type="email" placeholder="your@email.com" value={this.state.email} required/>
           </div>

           <div className="form-group container col-md-6">
              <label className="message" htmlFor="message">Your Message</label>
              <textarea className="form-control" onChange={e => this.setState({ message: e.target.value})} name="message" type="text" placeholder="Please write your message here" value={this.state.message} required/>
           </div>  
         
           <div className="button--container container col-md-6">
               <button type="submit" className="btn btn-primary" >{ this.state.buttonText }</button>
           </div>
         </form>
        );
    }

    formSubmit = (e) => {
      e.preventDefault()
    
      this.setState({
          buttonText: '...sending'
      });
    
      let data = {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
      }
      
      axios.post('https://contact-us-mail-node-express-o43qgy9wy.now.sh/api/v1', data)
      .then( res => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      });
    }

    resetForm = () => {
      this.setState({
          name: '',
          message: '',
          email: '',
          buttonText: 'Message Sent'
      });
  }

}

export default Contact;
