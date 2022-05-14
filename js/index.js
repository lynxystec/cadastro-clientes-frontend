const form = document.querySelector('#form');
let id = localStorage.getItem('id') || 1;
let customers = JSON.parse(localStorage.getItem('customers')) || [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const customer = Object.create(null);
  customer.id = Number(id);
  customer.name = e.target.name.value;
  customer.email = e.target.email.value;
  customer.phone = e.target.phone.value;

  saveCustomer(customer);
});

function saveCustomer(customer) {
  customers.push(customer);
  localStorage.setItem('customers', JSON.stringify(customers));
  localStorage.setItem('id', id++);
}