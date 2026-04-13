import { useState } from "react";
import { toast } from "sonner";

const useFetch = (cb) => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const fn = async (...args) => {
    setLoading(true);
    setError(null);

    try {
      const response = await cb(...args);
      setData(response);
      setError(null);
    } catch (error) {
      // Extract error message safely
      const errorMessage = error?.message || "An unexpected error occurred. Please try again.";
      setError(error);
      
      // Log error for debugging in development
      if (process.env.NODE_ENV === "development") {
        console.error("useFetch error:", { message: errorMessage, error });
      }
      
      // Show user-friendly error message
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fn, setData };
};

export default useFetch;
