import React, { useState } from 'react';

const ConnectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic, e.g., send data to API
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="pageclip-form"
      method="post"
      action="https://send.pageclip.co/czS9Mdj8XGyk1ySJKFfwI7JdHkBlkFUN"
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
     <input
        type="text"
        name="name"
        placeholder="message "
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ConnectForm;
