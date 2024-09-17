export const fetchBooksOnSale = async () => {
    try {
      const response = await fetch('/api/books-on-sale');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  };