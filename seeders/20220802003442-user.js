'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const user = [
      {
        "id": 1,
        "username": "ilham",
        "email": "ilham@gmail.com",
        "desc": "sibuk",
        "createdAt": "2022-08-01T03:50:31.762Z",
        "updatedAt": "2022-08-01T03:50:31.762Z"
      },
      {
        "id": 2,
        "username": "abdurrahman",
        "email": "abdurrahman@gmail.com",
        "desc": "available",
        "createdAt": "2022-08-01T03:51:27.781Z",
        "updatedAt": "2022-08-01T03:51:27.781Z"
      },
      {
        "id": 3,
        "username": "habiburahman",
        "email": "habib@gmail.com",
        "desc": "kerja",
        "createdAt": "2022-08-01T03:52:00.644Z",
        "updatedAt": "2022-08-01T03:52:00.644Z"
      }
    ]

    console.log(user)

    await queryInterface.bulkInsert('users', user, {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('users', null, {});
  }
};
