import React, { useContext } from "react";
import contactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const ContactContext = useContext(contactContext);
  const { deleteContact, setCurrent, clearCurrent } = ContactContext;

  const { _id, name, email, type, phone } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name.charAt(0).toUpperCase() + name.slice(1)}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i class='fas fa-envelope'></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i class='fas fa-phone'></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
export default ContactItem;
