import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div className="mt-4 bg-light px-lg-5 py-lg-4 px-3 py-3 fs-4 rounded-3 my-lg-5">
        <p>
          <span className="text-info">Q.</span> What is the difference between
          javascript and nodejs?
        </p>
        <div className=" fs-5">
          <span className="text-success  fs-4">Ans:</span> <em>Javascript</em>
          <ul>
            <li>Javascript is a programming language.</li>
            <li>It can run only in the browsers.</li>
            <li>
              Javascript mostly used on client side so it is used in frontend
              development.
            </li>
            <li>
              Javascript can play with DOM it means it does have the capability
              to add HTML.
            </li>
          </ul>
          <em>Node.js</em>
          <ul>
            <li>Node.js is a javascript runtime environment.</li>
            <li>
              Because of node.js we can run javascript outside of a browser.
            </li>
            <li>
              Javascript mostly used on server side so it is used in backend
              development.
            </li>
            <li>Node.ja doesn't have the capability to add HTML.</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 bg-light px-lg-5 py-lg-4 px-3 py-3 fs-4 rounded-3 my-lg-2">
        <p>
          <span className="text-info">Q.</span> What is the purpose of jwt and
          how does it work?
        </p>
        <p className="fs-5">
          <span className="text-success  fs-4">Ans:</span>
          <em> JWT - JSON Web Token</em> is an open standard that verify the
          owner of some JSON data.The purpose of JWT is to secure transmitting
          information between parties.
        </p>
        <p className="fs-5" style={{ textAlign: "justify" }}>
          The user and the client app first send in the option of sign in. An
          user need to start using the app with users login credentials. Once
          verified, the application API will generate a JWT token and then sign
          in using that API secret key.The API then will give back the token to
          the respective client application. After the client app receives the
          JWT token, it verifies its authenticity of the user.That's how JWT
          works.
        </p>
      </div>
      <div className="mt-4 bg-light px-lg-5 py-lg-4 px-3 py-3 fs-4 rounded-3 my-lg-5">
        <p>
          <span className="text-info">Q.</span> What is the differences between
          sql and nosql databases?
        </p>
        <div className=" fs-5">
          <span className="text-success  fs-4">Ans:</span>{" "}
          <em>SQL - Structured query language</em>
          <ul>
            <li>SQL databases are table based databases.</li>
            <li>SQL databases have a predefined schema.</li>
            <li>
              SQL databases are not suitable for hierarchical data storage.
            </li>
            <li>
              Oracle, Postgres, and MS-SQL are few examples of SQL database.
            </li>
          </ul>
          <em>NoSQL - Not only SQL</em>
          <ul>
            <li>
              NoSQL databases are document based, key-value pairs and graph
              databases.
            </li>
            <li>NoSQL databases use dynamic schema for unstructured data.</li>
            <li>
              More suitable for the hierarchical data store as it supports
              key-value pair method.
            </li>
            <li>
              MongoDB, Redis, Neo4j, Cassandra, Hbase are some examples of NoSQL
              database.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
