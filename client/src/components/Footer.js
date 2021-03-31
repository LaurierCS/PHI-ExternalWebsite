import React from "react";


const Footer = () => {
    return (
        <div>
            <div className="footer_container">
                <div className="row">
                    <div className = "columns">
                        <div className="footer_contact">                        
                            <h4>Contact Us</h4>
                            <ul>
                                
                                <h5>Get in touch with the laurier
                                Computing Society for professional
                                and general inquiries
                                </h5>
                                <button> LEARN MORE</button>
                
                            </ul>
                        </div>
                        <div className="footer_connect">
                            <h4>Connect</h4>
                            <ul>
                                <h5>Connect and follow us to stay updated on upcoming events and computing related news</h5>
                            </ul>
                            <icon> </icon>
                            <icon> </icon>
                        </div>
                    
                        <div className="footer_member">
                        
                            <h4>Become a Member</h4>
                            <ul>
                                <h5>The first step to becoming a member is subscribing to our mailling list</h5>
                                <button> LEARN MORE</button>
                            </ul>

                        </div>

                    </div>
                   

                    

                </div>
                
               


            </div>

            <div className="copyright_text">
                <h6>Copyright @2021 Laurier Computing Society | Terms of Service | FAQ </h6>
            </div>

        </div>
    );
};

export default Footer;
