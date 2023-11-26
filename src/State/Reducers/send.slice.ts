import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Message {
  name: string;
  email: string;
  message: string;
}

interface SendState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  data: ServerResponse | null;
}

const initialState: SendState = {
  status: "idle",
  error: null,
  data: null,
};
type ServerResponse = Response & { message?: string };
export const send = createAsyncThunk<
  ServerResponse,
  Message,
  { rejectValue: string }
>("send", async ({ name, email, message }: Message, { rejectWithValue }) => {
  try {
    const response = await fetch(
      "https://portfolio-backend-qbuf.onrender.com/sendEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

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
