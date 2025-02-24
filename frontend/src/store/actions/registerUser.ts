import { api } from "../../services/api/api";
import { FormData } from "../../types/form.types";

export const registerUser = async (userData: FormData) => {
    try {
      const response = await api.post('/register', userData);
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Registration failed');
    }
  };