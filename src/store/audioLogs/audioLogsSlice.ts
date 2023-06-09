import { Record } from "@/interfaces/Record";
import { createSlice } from "@reduxjs/toolkit";

type audiosStatus = "loading" | "loaded" | "error" | null;

const initialState = {
  audioRecords: [] as Record[],
  selectedRecord: null as Record | null,
  audiosStatus: null as audiosStatus,
};

export const audioRecordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    setAudioRecords: (state, { payload }) => {
      state.audiosStatus = "loaded";
      state.audioRecords = payload;
    },
    setSelectedRecord: (state, { payload }) => {
      state.selectedRecord = payload;
      state.audiosStatus = "loaded";
    },
    addAudioRecord: (state, { payload }) => {
      state.audioRecords.push(payload);
    },
    setAudiosStatus: (state, { payload }) => {
      state.audiosStatus = payload;
    },
    clearAudioRecords: (state) => {
      state.audioRecords = [];
      state.selectedRecord = null;
      state.audiosStatus = null;
    },
    setAudioStatusError: (state) => {
      state.audiosStatus = "error";
    },
    pushNewAudioRecord: (state, { payload }) => {
      state.audioRecords.push(payload);
    },
    updateSelectedRecordChat: (state, { payload }) => {
      if (state.selectedRecord) {
        state.selectedRecord.chat.push(payload);
      }
    },
    updateSelectedRecordTitle: (state, { payload }) => {
      if (state.selectedRecord) {
        state.selectedRecord.title = payload;
      }
    },
  },
});

export const {
  setAudioRecords,
  setSelectedRecord,
  setAudiosStatus,
  addAudioRecord,
  pushNewAudioRecord,
  setAudioStatusError,
  clearAudioRecords,
  updateSelectedRecordChat,
} = audioRecordsSlice.actions;
