import React, { useEffect, useState } from "react";
import axios from "axios";
import { selectAuth} from "../../store/slices/authSlice";
import { useSelector } from 'react-redux';

function NewTypes() {
  const auth = useSelector(selectAuth)
  const [typeName, setTypeName] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const config = {
      method: "POST",
      url: "http://localhost:8080/api/v1/attach/upload",
      headers: {
        accept: "*/*",
        "Content-Type": "multipart/form-data"
      },
      data: formData,
    };

    try {
      const response = await axios(config);
      return response.data.id;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleCreate = async (documents) =>{
      const readyData = {
        name: typeName,
        roleNumbers: [
            {
                orderNumber: 1,
                roleId: "1"
            }
        ],
        documentId: documents[0]
    }

    const config = {
      method: "POST",
      url: "http://localhost:8080/api/v1/type/create",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${auth.user.jwt}`
      },
      readyData,
    };
    console.log(config);
    try {
      const response = await axios(config);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const filesArray = Array.from(files);
      const uploadPromises = filesArray.map(async (file) => {
        const id = await handleFileUpload(file);
        return id;
      });

      const documentIDs = await Promise.all(uploadPromises);
      handleCreate(documentIDs)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="m-5 rounded-xl bg-white p-3 shadow-sm flex flex-col gap-3 md:w-2/3">
        <div>
          <p className="text-xl text-blue-800 pl-3">Yangi ariza turi</p>
        </div>
        <div className="flex flex-col gap-1 px-3">
          <label htmlFor="name" className="pl-1 text-blue-800 text-sm">
            Ariza turi nomi *
          </label>
          <input
            id="name"
            type="text"
            className="p-2 pr-4 pl-4 rounded-xl focus:outline-none border text-sm text-black"
            placeholder="Ariza nomi..."
            value={typeName}
            onChange={(e) => setTypeName(e.target.value)}
          />
        </div>

        <div className="flex flex-col px-3">
          <label
            htmlFor="file"
            className=" text-sm cursor-pointer inline-block bg-blue-500 text-white rounded-lg p-3 transition duration-300 ease-in-out hover:bg-blue-700"
          >
            Fayl yuklash *
          </label>
          <input
            id="file"
            type="file"
            className="hidden"
            multiple
            onChange={(e) => setFiles(e.target.files)}
          />
        </div>
        <div className="mx-3 px-2">
          {files && files.length > 0 && (
            <ul className="list-disc pl-4">
              {Array.from(files).map((file, index) => (
                <li key={index} className="text-gray-700">
                  {file.name}
                </li>
              ))}
            </ul>
          )}
          {(!files || files.length === 0) && (
            <p className="text-gray-500">No files selected</p>
          )}
        </div>
        <div className="px-3">
          <button
            className="shadow-sm border border-blue-500 p-2 w-full rounded-lg text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleSubmit}
          >
            Tugatish
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTypes;
