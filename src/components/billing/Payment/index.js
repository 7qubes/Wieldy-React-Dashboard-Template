import React from "react";

import PaymentCell from "./PaymentCell/index";

const ContactList = ({paymentList, addFavourite, onContactSelect, onSaveContact, onDeleteContact}) => {
  return (
    <div className="gx-contact-main-content">
      {paymentList.map((contact, index) =>
        <PaymentCell key={index} contact={contact} onDeleteContact={onDeleteContact}
                     onSaveContact={onSaveContact}
                     addFavourite={addFavourite} onContactSelect={onContactSelect}/>
      )}

    </div>
  )
};

export default ContactList;
