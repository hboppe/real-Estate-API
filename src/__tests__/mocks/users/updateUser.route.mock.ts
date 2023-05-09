export default {
  userAdminTemplate: {
    name: 'Fabio',
    email: 'fabio@kenzie.com.br',
    password: 'Senh@123',
    admin: true,
  },
  userNotAdminTemplate: {
    name: 'Cauan',
    email: 'cauan@kenzie.com.br',
    password: 'Senh@123',
    admin: false,
  },
  userComplete: {
    name: 'Cauan',
    email: 'cauan.f@kenzie.com.br',
    password: 'Senh@123',
  },
  userPartial: {
    password: 'Senh@123',
  },
  userAdmin: {
    password: 'Senh@123',
    admin: true,
  },
  userUnique: {
    name: 'Maykel',
    email: 'maykel@kenzie.com.br',
    password: 'Senh@123',
  },
  userInvalidBody: {
    name: 1234,
    email: [],
  },
  userInvalidBody2: {
    name: 'um nome com mais de quarenta e cinco caracteres!',
    email: 'mail',
    password: 123456,
  },
};
