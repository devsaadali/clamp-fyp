import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/config";

const TestPage = () => {
  //     const usersCollection = databases.createCollection("users");

  //     const createUser = async (name, email, password) => {
  //       try {
  //         const response = await usersCollection.createDocument({
  //           name,
  //           email,
  //           password,
  //         });
  //         console.log("User created:", response.data);
  //       } catch (error) {
  //         console.error("Error creating user:", error);
  //       }
  //     };

  //     createUser("John Doe", "john.doe@example.com", "password123");

  //   //   const [name, setName] = useState("");

  const [institutes, setInstitutes] = useState();

  const init = async () => {
    try {
      const response = await databases.listDocuments(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID_INSTITUTES
      );

      console.log(response.documents);
      setInstitutes(response.documents);
    } catch (error) {
      console.log("ERROR IS: ", error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div style={{ marginTop: "100px", flexGrow: 1 }}>
        {institutes &&
          institutes.map((institute) => (
            <div key={institute.id}>
              <h2>{institute.name}</h2>
              {/* <p>{institute.description}</p> */}
            </div>
          ))}
        {/* <div>{process.env.REACT_APP_APPWRITE_COLLECTION_ID_INSTITUTES}</div> */}
      </div>
    </>
  );
};

export default TestPage;
