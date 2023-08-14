import "./ContactUs.css"

let Contact = () =>{
    return(
    <section id="contact" className="Contact_Form">
        <div className="Form_title">
        <span>Contact Us</span>
        <h1>Discuss your Project</h1>
        </div>
        <div class="row">
  <div class="col mb-3">
    <input type="text" class="form-control" placeholder="name" aria-label="Name"/>
  </div>
  <div class="col mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
  </div>
</div>
     <div class="mb-3 ">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject"/>
</div>
<div class="mb-3">
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Project Details" rows="3"></textarea>
</div>
<button type="submit" class="btn">Send</button>
    </section>
    )
}

export default Contact