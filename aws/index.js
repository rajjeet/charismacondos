const { SERVER_RECAPTCHA_TOKEN, SOURCE_EMAIL, TARGET_EMAIL } = require("./config")

let axios = require("axios")
let querystring = require("querystring")
let AWS = require("aws-sdk")

exports.handler = async (event) => {
  console.log('SOURCE EMAIL', SOURCE_EMAIL)
  const data = querystring.parse(event.body)
  const token = data ? data.token : null
  if (token) {
    const response = await axios({
      method: "post",
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${SERVER_RECAPTCHA_TOKEN}&response=${token}`,
    })
    console.log("recaptcha response score", response.data.score)
    if (Number(response.data.score) >= 0.1) {

      AWS.config.update({ region: "us-east-1" })

      let params = {
        Destination: {
          ToAddresses: [TARGET_EMAIL],
        },
        Message: {
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: Object.keys(data)
                .filter(key => key !== "token" && data[key].trim() !== "")
                .reduce((a, v) => a + `${v}: ${data[v]}\n`, ""),
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: `Charisma Condos Inquiry: ${data.name}`,
          },
        },
        Source: SOURCE_EMAIL,
      }
      try {
        const result = await new AWS.SES({ apiVersion: "2010-12-01" })
          .sendEmail(params)
          .promise()

        console.log(result)
        return {
          statusCode: 200,
          body: JSON.stringify("Success"),
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      } catch (err) {
        console.error(err, err.stack)
      }
    }
  }
  return {
    statusCode: 400,
    headers: { "Access-Control-Allow-Origin": "*" },
  }

}
