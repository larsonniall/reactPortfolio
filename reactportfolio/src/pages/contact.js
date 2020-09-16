import React from "react";
import Jumbotron from "../components/jumbotron";

function Contact() {
return (
    <div>
        <Jumbotron>
    <h1 class="text-secondary">Contact Info</h1>
    <hr />
    <form>
      <section class="form-group">
        <label for="exampleFormControlInput1">Your Name</label>
        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
      </section>
      <section class="form-group">
        <label for="exampleFormControlInput1">Email Address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
      </section>
      <section class="form-group">
        <label for="exampleFormControlTextarea1">Any suggestions or questions for me?</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </section>
      <section>
        <button type="submit" class="btn btn-primary bg-dark">Submit</button>
      </section>
    </form>
    </Jumbotron>
</div>
);

}

export default Contact