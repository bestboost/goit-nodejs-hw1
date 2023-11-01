const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    case "delete":
      const deleteContactById = await contacts.removeContact(id);
      return console.log(deleteContactById);
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "AeHIrLTr6JkxGE6SN-0Rw" });
invokeAction({ action: "delete", id: "o3gfYo6-KeB9YewPjnlPF" });
// invokeAction({
//   action: "add",
//   name: "Bob",
//   email: "bob@mail.com",
//   phone: 23467,
// });

console.log("Hello friends)))");
