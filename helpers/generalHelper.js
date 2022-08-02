'use strict';
const Op = require('sequelize').Op

function generateToken(payload, secret_key, time) {
  const token = jwt.sign(payload, secret_key, { expiresIn: parseInt(time) })
  return token
}

function cekToken(token, secret_key) {
  return jwt.verify(token, secret_key)
}


function searchBy(kota, kecamatan, kelurahan) {
  return {
    kota: {
      [ Op.like ]: `%${kota}%`
    },
    kecamatan: {
      [ Op.like ]: `%${kecamatan}%`
    },
    kelurahan: {
      [ Op.like ]: `%${kelurahan}%`
    }
  }

}

function searchByKota(kota) {
  return {
    kota: {
      [ Op.like ]: `%${kota}%`
    }
  }

}

function getPagination(page, size) {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

function getPagingData(list, page, limit) {
  const totalItems = list.count
  const data = list.rows
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, data, totalPages, currentPage };
};


function hashPassword(plainPassword) {
  const salt = bcrypt.genSaltSync(5)
  const hash = bcrypt.hashSync(plainPassword, salt)
  return hash
}

function comparePassword(plainPassword, dbPassword) {
  return bcrypt.compareSync(plainPassword, dbPassword)
}

function cekTimeRequest(time) {
  let checkTime = Date.now() <= time
  // console.log(checkTime)
  return checkTime
}

function replaceAll(data = null) {
  let temp = data.replace(/ /g, '_');  // replace space " " -> underscore "_"
  let temp1 = temp.replace('.', ''); // replace dot "." -> none ""
  // console.log('temp1 >>> ' + temp1)
  return temp1;
}


module.exports = {
  searchBy,
  searchByKota,
  getPagination,
  getPagingData,
  hashPassword,
  comparePassword,
  generateToken,
  cekToken,
  cekTimeRequest,
  replaceAll
}