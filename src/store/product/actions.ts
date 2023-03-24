import { createAction } from "@reduxjs/toolkit";

export const getProduct = createAction<string>('getProduct')