import "./ContactUs.css"

let Contact = () =>{
    return(
    <section id="contact" className="Contact_Form">
        <div className="Form_title">
        <span>Contact Us</span>
        <h1>Discuss your Project</h1>
        </div>
        <a href="https://example.com">
  <div ><i class="fa-solid fa-envelope icon"></i>Gmail</div>
</a>
<a href="https://example.com">
        <div><i class="fa-brands fa-facebook icon"></i>Facebook</div>
        </a>   
        <a href="https://example.com">
        <div><i class="fa-brands fa-whatsapp icon"></i> Whatsapp</div>
        </a>
    </section>
    )
}

export default Contact