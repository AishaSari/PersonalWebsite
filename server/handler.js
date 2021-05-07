'use strict';

// Usually, the server is responsible in connecting with the Database and sending it to the front-end
// Data is usually either JSON (https://www.w3schools.com/js/js_json_intro.asp) or XML (https://www.w3schools.com/xml/xml_whatis.asp)
module.exports.hello = async (event) => {
  return {
    // TODO: try to see if you can modify the json and see how it respond
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'This is data from the server!',
      },
      null,
      2
    ),
  };
};
