const fs = require("fs").promises;

const contactsPath = async () => {
  const data = await fs.readFile("./db/contacts.json", "utf-8");
  const contactsData = await JSON.stringify(data);
  console.log("contactsPath  contactsData:", contactsData);
};

contactsPath();
// TODO: задокументувати кожну функцію
async function listContacts() {
  // ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
module.exports = { contactsPath, listContacts };
