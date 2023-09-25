const express = require('express');
const { faker } = require('@faker-js/faker')

const app = express();
const port = 3000;


const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(), 
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: faker.address.streetAddress(),
    street: faker.address.streetName(),
    city: faker.address.city(),
    state: faker.address.state(),
    zipCode: faker.address.zipCode(),
    country: faker.address.country(),
  };
  return newCompany;
};

// API routes
app.get('/api/users/new', (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get('/api/user/company', (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  res.json({ user: newUser, company: newCompany });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
