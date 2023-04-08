import { user_requests } from "../firebase";
import { addDoc } from "firebase/firestore";

export class Response {
  constructor(data, error, statusCode) {
    this.data = data;
    this.error = error;
    this.status = statusCode;
  }
}

export async function createRequest(name, email, mobile) {
  const request = {
    name: name.toString(),
    email: email.toString(),
    mobile: "+91" + mobile.toString(),
  };

  try {
    const response = await addDoc(user_requests, request);
    console.log(response);
    return new Response(response, "User Request Successful", 200);
  } catch (error) {
    console.log(error);
    return new Response(null, "Unknown Error Occurred", 400);
  }
}
