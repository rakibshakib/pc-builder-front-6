export const fetchDataByCategory = async (Category) => {
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Category: Category,
        }),
      };
  
      const response = await fetch(
        "https://pc-builder-rs.onrender.com/getProductBy-category",
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  