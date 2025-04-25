export const handleChangeSetter = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,[name]: value,
    }));
  };
  
  export const inputFields = [
    { label: "First Name", name: "firstName", type: "text", required: true },
    { label: "Last Name", name: "lastName", type: "text", required: true },
    { label: "Email", name: "email", type: "email", required: true },
    { label: "University Name", name: "uniName", type: "text", required: true },
    { label: "Current Company", name: "curCompany", type: "text", required: true },
    { label: "Address", name: "address", type: "text", required: true },
    { label: "City", name: "city", type: "text", required: true },
    { label: "ZipCode", name: "zip", type: "text", required: true },
  ];
  