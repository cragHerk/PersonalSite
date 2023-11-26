import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Message {
  name: string;
  email: string;
  message: string;
}

interface SendState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  data: Response | null;
}

const initialState: SendState = {
  status: "idle",
  error: null,
  data: null,
};

export const send = createAsyncThunk(
  "send",
  async ({ name, email, message }: Message, { rejectWithValue }) => {
    try {
      console.log("Sending request with data:", { name, email, message }); // Log the data being sent
      const response = await fetch(
        "https://portfolio-backend-qbuf.onrender.com/sendEmail",
        {
          method: "POST",
          body: JSON.stringify({ name, email, message }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      const data = await response.json();
      console.log("Received response:", data); // Log the received response
      return data;
    } catch (error) {
      console.error("An error occurred:", error); // Log any errors
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("An unknown error occurred");
    }
  }
);

const sendSlice = createSlice({
  name: "send",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(send.pending, (state) => {
        state.status = "loading";
      })
      .addCase(send.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(send.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default sendSlice.reducer;
