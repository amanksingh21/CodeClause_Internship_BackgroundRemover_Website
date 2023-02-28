var request = require("request");
var fs = require("fs");

request.post(
  {
    url: "https://api.remove.bg/v1.0/removebg",
    formData: {
      image_url:
        "https://rukminim1.flixcart.com/image/416/416/xif0q/poster/i/i/w/small-animal14-hd-cute-puppy-wall-poster-for-home-decoration-hd-original-imaghj22g57yryv4.jpeg?q=70",

      size: "auto",
    },
    headers: {
      "X-Api-Key": "hwRdErFLPTCP16gueiV9QR13",
    },
    encoding: null,
  },
  function (error, response, body) {
    if (error)
      return console.error(
        "Request Failed Because Invalid URL or file:",
        error
      );

    if (response.statusCode != 200)
      return console.error(
        "Error:",
        response.statusCode,
        body.toString("utf8")
      );

    fs.writeFileSync("./removed.png", body);
  }
);
//Krishil Shah