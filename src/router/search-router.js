const express = require('express')
const search = express.Router();
const bp = require("body-parser");

search.use(cors())
search.use(bp.json())
search.use(bp.urlencoded({ extended: true }))

search.get('/search', (req, res) => {
    const searchKw = req.query.name
    const searchCt = req.query.city
    const searchTy = req.query.type
    const searchMt = req.query.month
    let sql = "";
    if (searchKw) {
      sql = "select * from Event_data WHERE Eventname LIKE '%" + searchKw + "%'"; // {name}
      if (searchCt && searchCt != "") {
        sql += " AND Location = '" + searchCt + "'"; // {name, city}
        if (searchTy && searchTy != "") {
          sql += " AND Eventtype = '" + searchTy + "'"; // {name, city, type}
          if (searchMt && searchMt != "") {
            sql += " AND  MONTH(DATE_TIME) = '" + searchMt + "'"; // {name, city, type, month}
          }
        } else if (searchMt && searchMt != "") {
          sql += " AND  MONTH(DATE_TIME) = '" + searchMt + "'"; // {name, city, month}
        }
      }
      else if (searchTy && searchTy != "") {
        // {name, type}
        sql += " AND Eventtype = '" + searchTy + "'";
        if (searchMt && searchMt != "") {
          sql += " AND  MONTH(DATE_TIME) = '" + searchMt + "'"; // {name, type, month}
        }
      }
      else if (searchMt && searchMt != "") {
        sql += " AND MONTH(DATE_TIME) = '" + searchMt + "'"; // {name, month}
      }
      console.log(sql);
    }
    else if (searchCt && searchCt != "") {
      sql = "select * from Event_data WHERE Location = '" + searchCt + "'"; // {city}
      if (searchTy && searchTy != "") {
        sql += " AND Eventtype = '" + searchTy + "'"; // {city, type}
        if (searchMt && searchMt != "") {
          sql += " AND MONTH(DATE_TIME) = '" + searchMt + "'"; // {city, type, month}
        }
      }
      else if (searchMt && searchMt != "") {
        sql += " AND MONTH(DATE_TIME) = '" + searchMt + "'"; // {city, month}
      }
      console.log(sql);
    }
    else if (searchTy && searchTy != "") {
      sql = "select * from Event_data WHERE Eventtype = '" + searchTy + "'"; // {type}
      if (searchMt && searchMt != "") {
        sql += " AND MONTH(DATE_TIME) = '" + searchMt + "'"; // {type, month}
      }
      console.log(sql);
  
    }
    else if (searchMt && searchMt != "") {
      sql = "select * from Event_data WHERE MONTH(DATE_TIME) = '" + searchMt + "'"; // {month}
      console.log(sql);
  
    }
    connection.query(sql, function (error, results) {
      if (error) throw error;
      return res.send({ error: false, result: results });
    });
  
  });

module.exports = search;