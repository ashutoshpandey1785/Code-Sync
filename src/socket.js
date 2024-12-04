import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    "force new connection": true, // Always create a new connection
    reconnectionAttempts: "Infinity", // Retry indefinitely
    timeout: 10000, // Connection timeout (10 seconds)
    transports: ["websocket"], // Use WebSocket as the transport
  };

  return io(
    process.env.REACT_APP_BACKEND_URL || "http://localhost:5000",
    options
  );
};
