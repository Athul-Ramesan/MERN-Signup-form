import { api } from "../../services/api/api";

export const getUser = async (userId: string) => {
    try {
      const response = await api.get(`/getuser/${userId}`);
      return response.data;
    } catch (error: any) {
      if (error.response?.data?.message) {
        throw new Error(error.response.data.message);
      }
      throw new Error('Failed to fetch user data');
    }
  };