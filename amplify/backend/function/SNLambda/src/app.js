/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const AWS = require("aws-sdk");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
var bodyParser = require("body-parser");
var express = require("express");
const { v4: uuidv4 } = require("uuid");

AWS.config.update({ region: process.env.TABLE_REGION });

const dynamodb = new AWS.DynamoDB.DocumentClient();

let tableName = "SNTable";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + "-" + process.env.ENV;
}

const path = "/notes";
// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

/********************************
 * HTTP Get method for list objects given a date*
 ********************************/
app.get(path, function (req, res) {
  console.log("req", req.query);
  const date = req.query["date"];
  console.log("req date", date);

  let queryParams = { TableName: tableName };

  if (date !== "*") {
    queryParams = {
      TableName: tableName,
      FilterExpression: "#dt = :date",
      ExpressionAttributeNames: { "#dt": "date" },
      ExpressionAttributeValues: {
        ":date": date,
      },
    };
  }

  dynamodb.scan(queryParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: "Could not load items: " + err });
    } else {
      console.log("data", data);
      res.json(data.Items);
    }
  });
});

/************************************
 * HTTP put method for insert object *
 *************************************/
app.put(path, function (req, res) {
  console.log("req body", req.body);

  let putItemParams = {
    TableName: tableName,
  };

  // generate id for new item
  if (req.body.id) {
    putItemParams["Item"] = { ...req.body };
  } else {
    putItemParams["Item"] = { ...req.body, id: uuidv4() };
  }

  dynamodb.put(putItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url, body: req.body });
    } else {
      res.json({
        success: "put call succeed!",
        url: req.url,
        data: putItemParams["Item"],
      });
    }
  });
});

/**************************************
 * HTTP remove method to delete object *
 ***************************************/
app.delete(path, function (req, res) {
  console.log("delete req body", req.body);

  if (req.body.id === "1" || req.body.id === "2") {
    res.json({ error: "Cannot Delete Root Items", url: req.url });
  }

  let removeItemParams = {
    TableName: tableName,
    Key: { id: req.body.id },
  };
  dynamodb.delete(removeItemParams, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.json({ error: err, url: req.url });
    } else {
      res.json({ success: "Item deleted!", url: req.url, data: data });
    }
  });
});
app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
