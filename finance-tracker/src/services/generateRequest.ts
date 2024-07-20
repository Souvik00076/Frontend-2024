type RequestParams<T> = {
  path: string;
  queryParams?: Record<string, string>;
  body?: T;
  method: "GET" | "POST" | "PUT" | "DELETE"; // Add more methods as needed
};

export const generateRequest = async <T>(
  params: RequestParams<T>,
): Promise<T> => {
  const { path, queryParams, body, method } = params;
  // Create URL with query parameters if they exist
  const url = new URL(path);
  if (queryParams) {
    Object.keys(queryParams).forEach((key) =>
      url.searchParams.append(key, queryParams[key]),
    );
  }
  // Define fetch options based on method and body
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      // You can add more headers as needed
    },
    // Include body if method is not GET or HEAD
    ...(method !== "GET" && body && { body: JSON.stringify(body) }),
  };
  // Perform the fetch request
  const response = await fetch(url.toString(), options);
};
